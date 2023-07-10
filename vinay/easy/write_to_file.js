const fs = require('fs');


const filePath = '/Users/vinaykumar.racha/Documents/training/react_training/Js/js_02/easy/some.txt';


const content = 'Hello, World!';


fs.writeFile(filePath, content, 'utf8', function(err) {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }

  console.log('File write operation complete.');
});