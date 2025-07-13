// Semantic analyzer for a simple language.
// Checks for variable redeclaration and use of undeclared variables.

/**
 * Performs semantic analysis on the given AST.
 * @param {Array} ast - The abstract syntax tree to analyze.
 * @returns {Array<string>} - A list of semantic error messages.
 */
export function semanticAnalyzer(ast) {
  const declaredVariables = new Set();
  const errors = [];

  for (const statement of ast) {
    if (statement.type === "LetStatement") {
      const variableName = statement.variableName;

      // Check for variable redeclaration
      if (declaredVariables.has(variableName)) {
        errors.push(`Error: Variable "${variableName}" is already declared.`);
      } else {
        declaredVariables.add(variableName);
      }

      // Check the right-hand side expression for undeclared variables
      checkExpression(statement.value, declaredVariables, errors);
    }
  }

  return errors;
}

/**
 * Recursively checks expressions for the use of undeclared variables.
 * @param {Object} expr - The expression node.
 * @param {Set<string>} declaredVariables - Set of declared variable names.
 * @param {Array<string>} errors - Array to collect error messages.
 */
function checkExpression(expr, declaredVariables, errors) {
  if (!expr) return;

  switch (expr.type) {
    case "Variable":
      if (!declaredVariables.has(expr.name)) {
        errors.push(`Error: Variable "${expr.name}" is used before declaration.`);
      }
      break;

    case "BinaryOperation":
      checkExpression(expr.left, declaredVariables, errors);
      checkExpression(expr.right, declaredVariables, errors);
      break;

    // For NumberLiteral and any other types, nothing to check
    default:
      break;
  }
}
