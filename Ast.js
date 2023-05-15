const nearley = require("nearley");
const grammar = require("./grammar.js");
const fs = require("mz/fs");
const path = require("path");

// Create a Parser object from our grammar.

async function main() {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  const filename = process.argv[2];
  const outputFile = path.basename(filename, ".mypl") + ".json";
  const code = (await fs.readFile(filename)).toString();

  // Parse something!

  try {
    parser.feed(code);
    const ast = parser.results[0];
    await fs.writeFile(outputFile, JSON.stringify(ast));
    console.log("Parse succeeded .");
    console.log(`Wrote ${outputFile}`);
    //   parser.feed("int a,b,c;");
    //   parser.feed("int a = 10;");
    // parser.feed("int a = 10 , b = 12, c = 12 ;");
    // parser.feed("for(int i=0; i<2; d++){code...}");
  } catch (err) {
    console.log(`Parse failed with error ${err.message}`);
  }
}

main();
