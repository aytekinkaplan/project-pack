import pandas as pd

countries_with_their_capitals = {
    "Countries": ["Turkey", "Germany", "France", "Italy", "Spain"],
    "Capitals": ["Ankara", "Berlin", "Paris", "Rome", "Madrid"]
}

my_countries = pd.DataFrame(countries_with_their_capitals)
print(my_countries)

print(my_countries.loc[0])


data = {
    "name": ["kevin", "jane", "bob", "alice"],
    "age": [24, 23, 25, 21],
    "gender": ["male", "female", "male", "female"]
}

my_data = pd.DataFrame(data)
print(my_data)

print(my_data.loc[0])