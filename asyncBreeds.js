const fs = require('fs');

const breedDetailsFromFile = (breed, cb) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    //CHANGE: Pass data into callback instead of returning it directly
    if (!error) cb(data);
  });
};

//CHANGE 1: Moved the console.log into a new function
const printOutCatBreed = breed => {
  console.log(`Return Value: ${breed}`);
};

// CHANGE 2: we're now passing two arguments into BreedDetaislfromFile, breed string & callback function)
breedDetailsFromFile('Bombay', printOutCatBreed);
