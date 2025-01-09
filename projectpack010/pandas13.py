import pandas as pd

my_data = pd.read_csv("data.csv", index_col=0)
print(my_data)

with open("data.html", "w", encoding="utf-8") as f:
  f.write(f"""
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Data</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
  </head>
  <body>
    <div class="container">
      <h1 class="mt-4">My Data</h1>
      {my_data.to_html(classes="table table-striped")}
    </div>
  </body>
  </html>
  """)