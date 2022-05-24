const fs = require('fs');
const path = require('path');
let fileName = '03-files-in-folder/secret-folder';
  

fs.readdir(fileName, 
  { withFileTypes: true },
  (err, files) => {
    console.log('\nCurrent directory files:');
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        fs.stat(fileName, (err, stats) => {
          if (err) {
            console.log(err);
          }
          console.log(file.name.slice(0, -path.extname(file.name).length) + '-' + file.name.substr(file.name.indexOf('.')+1) + '-' + stats.size + 'kb');
        });
      });
    }
  });

//   file.name.split('.')