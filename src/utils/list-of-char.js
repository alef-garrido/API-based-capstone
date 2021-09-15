import myRequestGet from './fetchData';

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
                <div>
                  <span>Likes</span>
                  <span id="likes-char-${element.id}">0</span>
                </div>
                <span class="elementDisplay char-btn w-50 px-4 py-2 border text-center bg-dark text-info clickable">Comments</span>
                <span class="char-btn w-50 px-4 py-2 border text-center bg-dark text-info clickable">Reservations</span>
            </div>
        `;
      });

      myRequestGet.getLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KUcXNh15Xp4XOwHZwJel/likes')
        .then((likesArray) => {
          likesArray.forEach((item) => {
            const likesChar = document.getElementById(`likes-char-${item.item_id}`);
            likesChar.innerHTML = `${item.likes}`;
          });
        });
    });
};

export default renderCharacters;
