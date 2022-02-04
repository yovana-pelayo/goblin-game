export function renderPlayer(playerData) {
    const playerEl = document.createElement('div');
    const nameEl = document.createElement('div');
    const hpEl = document.createElement('p');
    const imgEl = document.createElement('p');

    playerEl.classList.add('players');



    nameEl.textContent = playerData.name;
    hpEl.id = `player-hp-${playerData.id}`;
    hpEl.textContent = playerData.hp < 0 ? 0 : playerData.hp;

    imgEl.id = `player-img-${playerData.id}`;
    imgEl.textContent = playerData.hp > 0 ? '🐷' : '⚰️';
// if player dies then coffin emoji pops up. piggy while still playing/has hp

    if (playerEl.hp < 0) {
        playerEl.classList.add('death');
    
    }

    playerEl.append(nameEl, imgEl, hpEl);

    return playerEl;
}