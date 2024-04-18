import { promises as fs } from 'fs';

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
}

const players = ["Joe", "Caroline", "Sabrina"]


for(let i=0; i <players.length ; i++){
    luckyDraw(players[i])
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
}


// altrimenti potevo usare un forEach : 

// players.forEach(player => {
//     luckyDraw(player)
//       .then(result => console.log(result)) // Log the resolved value
//       .catch(error => console.error(error.message)); // Handle any rejections
//   });