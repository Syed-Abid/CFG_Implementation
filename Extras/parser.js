const nearley = require("nearley");
const grammar = require("./grammar.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!

try {
  // use variable grammer
  ///user input
  // feed
  // parser.feed("int a;");
  // parser.feed("int a,b,c;");
  // parser.feed("int a = 10;");
  // parser.feed("int a = 10 , b = 12, c = 12 ;");
  // parser.feed("for(int i=0; i<4; i++){code...}");
  parser.feed("while(i<3){code...}");

  console.log(`Variable Declaration : ${JSON.stringify(parser.results[0])}`);
} catch (err) {
  console.log(`Parse failed with error ${err.message}`);
}
