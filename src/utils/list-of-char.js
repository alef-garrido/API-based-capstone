const listOfChar = document.getElementById('list-of-char');

const renderCharacters = async () => {
  fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET',
  }).then((resp) => resp.json())
    .then((json) => json.results)
    .then((result) => {
      result.forEach((element) => {
        const li = document.createElement('li');
        listOfChar.appendChild(li);
        li.id = element.id;
        li.innerHTML = `
        <img src=${element.image} alt="${element.name} image" class="mx-auto px-4 pt-4 pb-2 w-75">
        <p class="text-center mb-3 bold">${element.name}</p>
            <div class="d-flex flex-column align-items-center gap-2">
                <span class="elementDisplay char-btn w-50 px-4 py-2 border text-center bg-dark text-info clickable">Comments</span>
                <span class="char-btn w-50 px-4 py-2 border text-center bg-dark text-info clickable">Reservations</span>
            </div>
            
        `;
      });
    });
};

export default renderCharacters;