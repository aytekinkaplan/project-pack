import pandas as pd

df = pd.read_csv('https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv')

# HTML çıktısını bir değişkene al
html_table = df.to_html(index=False, classes='table table-striped')

# HTML dosyasına göm
with open('titanic.html', 'w', encoding='utf-8') as f:
    f.write(f'''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Titanic Dataset</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container">
            <h1 class="mt-4">Titanic Dataset</h1>
            {html_table}
        </div>
    </body>
    </html>
    ''')

