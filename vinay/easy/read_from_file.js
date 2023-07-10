const fs = require('fs');


const filePath = '/Users/vinaykumar.racha/Documents/training/react_training/Js/js_02/easy/some.txt';

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }


  console.log('File Contents:', data);
});