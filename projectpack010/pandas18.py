import pandas as pd

# CSV dosyasını okuma
df = pd.read_csv('data.csv')

# "Calories" sütunundaki NaN değerleri 130 ile doldurma
df["Calories"].fillna(130, inplace=True)

# DataFrame'i string olarak yazdırma
print(df.to_string())
