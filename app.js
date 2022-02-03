// import functions and grab DOM elements
import { renderFighter } from './utils.js';
const defeatedNumEl = document.querySelector('#defeated-number');
const characterHpEl = document.querySelector('#character-hp');
const characterImgEl = document.querySelector('#character-img');
const form = document.querySelector('form');
const fighterListEl = document.querySelector('.fighters');

// let state
let playerHp = 2;
let fighters = [
    { name: ' Snooki', hp: 1 }, 
    { name: 'Thanos', hp: 2 },
];
form.addEventListener('submit', (e) => {
    e.preventDefault();

//user registered name and submitted the info
    const data = new FormData(form);
    const fighterName = data.get('fighter-name');

  // create a new fighter with user info
    const newFighter = {
        name: fighterName,
        hp: Math.ceil(Math.random() * 5),
    };
    //added new object newFighter to the array 0f fighters in state
    fighters.push(newFighter);
    displayFighters();
});
function displayFighters() {
    fighterListEl.textContent = '';

 //loop thru the fighters
    for (let fighter of fighters) {
        const fighterEl = renderFighter(fighter);

        fighterEl.addEventListener('click', () => {
            fighterClickHandler(fighter);
        });
        fighterListEl.append(fighterEl);
    }
}
displayFighters();

// function fighterClickHandler(fighter){
//   console.log('iam click hanlder');
// if (fighterData.p <= 0) return;
// if(Math.random() <1){
//   alert(`you got hit${fighter.name}!`);
//   fighter.hp--;
// }
// });
