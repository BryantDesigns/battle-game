const hero = {
  elementId: 'hero',
  name: 'Wizard',
  avatar: 'images/wizard.png',
  health: 60,
  diceCount: 3,
};

const monster = {
  elementId: 'monster',
  name: 'Orc',
  avatar: 'images/orc.png',
  health: 10,
  diceCount: 1,
};

function Character(data) {
  Object.assign(this, data)
  this.getCharacterHtml = () => {
    const { elementId, name, avatar, health, diceCount } = this;
    const diceHtml = getDiceHtml(diceCount);

    document.getElementById(elementId).innerHTML = `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src='${avatar}'/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
                ${diceHtml}
            </div>
    </div>`;
  };
}

const getDiceRollArray = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map((die) => Math.ceil(Math.random() * 6));
};

const getDiceHtml = (diceCount) => {
  return getDiceRollArray(diceCount)
    .map((die) => {
      return `<div class="dice">${die}</div>`;
    })
    .join('');
};

const wizard = new Character(hero);
const orc = new Character(monster);
wizard.getCharacterHtml();
orc.getCharacterHtml();

