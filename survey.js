const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is your favourite hobby? ', (hobby) => {
    rl.question('What do you listen while doing that? ', (listen) => {
      rl.question('What is your favourite meal? ', (meal) => {
        rl.question('What is your favourite sport? ', (sport) => {
          // console.log(`Name: ${name}`);
          // console.log(`Favourite Hobby: ${hobby}`);
          // console.log(`Listens to ${listen} while doing ${hobby}`);
          // console.log(`Favourite Meal: ${meal}`);
          // console.log(`Favourite Sport: ${sport}`);
          console.log(`${name} loves listening to ${listen} while doing ${hobby}. ${name}'s favourite meal is ${meal} and favouriet sport is ${sport}`);
          rl.close();
        });
      });
    });
  });
});