const fs = require('fs');
const path = require('path');
let listOfFiles = './04-copy-directory/files';
let directory = './04-copy-directory/';
 

getCurrentFilenames();
 
fs.mkdir(path.join(directory, 'files-copy'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });


// const srcPath = path.join(__dirname);
// console.log(srcPath);
function getCurrentFilenames() {
  fs.readdir(listOfFiles, (err, files) => {
    if (err)
      console.log(err);
    else {
    //   console.log('\nCurrent directory filenames:');
      files.forEach(file => {
        // console.log(file);
        let readableStream = fs.createReadStream(__dirname + '/files/' + `${file}`);

        let writeableStream = fs.createWriteStream('./04-copy-directory/files-copy/' + `${file}`);
 
        readableStream.on('data', function(chunk){
          writeableStream.write(chunk);

  
        });
      });
    }
  });
}
