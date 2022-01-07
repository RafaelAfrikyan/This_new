# This - New

### 01. [Calculator](Calculator.js)

- Create functions for the Calculator class that can do the following:

  - Add two numbers.
  - Subtract two numbers.
  - Multiply two numbers.
  - Divide two numbers.

  ```js
  const calculator = new Calculator();
  calculator.add(10, 5);
  calculator.subtract(10, 5);
  calculator.multiply(10, 5);
  calculator.divide(10, 5);
  ```

  ### 02. [Person](Person.js)

  Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes
name and age, return a sentence in the following format:
{other person name} is {older than / younger than / the same age as} me.

```js
const p1 = Person("Samuel", 24)
const p2 = Person("Joel", 36)
const p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."
p2.compareAge(p1) ➞ "Samuel is younger than me."
p1.compareAge(p3) ➞ "Lily is the same age as me."
```