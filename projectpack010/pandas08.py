import pandas as pd

data = {
    "name": ["Kevin", "Jane", "Bob", "Alice", "John", "Emily", "Michael", "Sarah", "David", "Jessica", "Daniel", "Olivia"],
    "last_name": ["Smith", "Johnson", "Williams", "Brown", "Jones", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas"],
    "age": [24, 23, 25, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    "gender": ["male", "female", "male", "female", "male", "female", "male", "female", "male", "female", "male", "female"],
    "job": ["developer", "designer", "engineer", "teacher", "programmer", "architect", "manager", "salesperson", "lawyer", "writer", "artist", "scientist"],
    "salary": [5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000],
    "country": ["Turkey", "Germany", "France", "Italy", "Spain", "United States", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "Colombia"],
    "city": ["Ankara", "Berlin", "Paris", "Rome", "Madrid", "New York", "Toronto", "Mexico City", "Sao Paulo", "Buenos Aires", "Santiago", "Bogota"],
    "zip_code": ["12345", "67890", "09876", "54321", "98765", "12345", "67890", "09876", "54321", "98765", "12345", "67890"],
    "phone_number": ["1234567890", "9876543210", "5555555555", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999"],
}

my_data = pd.DataFrame(data)
print(my_data)

print(my_data["name"])
print(my_data["last_name"])
print(my_data["age"])
print(my_data["gender"])
print(my_data["job"])
print(my_data["salary"])
print(my_data["country"])
print(my_data["city"])
print(my_data["zip_code"])
print(my_data["phone_number"])