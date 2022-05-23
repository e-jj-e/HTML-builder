const fs = require('fs');
let writeableStream = fs.createWriteStream('hi.txt');
const readline = require('readline');
let input = '';
console.log('Hello, just text here:');
let rl = readline.createInterface(
  process.stdin, process.stdout
);

rl.on('line', (input) => {
//   console.log('Type something here: ');
  fs.writeFile('some.txt', input, (err) => {
    if (err)
      console.log(err);
    else {
    //   console.log('File written successfully\n');
    //   console.log('The written has the following contents:');
      
      writeableStream.write(input);
    }
  });
  if(/exit/i.test(input) === true) {
    console.log('Have a good day!');
    rl.close();
  }
});



