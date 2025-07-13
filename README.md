# Semantic Analyzer

A basic semantic analyzer for a simple programming language, implemented in JavaScript.
This project demonstrates the semantic analysis phase of a compiler, focusing on variable declaration and usage checks, using a sample Abstract Syntax Tree (AST).

---

## Features

* Detects **redeclaration of variables** (declaring a variable more than once)
* Detects **usage of undeclared variables**
* Modular and easy-to-read code
* Designed for educational and demonstration purposes

---

## Project Structure

```
semantic-analyzer/
├── analyzer.js
├── abstract-syntax-tree.js
├── main.js
├── package.json
```

* **`analyzer.js`**: Contains the semantic analyzer logic.
* **`abstract-syntax-tree.js`**: Provides a sample AST for testing.
* **`main.js`**: Entry point for running the analyzer and displaying results.

---

## Getting Started

### **Prerequisites**

* [Node.js](https://nodejs.org/) (version 14+ recommended)

### **Installation**

Clone the repository or download the source code:

```bash
git clone https://github.com/robinsonur/semantic-analyzer-js.git
cd semantic-analyzer-js
```

Install dependencies (if you add any in the future):

```bash
npm install
```

### **Running the Semantic Analyzer**

You can run the analyzer using the included start script:

```bash
npm start
```

Or directly with Node:

```bash
node main.js
```

### **Expected Output**

If there are semantic errors in the AST, you will see a list like:

```
Semantic analysis errors:
Error: Variable "x" is already declared.
Error: Variable "a" is used before declaration.
```

If no errors are found:

```
Semantic analysis successful: No errors found.
```

---

## How It Works

1. **AST Construction**:
   The sample AST (`abstract-syntax-tree.js`) represents a program after parsing, using plain JavaScript objects for statements and expressions.

2. **Semantic Analysis**:
   The analyzer (`analyzer.js`) checks for:

   * Variable redeclaration within the same scope
   * Usage of variables before they are declared

3. **Execution**:
   The entry point (`main.js`) runs the analyzer on the AST and prints out semantic errors (if any) or a success message.

---

## Customization

* To experiment, modify the AST in `abstract-syntax-tree.js` and rerun the project.
* You can extend the analyzer to support more semantic checks, type checking, or more complex language features.

---

## Author

**Robinson U. Rodríguez**
[GitHub](https://github.com/robinsonur)
