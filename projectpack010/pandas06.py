import pandas as pd

from pandas04 import countries

data = {
    "name": ["kevin", "jane", "bob", "alice"],
    "age": [24, 23, 25, 21],
    "gender": ["male", "female", "male", "female"]
}

my_data = pd.DataFrame(data)
print(my_data)

print(my_data["name"])
print(my_data["age"])
print(my_data["gender"])

countries_with_their_capitals = {
    "Counties": ["Turkey", "Germany", "France", "Italy", "Spain"],
    "Capitals": ["Ankara", "Berlin", "Paris", "Rome", "Madrid"]
}

my_countries = pd.DataFrame(countries_with_their_capitals)
print(my_countries)