from flask import Flask, render_template, request, redirect, url_for
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html', title='Home', current_year=datetime.now().year)


@app.route('/about')
def about():
  return render_template('about.html', title='About', current_year=datetime.now().year)
@app.route('/java')
def java():
  return render_template('java.html', title='Java', current_year=datetime.now().year)

@app.route('/python')
def python():
  return render_template('python.html', title='Python', current_year=datetime.now().year)

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')