export function renderPlayer(playerData) {
    const playerEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const imgEl = document.createElement('img');

    playerEl.classList.add('player');



    nameEl.textContent = playerData.name;
    hpEl.id = `player-hp-${playerData.id}`;
    hpEl.textContent = playerData.hp < 0 ? 0 : playerData.hp;

    imgEl.id = `player-img-${playerData.id}`;
    imgEl.textContent = playerData.hp > 0 ? '🐷' : '⚰️';

    if (playerEl.hp < 0) {
        playerEl.classList.add('dead');
    
    }

    playerEl.append(nameEl, imgEl, hpEl);

    return playerEl;
}