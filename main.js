// Entry point for running the semantic analyzer.
import { abstractSyntaxTree } from "./abstract-syntax-tree.js";
import { semanticAnalyzer } from "./analyzer.js";

(() => {
  // Run semantic analysis and display results
  const errors = semanticAnalyzer(abstractSyntaxTree);

  // Check if there are any semantic errors
  if (!errors.length)
    return console.log("Semantic analysis successful: No errors found.")
  ;

  // Display any semantic errors found
  console.log("Semantic analysis errors:");
  for (const error of errors) console.log(error);
})()
