import { characterData } from './data';
import Character from './Character';

const wizard = new Character(characterData.hero);

const orc = new Character(characterData.monster);

const render = () => {
  document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
  document.getElementById(wizard.elementId).innerHTML =
    wizard.getCharacterHtml();
};
render();
