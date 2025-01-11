import pandas as pd

df = pd.read_csv('data.csv')

x =df["Calories"].median()

df["Calories"].fillna(x, inplace = True)

# Another example
df["Calories"].fillna(df["Calories"].mean(), inplace = True)
"""
Explanation:
df["Calories"]: The column to be filled
df["Calories"].mean(): The value to be filled
inplace = True: The column is filled in the original DataFrame
"""
print(df.to_string())