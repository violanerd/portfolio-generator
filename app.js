const profileDataArgs = process.argv.slice(2);
const [namer, github] = profileDataArgs;


const generatePage = (userName, githubName) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${namer}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

console.log(namer, github);
console.log(generatePage(namer, github));

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
