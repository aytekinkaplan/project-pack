import pandas as pd
"""
If you want change the original DataFrame, you can use the inplace parameter:
df.dropna(inplace=True)
"""

df = pd.read_csv('data.csv')
new_df = df.dropna() # Drop rows with missing values
print(new_df.to_string())

df.dropna(inplace= True)

print(df.to_string())