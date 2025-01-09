import pandas as pd

df = pd.read_csv('data.csv')
print("Info About Old Data")
print(df.info())

print("Info About New Data")
new_df = df.dropna()
print(new_df.info())


print(df.isnull()) # True if missing
print(new_df.to_string())