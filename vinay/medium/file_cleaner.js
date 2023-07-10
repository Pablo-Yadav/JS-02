const fs = require('fs');

const filePath = '/Users/vinaykumar.racha/Documents/training/react_training/Js/js_02/medium/some.txt';

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Remove extra spaces using regular expression
  const modifiedContent = data.replace(/\s+/g, ' ').trim();

  fs.writeFile(filePath, modifiedContent, 'utf8', function(err) {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }

    console.log('File write operation complete.');
  });
});