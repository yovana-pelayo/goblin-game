export function renderFighter(fighterData) {
    const fighterEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const nameEl = document.createElement('p');

    fighterEl.classList.add('fighter');

    nameEl.textContent = fighterData.name;
    hpEl.id = `fighter-hp-${fighterData.id}`;
    hpEl.textContent = fighterData.hp < 0; 

    faceEl.id = `fighter-face-${fighterData.id}`;
    faceEl.textContent = fighterData.hp < 0; 

    if (fighterData.hp < 0) {
        fighterEl.classList.add('dead');
    
    }
    fighterEl.append(nameEl, faceEl, hpEl);
    
    return fighterEl;
}