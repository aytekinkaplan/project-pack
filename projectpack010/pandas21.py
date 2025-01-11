import pandas as pd

df =pd.read_csv('data.csv')

df["Calories"].fillna(df["Calories"].mode()[0], inplace = True)

"""
Explanation:
df["Calories"]: The column to be filled
df["Calories"].mode()[0]: The value to be filled
inplace = True: The column is filled in the original DataFrame
"""

print(df.to_string())