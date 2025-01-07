import pandas as pd

countries_with_their_capitals = {
    "Countries": ["Turkey", "Germany", "France", "Italy", "Spain"],
    "Capitals": ["Ankara", "Berlin", "Paris", "Rome", "Madrid"]
}

my_countries = pd.DataFrame(countries_with_their_capitals)
print(my_countries)

print(my_countries.loc[0])
