import pandas as pd

calories = {"day1": 420, "day2": 380, "day3": 390}

my_calories = pd.Series(calories)
print(my_calories)

print(my_calories["day1"])
print(my_calories["day2"])
print(my_calories["day3"])

person = {
    "kevin": {
        "name": "kevin",
        "age": 24,
        "gender": "male"
    },
    "jane": {
        "name": "jane",
        "age": 23,
        "gender": "female"
    },
    "bob": {
        "name": "bob",
        "age": 25,
        "gender": "male"
    }
}

my_person = pd.DataFrame(person)
print(my_person)

print(my_person["kevin"]["name"])
print(my_person["jane"]["age"])
print(my_person["bob"]["gender"])
