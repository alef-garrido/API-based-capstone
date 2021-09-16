// eslint-disable-next-line no-console
import './style.css';
import renderLogo from './utils/nav';
import renderCharacters from './utils/list-of-char';
import commentEvent from './utils/modal';
import itemsCounter from './utils/counter';

renderCharacters();
renderLogo();
itemsCounter();
commentEvent();
