# 🔑 **A Comprehensive Guide to hashCode() in Java**

**Last Updated:** January 8, 2024  
**Author:** Baeldung  
**Reviewed by:** Zeger Hendrikse

---

## 📚 **1. Overview**

Hashing is one of the fundamental concepts in computer science, powering data structures such as **HashMap** and **HashSet** in Java. At the core of these structures lies the **hashCode()** method, a critical component that ensures efficient data retrieval and storage.

In this guide, we’ll explore:

- The role of **hashCode()** in Java collections.
- The contract between **equals()** and **hashCode()**.
- Best practices for implementing **hashCode()**.
- Common pitfalls and how to avoid them.

Whether you're a beginner or an experienced developer, mastering **hashCode()** is essential for writing efficient and bug-free Java code.

---

## 🧐 **2. hashCode() in Data Structures**

In Java, hash-based collections like **HashMap**, **HashSet**, and **LinkedHashMap** use **hashCode()** to store and retrieve data efficiently.

### **Why is hashCode() Important?**

When you add an object to a hash-based collection:

1. **hashCode()** computes a hash value.
2. The hash value determines which **bucket** the object is stored in.
3. During retrieval, **hashCode()** helps locate the correct bucket.

### **Example Without hashCode Optimization:**

```java
List<String> words = Arrays.asList("Welcome", "to", "Baeldung");
if (words.contains("Baeldung")) {
    System.out.println("Found Baeldung in the list");
}
```

Here, the `contains()` method performs a **linear search** – inefficient for large datasets.

By contrast, hash-based structures achieve **O(1)** complexity for lookups when **hashCode()** is implemented effectively.

---

## ⚙️ **3. How hashCode() Works**

### **3.1 The Contract Between equals() and hashCode()**

To ensure consistency, Java specifies the following contract:

1. **Consistency:** If `hashCode()` is called multiple times on the same object during a single execution of the application, it must return the **same value**, provided the object state does not change.
2. **Equality Rule:** If two objects are considered equal using `equals()`, they **must return the same hash code**.
3. **Non-Equality Rule:** If two objects are not equal, they **should return different hash codes** (not mandatory but improves performance).

### **3.2 Simple Example:**

```java
@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    User user = (User) o;
    return id == user.id && name.equals(user.name);
}

@Override
public int hashCode() {
    return Objects.hash(id, name);
}
```

### **3.3 Key Takeaways:**

- Objects considered equal must share the same hash code.
- Unequal objects should ideally have different hash codes.
- Never rely on the **default Object hashCode()** implementation for custom objects.

---

## 🛡️ **4. Implementing hashCode() Correctly**

### **4.1 A Naive Implementation**

```java
@Override
public int hashCode() {
    return 1; // Always returns the same value
}
```

While this satisfies the contract, it defeats the purpose of hashing. All objects will end up in the **same bucket**, resulting in **O(n)** lookup performance.

### **4.2 Improved hashCode Implementation**

```java
@Override
public int hashCode() {
    return (int) id * name.hashCode() * email.hashCode();
}
```

This is better but not ideal. Multiplying hash codes can lead to hash collisions.

### **4.3 Best Practice Implementation (Using Prime Numbers)**

```java
@Override
public int hashCode() {
    int hash = 7;
    hash = 31 * hash + (int) id;
    hash = 31 * hash + (name == null ? 0 : name.hashCode());
    hash = 31 * hash + (email == null ? 0 : email.hashCode());
    return hash;
}
```

### **4.4 Why Prime Numbers?**

The number **31** is often used because:

- It’s a **prime number**, reducing the chance of hash collisions.
- Multiplication by 31 can be efficiently implemented with bitwise operations:

```java
31 * i == (i << 5) - i
```

---

## 📦 **5. Standard Tools for hashCode Implementation**

### **5.1 Using `Objects.hash()` (Java 7+)**

```java
@Override
public int hashCode() {
    return Objects.hash(id, name, email);
}
```

This is clean, concise, and avoids manual arithmetic.

### **5.2 IDE-Generated Implementations**

- **IntelliJ IDEA:** Generates optimized implementations.
- **Eclipse:** Uses constants like `prime` for hashing.

### **5.3 Using Lombok**

Add Lombok to your project:

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.30</version>
</dependency>
```

Then annotate your class:

```java
@EqualsAndHashCode
public class User {
    private long id;
    private String name;
}
```

---

## 🧩 **6. Hash Collisions and How to Handle Them**

Even with an excellent hashCode implementation, **hash collisions** are inevitable.

### **6.1 How Java Handles Collisions:**

- **Separate Chaining:** Multiple entries in the same bucket are stored in a **linked list**.
- **Java 8 Optimization:** If a bucket exceeds a threshold, Java replaces the linked list with a **balanced tree**, improving lookup to **O(log n)**.

### **6.2 Avoiding Frequent Collisions:**

- Use a good hashing algorithm.
- Include **unique fields** in hashCode calculations.

---

## 📝 **7. Conclusion**

In this guide, we explored:

- The importance of **hashCode()**.
- The contract between **equals()** and **hashCode()**.
- Different implementations and best practices.
- Handling hash collisions.

A robust **hashCode()** implementation improves the performance and reliability of hash-based collections.

---
