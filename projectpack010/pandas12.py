import pandas as pd

print("Reading data from JSON file:")
df = pd.read_json("data.json")
print(df)

print("Info about the Data")
print(df.info())