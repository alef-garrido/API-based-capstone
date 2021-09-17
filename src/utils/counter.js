import myRequestGet from './fetchData';

const number0fChars = document.getElementById('number-of-chars');

const itemsCounter = async () => {
  myRequestGet.getAll('https://rickandmortyapi.com/api/character', 'results')
    .then((data) => {
      number0fChars.innerHTML = `${data.length}`;
    });
};

export default itemsCounter;