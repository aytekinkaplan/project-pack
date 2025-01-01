import os
from datetime import datetime
import logging
from logging.handlers import RotatingFileHandler
from flask import Flask, render_template, request, redirect, url_for, abort
import markdown
import frontmatter
import html

# Create Flask app
app = Flask(__name__)
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# Config setup
class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'hard-to-guess-string'
    POSTS_DIR = {
        'java': os.path.join(BASE_DIR, 'data/java'),
        'python': os.path.join(BASE_DIR, 'data/python'),
        'javascript': os.path.join(BASE_DIR, 'data/javascript'),
        'react': os.path.join(BASE_DIR, 'data/react')
    }

app.config.from_object(Config)

# Setup logging
log_dir = os.path.join(BASE_DIR, 'logs')
if not os.path.exists(log_dir):
    os.mkdir(log_dir)

file_handler = RotatingFileHandler(
    os.path.join(log_dir, 'app.log'),
    maxBytes=10240,
    backupCount=10
)
file_handler.setFormatter(logging.Formatter(
    '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
))
file_handler.setLevel(logging.INFO)
app.logger.addHandler(file_handler)
app.logger.setLevel(logging.INFO)
app.logger.info('Application startup')

# Create directories
for directory in app.config['POSTS_DIR'].values():
    if not os.path.exists(directory):
        os.makedirs(directory)

def get_posts(category):
    posts = []
    category_dir = app.config['POSTS_DIR'][category]
    
    if os.path.exists(category_dir):
        for filename in os.listdir(category_dir):
            if filename.endswith('.md'):
                file_path = os.path.join(category_dir, filename)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        post = frontmatter.load(f)
                    
                    html_content = markdown.markdown(post.content)
                    posts.append({
                        'name': filename[:-3],
                        'title': post.get('title', filename[:-3]),
                        'description': post.get('description', ''),
                        'date': post.get('date', datetime.now()),
                        'author': post.get('author', 'Unknown Author'),
                        'excerpt': post.get('excerpt', post.content[:150] + '...'),
                        'content': html_content,
                        'path': file_path
                    })
                except Exception as e:
                    app.logger.error(f'Error reading post {filename}: {str(e)}')
    
    return sorted(posts, key=lambda x: x['date'], reverse=True)

@app.context_processor
def inject_current_year():
    return {'current_year': datetime.now().year}

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(e):
    app.logger.error(f'Server Error: {str(e)}')
    return render_template('500.html'), 500

@app.route('/')
def index():
    return render_template('index.html', title='Home')

@app.route('/about')
def about():
    return render_template('about.html', title='About')

@app.route('/java')
def java():
    posts = get_posts('java')
    return render_template('java.html', title='Java Programming', posts=posts, category='java')
@app.route('/python')
def python():
    posts = get_posts('python')
    return render_template('python.html', title='Python', posts=posts, category='python')

@app.route('/javascript')
def javascript():
    posts = get_posts('javascript')
    return render_template('javascript.html', title='JavaScript Programming', posts=posts, category='javascript')

@app.route('/react')
def react():
    posts = get_posts('react')
    return render_template('react.html', title='React.js Programming', posts=posts, category='react')

@app.route('/post/<category>/<post_name>')
def show_post(category, post_name):
    # 1. Geçerli kategori kontrolü
    if category not in app.config['POSTS_DIR']:
        abort(404, description="Category not found")
    
    post_dir = app.config['POSTS_DIR'][category]
    post_path = os.path.join(post_dir, f"{post_name}.md")
    
    # 2. Path Traversal Koruması
    if not os.path.abspath(post_path).startswith(os.path.abspath(post_dir)):
        abort(403, description="Access forbidden")
    
    # 3. Dosya Mevcudiyet Kontrolü
    if not os.path.exists(post_path):
        abort(404, description="Post not found")
    
    try:
        # 4. Dosya Okuma ve Meta Veri Yükleme
        with open(post_path, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
        
        # 5. Markdown'dan HTML Dönüşümü ve Güvenlik Önlemi
        html_content = markdown.markdown(
            post.content,
            extensions=['extra', 'nl2br', 'sane_lists'],
            output_format='html5'
        )
        
        # 6. Date Formatting
        post_date = post.get('date', datetime.now())
        if isinstance(post_date, datetime):
            formatted_date = post_date.strftime('%Y-%m-%d')
        else:
            formatted_date = str(post_date)
        
        return render_template(
            'post.html',
            content=html_content,
            title=html.escape(post.get('title', post_name)),
            date=formatted_date,
            author=html.escape(post.get('author', 'Unknown Author')),
            category=category
        )
    except Exception as e:
        app.logger.error(f'Error reading post: {str(e)}')
        abort(500, description="Internal Server Error")


if __name__ == '__main__':
    debug = os.environ.get('FLASK_DEBUG', '0') == '1'
    app.run(host='0.0.0.0', debug=debug)