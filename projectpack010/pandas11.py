import pandas as pd

reading_data = pd.read_csv("data.csv")
print(reading_data)

print("Print the entire DataFrame as a string:")
print(reading_data.to_string())  # Print the entire DataFrame as a string

print("Print the first 5 rows of the DataFrame:")
print(reading_data.head())  # Print the first 5 rows of the DataFrame

print("Print the last 5 rows of the DataFrame:")
print(reading_data.tail())  # Print the last 5 rows of the DataFrame

print("Print the column names of the DataFrame:")
print(reading_data.columns)  # Print the column names of the DataFrame
