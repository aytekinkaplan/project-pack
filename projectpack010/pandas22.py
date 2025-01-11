import pandas as pd

df = pd.read_csv('fitness_data.csv')

df['Date'] = pd.to_datetime(df['Date'])
df['Month'] = df['Date'].dt.month
df['Year'] = df['Date'].dt.year

print(df.to_string())
