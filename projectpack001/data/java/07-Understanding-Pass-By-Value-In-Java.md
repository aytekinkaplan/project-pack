# 🔄 **Understanding Pass-By-Value in Java**

**Last Updated:** January 8, 2024  
**Author:** Baeldung  
**Reviewed by:** Michal Aibin

---

## 📚 **1. Introduction**

In programming, two common ways of passing parameters to methods are **Pass-by-Value** and **Pass-by-Reference**. Different programming languages handle these mechanisms differently.

In **Java**, everything is **Pass-by-Value**, regardless of whether you're dealing with primitives or object references.

In this guide, we’ll explore:

- The difference between **Pass-by-Value** and **Pass-by-Reference**.
- How Java handles parameter passing for primitives and objects.
- Common misconceptions and clarifications.

---

## 🧐 **2. Pass-by-Value vs Pass-by-Reference**

### **2.1 Pass-by-Value**

In **Pass-by-Value**:

- A **copy of the variable's value** is passed to the method.
- The original variable remains unchanged.
- Modifications made to the parameter inside the method do not affect the original variable.

**Key Takeaway:** Java always passes variables **by value**, even for object references.

### **2.2 Pass-by-Reference**

In **Pass-by-Reference**:

- A **reference to the variable** (memory address) is passed.
- Changes made to the parameter inside the method **directly affect the original variable**.
- Java **does not** use Pass-by-Reference.

---

## 🛠️ **3. Parameter Passing in Java**

### **3.1 Primitives vs Objects**

- **Primitive Data Types:** The actual value is copied and passed.
- **Objects:** A **copy of the reference** is passed, not the object itself.

Both primitives and object references are stored in **stack memory**.

### **How Java Passes Parameters:**

- For **primitives**: A copy of the value is passed.
- For **objects**: A copy of the **reference** is passed (not the object itself). This means the reference still points to the same object in **heap memory**.

### **Key Misconception:**

While it seems like Java behaves like Pass-by-Reference for objects, it’s actually **Pass-by-Value** for the reference.

---

## 🔢 **4. Passing Primitive Types**

Primitive variables store actual values in **stack memory**.

### **Example:**

```java
public class PrimitiveExample {
    public static void modify(int x) {
        x = 10;
    }

    public static void main(String[] args) {
        int a = 5;
        modify(a);
        System.out.println(a); // Output: 5
    }
}
```

### **Explanation:**

- The variable `a` is passed **by value**.
- The `modify` method receives a **copy** of `a`.
- Changes in `modify` do not affect the original variable.

**Conclusion:** Primitives are always passed by value.

---

## 🧩 **5. Passing Object References**

Object references store **memory addresses** that point to objects in **heap memory**.

### **Example:**

```java
class Foo {
    int value;
}

public class ReferenceExample {
    public static void modify(Foo obj) {
        obj.value = 10;
        obj = new Foo();
        obj.value = 20;
    }

    public static void main(String[] args) {
        Foo foo = new Foo();
        foo.value = 5;
        modify(foo);
        System.out.println(foo.value); // Output: 10
    }
}
```

### **Explanation:**

1. The `modify` method receives a **copy of the reference**.
2. `obj.value = 10;` changes the value of the original object.
3. `obj = new Foo();` creates a **new object**, and the reference now points to this new object.
4. Changes made to the **new object** do not affect the original object.

**Conclusion:** The reference itself is passed **by value**, not the object.

---

## 📝 **6. Key Takeaways**

- Java is **strictly Pass-by-Value**.
- For **primitives**: The actual value is passed.
- For **objects**: A **copy of the reference** is passed.
- Changes made to **object fields** are reflected because the reference still points to the same object.
- Assigning a **new object** to the reference inside a method will not affect the original reference.

---

## 🚀 **7. Common Misconceptions**

- **Myth:** Java supports Pass-by-Reference.
- **Truth:** Java **always** uses Pass-by-Value.
- **Myth:** Passing objects means passing the actual object.
- **Truth:** Java passes **copies of references** to objects.

Understanding this distinction prevents unintended bugs and makes debugging easier.

---

## 🎓 **8. Summary**

In this guide, we:

- Explored **Pass-by-Value** and **Pass-by-Reference**.
- Clarified how Java handles parameter passing.
- Demonstrated how **primitives** and **object references** are passed.

Always remember: Java passes **values**, even when dealing with object references.

---
