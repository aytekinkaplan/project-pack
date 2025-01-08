import pandas as pd

# Veri seti oluşturuluyor
data = {
    "calories": [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    "duration": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
}

# DataFrame oluşturuluyor
my_data = pd.DataFrame(data, index=["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"])
print(my_data)

# HTML dosyası oluşturuluyor
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
            <h1 class="mt-4">Data About Calories</h1>
            {my_data.to_html(classes="table table-striped")}
        </div>
    </body>
    </html>
    """)
