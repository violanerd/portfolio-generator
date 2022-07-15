const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [namer, github] = profileDataArgs;

const generatePage = require('./src/page-template');

fs.writeFile('index.html', generatePage(namer, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! CHeck out index.html to see the output!');
});

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
