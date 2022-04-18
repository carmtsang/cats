const fs = require('fs');

const breedDetailsFromFile = breed => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    //ISSUE: Returning from *inner* callback function, not breedDeetailsFromFile.
    if (!error) return data;
  });
  //Issue: attempting to return data out here will also not work
  // Currently not returning anythign from ehre, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay');
console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!