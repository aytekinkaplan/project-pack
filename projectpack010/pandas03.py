import pandas as pd
# Create a dictionary of lists
# Example data
mydataset = {
  "cars": ["BMW", "Volvo", "Ford"],
  "passengers": [3, 7, 2],
  "price": [10000, 20000, 30000],
  "color": ["red", "white", "blue"]
}

df = pd.DataFrame(mydataset)
print(df)

# Write the DataFrame to a CSV file
df.to_csv("cars.csv", index=False)

# Read the CSV file into a DataFrame
df = pd.read_csv("cars.csv")
print(df)