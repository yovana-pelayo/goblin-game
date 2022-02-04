// import functions and grab DOM elements
import { renderPlayer } from './utils.js';
const defeatedNumEl = document.querySelector('#defeated-number');
const characterHpEl = document.querySelector('#character-hp');
const characterImgEl = document.querySelector('#character-img');
const formP = document.querySelector('#player-form');
const playerListEl = document.querySelector('.players');
// const defeatedPlayer = document.querySelector('defeated-player');

// let state   this is given on out page
let defeatedPlayerCount = 0;
let characterHp = 1;
let players = [
    { id: 1, name: ' Snooki', hp: 2 }, 
    { id: 2, name: 'Thanos', hp: 2 },
];
let currentId = 3;
// //new goblin 
formP.addEventListener('submit', (e) => {
    e.preventDefault();
// // eventListener is saving everything inputted in the forms 


// //user registered name and submitted the info
    const playerData = new FormData(formP);
    const playerName = playerData.get('player-name');

//   // create a new fighter with user info
    const newPlayer = {
        id: currentId++,
        name: playerName,
        hp: Math.ceil(Math.random() * 5),
    };
//     //added new object newPlayer to the array 0f players in state (means it will appear on screen)
    players.push(newPlayer);
    displayPlayers();
});


function displayPlayers() {
    playerListEl.textContent = '';

 //loop thru the players
    for (let player of players) {
        const playerEl = renderPlayer(player);

        playerEl.addEventListener('click', () => {
            playerClickHandler(player);
        
        });
        playerListEl.append(playerEl);
//         //adding event listener b4 we put on page
    }
}
displayPlayers();

function playerClickHandler(playerData){
    // console.log('iam click handler');

    if (playerData.hp <= 0) return;
    if (Math.random() < 0.5){
        alert(`you got hit${playerData.name}!`);
        playerData.hp--;
    } else {
        alert('You Missed!');
    } 

    if (Math.random() < .5) {
        characterHp--;
        alert('You got hit!');

    } else {
        alert(`${playerData.name} missed!`);

    }
    characterHpEl.textContent = characterHp;

    const playerHpEl = document.getElementById(`player-hp-${playerData.id}`);
    playerHpEl.textContent = playerData.hp;

  
    const imgEl = document.getElementById(`player-img-${playerData.id}`);
    imgEl.textContent = playerData.hp > 0 ? '🐷' : '⚰️';

    if (playerData.hp === 0) {
        defeatedPlayerCount++;
        defeatedNumEl.textContent = defeatedPlayerCount;
    }
    if (characterHp === 0) {
        characterImgEl.classList.add('game-over');
        alert('***💀💀💀GAME OVER💀💀💀***'); 
    }
    const allDead = players.every((player) => player.hp === 0);
    if (allDead) alert('💸💸💸YOU ARE THE WINNER!!💸💸💸');
}