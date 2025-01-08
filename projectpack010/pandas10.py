import pandas as pd

countries = {
    "Countries": ["Turkey", "Germany", "France", "Italy", "Spain", "United States", "Canada", "Mexico", "Brazil",
                  "Argentina", "Chile", "Colombia", "Peru", "Ecuador"],
    "Capitals": ["Ankara", "Berlin", "Paris", "Rome", "Madrid", "New York", "Toronto", "Mexico City", "Sao Paulo",
                 "Buenos Aires", "Santiago", "Bogota", "Lima", "Quito"],
    "Population": [83.5, 83.3, 66.9, 60.8, 46.9, 329.5, 38.0, 127.1, 206.3, 11.1, 17.6, 50.9, 3.6, 3.4],
    "Area": [780.9, 357.1, 640.9, 101.2, 505.7, 983.1, 998.2, 998.2, 854.7, 278.4, 163.4, 108.9, 128.0, 128.0],
    "GDP": [17000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000],
    "Languages": ["Turkish", "German", "French", "Spanish", "Portuguese", "English", "English", "Spanish", "Spanish",
                  "Spanish", "Spanish", "Spanish", "Spanish", "Spanish"],
    "Religion": ["Muslim", "Muslim", "Muslim", "Muslim", "Muslim", "Muslim", "Muslim", "Muslim", "Muslim", "Muslim",
                 "Muslim", "Muslim", "Muslim", "Muslim"],
    "Climate": ["Tropical", "Tropical", "Tropical", "Tropical", "Tropical", "Tropical", "Tropical", "Tropical",
                "Tropical", "Tropical", "Tropical", "Tropical", "Tropical", "Tropical"],
    "Currency": ["Lira", "Euro", "Euro", "Euro", "Euro", "Dollar", "Dollar", "Dollar", "Dollar", "Peso", "Peso", "Peso",
                 "Peso", "Peso"],
    "Government": ["Republic", "Republic", "Republic", "Republic", "Republic", "Republic", "Republic", "Republic",
                   "Republic", "Republic", "Republic", "Republic", "Republic", "Republic"],
    "Leader": ["Ahmet", "Angela", "Francis", "Maria", "Pedro", "Trump", "Trump", "Trump", "Trump", "Trump", "Trump",
               "Trump", "Trump", "Trump"]
}

my_countries = pd.DataFrame(countries)
print(my_countries)

with open("countries.html", "w", encoding="utf-8") as f:
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
            <h1 class="mt-4">Data About Countries</h1>
            {my_countries.to_html(classes="table table-striped")}
        </div>
    </body>
    </html>
    """)
