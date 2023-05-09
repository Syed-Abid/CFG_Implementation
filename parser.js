const nearley = require("nearley");
const grammar = require("./grammar.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!

try {
  parser.feed("bool a ;");
  // parser.results is an array of possible pars ings.
  console.log(JSON.stringify(parser.results)); // [[[[["foo"],"\n"]]]]
} catch (err) {
  console.log(`Parse failed with error ${err.message}`);
}