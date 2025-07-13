// This file defines a sample Abstract Syntax Tree (AST) for a simple language.
export const abstractSyntaxTree = [{
  type: "LetStatement",
  variableName: "x",
  value: { type: "NumberLiteral", value: 5 }
}, {
  type: "LetStatement",
  variableName: "y",
  value: {
    type: "BinaryOperation",
    operator: "+",
    left: { type: "Variable", name: "x" },
    right: { type: "NumberLiteral", value: 2 }
  }
}, {
  type: "LetStatement",
  variableName: "x", // Error: Redeclared variable
  value: { type: "NumberLiteral", value: 7 }
}, {
  type: "LetStatement",
  variableName: "z",
  value: {
    type: "BinaryOperation",
    operator: "+",
    left: { type: "Variable", name: "a" }, // Error: "a" not declared
    right: { type: "NumberLiteral", value: 1 }
  }
}];
