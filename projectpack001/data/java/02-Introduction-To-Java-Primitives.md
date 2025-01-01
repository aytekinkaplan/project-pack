### **Introduction to Java Primitives**

---

## **1. Overview**

Java features **eight primitive data types** that serve as the building blocks for data manipulation. These types represent **raw values** and are not considered objects, which makes them **memory-efficient** and **faster** in execution.

In this guide, we'll explore:

- Each primitive data type
- Their **size**, **range**, **default values**, and **usage examples**

---

## **2. Primitive Data Types in Java**

Java's **primitive data types** are:

| **Type**    | **Size (bits)** | **Minimum**                | **Maximum**               | **Example**               |
| ----------- | --------------- | -------------------------- | ------------------------- | ------------------------- |
| **byte**    | 8               | -128                       | 127                       | `byte b = 100;`           |
| **short**   | 16              | -32,768                    | 32,767                    | `short s = 30_000;`       |
| **int**     | 32              | -2,147,483,648             | 2,147,483,647             | `int i = 100_000_000;`    |
| **long**    | 64              | -9,223,372,036,854,775,808 | 9,223,372,036,854,775,807 | `long l = 100000000000L;` |
| **float**   | 32              | ±1.4 × 10⁻⁴⁵               | ±3.4 × 10³⁸               | `float f = 1.456f;`       |
| **double**  | 64              | ±4.9 × 10⁻³²⁴              | ±1.7 × 10³⁰⁸              | `double d = 1.456789;`    |
| **char**    | 16              | 0                          | 65,535                    | `char c = 'A';`           |
| **boolean** | 1               | —                          | —                         | `boolean flag = true;`    |

These types are stored **directly on the stack**, improving performance compared to objects.

---

## **2.1 int**

- **Size:** 32 bits
- **Range:** -2,147,483,648 to 2,147,483,647
- **Default Value:** `0`

**Declaration Example:**

```java
int x = 424_242;
int y;
```

**Key Points:**

- Suitable for non-fractional numbers.
- Supports arithmetic operations (`+`, `-`, `*`, `/`).
- Unsigned integers are supported via Java 8's helper functions.

---

## **2.2 byte**

- **Size:** 8 bits
- **Range:** -128 to 127
- **Default Value:** `0`

**Declaration Example:**

```java
byte b = 100;
byte empty;
```

**Key Points:**

- Used for memory efficiency.
- Common in file processing and data streams.

---

## **2.3 short**

- **Size:** 16 bits
- **Range:** -32,768 to 32,767
- **Default Value:** `0`

**Declaration Example:**

```java
short s = 20_020;
short empty;
```

**Key Points:**

- Used when memory optimization is required.
- Supports arithmetic operations.

---

## **2.4 long**

- **Size:** 64 bits
- **Range:** -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
- **Default Value:** `0`

**Declaration Example:**

```java
long l = 1_234_567_890L;
long empty;
```

**Key Points:**

- Ideal for handling large integer values.
- Always append `L` or `l` when assigning long literals.

---

## **2.5 float**

- **Size:** 32 bits
- **Range:** ±1.4 × 10⁻⁴⁵ to ±3.4 × 10³⁸
- **Default Value:** `0.0`

**Declaration Example:**

```java
float f = 3.145f;
float empty;
```

**Key Points:**

- Single-precision decimal numbers.
- Append `f` or `F` for float literals.
- Precision loss can occur with extensive decimal places.

---

## **2.6 double**

- **Size:** 64 bits
- **Range:** ±4.9 × 10⁻³²⁴ to ±1.7 × 10³⁰⁸
- **Default Value:** `0.0`

**Declaration Example:**

```java
double d = 3.141592653589793D;
double empty;
```

**Key Points:**

- Double-precision floating-point numbers.
- Append `D` or `d` for clarity.
- Preferred for precise scientific calculations.

---

## **2.7 boolean**

- **Size:** 1 bit (stored as 1 byte for efficiency)
- **Values:** `true`, `false`
- **Default Value:** `false`

**Declaration Example:**

```java
boolean isActive = true;
boolean empty;
```

**Key Points:**

- Essential for control structures (`if`, `while`).
- Cannot be converted directly to other types.

---

## **2.8 char**

- **Size:** 16 bits
- **Range:** 0 to 65,535
- **Default Value:** `'\u0000'`

**Declaration Example:**

```java
char letter = 'A';
char unicodeChar = 65; // Represents 'A'
char empty;
```

**Key Points:**

- Represents a single character or Unicode value.
- Enclosed in single quotes (`'A'`).

---

## **2.9 Overflow and Underflow**

### **Overflow Example:**

```java
int i = Integer.MAX_VALUE;
int j = i + 1;
// j will roll over to -2,147,483,648
```

### **Underflow Example:**

```java
double d = Double.MAX_VALUE;
double o = d + 1;
// o will be Infinity
```

- **Overflow:** Value exceeds the maximum limit and wraps around.
- **Underflow:** Value goes below the minimum limit.

---

## **2.10 Autoboxing**

Autoboxing refers to the automatic conversion between a primitive type and its corresponding wrapper class.

**Example:**

```java
Integer i = 1;
Character c = 'c';
```

- `int` ↔ `Integer`
- `char` ↔ `Character`

---

## **3. Conclusion**

In this tutorial, we've explored the **eight primitive data types** in Java:

- **int**, **byte**, **short**, **long** for integers
- **float**, **double** for floating-point numbers
- **boolean** for logical values
- **char** for single characters

### **Key Takeaways:**

- Primitive types are memory-efficient and fast.
- Each type has a **default value** and **specific size**.
- Autoboxing helps in working seamlessly with wrapper classes.

Understanding these types is fundamental to mastering Java programming.

---

If you have further questions, feel free to ask! 😊🚀
