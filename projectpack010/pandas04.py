import pandas as pd

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

my_fruits = pd.Series(fruits)
print(my_fruits)

print(my_fruits[0])

# Another example
numbers = [1, 2, 3, 4, 5]
my_numbers = pd.Series(numbers)
print(my_numbers)

print(my_numbers[0])
print(my_numbers[1])

# Another example
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
my_fruits = pd.Series(fruits, index=["a", "b", "c", "d", "e"])
print(my_fruits)

print(my_fruits["a"])
print(my_fruits["b"])
print(my_fruits["c"])
print(my_fruits["d"])
print(my_fruits["e"])

# Another example
countries = ["Turkey", "Germany", "France", "Italy", "Spain"]
my_favorite_countries = pd.Series(countries, index=["a", "b", "c", "d", "e"])
print(my_favorite_countries)