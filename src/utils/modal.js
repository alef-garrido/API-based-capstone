/* eslint-disable no-use-before-define */
import myRequestGet from './fetchData';

const APIurl = 'https://rickandmortyapi.com/api/character/';

const renderModal = (id) => {
  myRequestGet.getOne(`${APIurl}${id}`).then((value) => {
    document.body.insertAdjacentHTML('afterbegin', `
    <div id="modal">
      <div id="modalMain">
        <button class="closeBtn">x</button>
        <img src="${value.image}" alt="${value.name} thumbnail" class="modalImg">
        <h4>${value.name}</h4>
        <ul class="charSpecs">
          <li>Status: ${value.status}</li>
          <li>Type: ${value.type}</li>
          <li>Gender: ${value.gender}</li>
          <li>Origin: ${value.origin.name}</li>
          <li>Location: ${value.location.name}</li>
        </ul>
        <section>
          <h5>Comments</h5>
          <ul id='myComments' role='list'>
          </ul>
        </section>
        <div id=${value.id}>
          <h5>Post a comment</h5>
          <form id="addComment">
            <input type="text" name="user" placeholder="Your name" required>
            <textarea name="comment" id="commentBody" cols="30" rows="10" placeholder="Do you like it?" required></textarea>
            <input type="submit" value="Send">
            </form>
        </div>
       </div>
     </div>   
    `);
    closeBtn();
    populateComments(`${value.id}`);
    postComment();
  });
};

const closeBtn = () => {
  const btn = document.getElementById('modal');
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('closeBtn')) {
      const modal = document.querySelector('#modal');
      modal.classList.toggle('hide');
    }
  });
};

const populateComments = (id) => {
  myRequestGet.getComments(id).then((value) => {
    console.log(value);
    if (value.length >= 1) {
      value.forEach((element) => {
        const ul = document.querySelector('#myComments');
        const li = document.createElement('li');
        li.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
        ul.appendChild(li);
      });
    } else if (value.error.status >= 400) {
      const ul = document.querySelector('#myComments');
      const li = document.createElement('li');
      li.textContent = 'Be the first one to comment!';
      ul.appendChild(li);
    }
  });
};

const postComment = () => {
  const form = document.getElementById('addComment');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { id } = e.target.parentElement;
    const user = e.target.elements.user.value;
    const body = e.target.elements.comment.value;
    myRequestGet.postComments(id, user, body);
    e.target.elements.user.value = '';
    e.target.elements.comment.value = '';
    updateCommentList(id);
  });
};

const updateCommentList = (id) => {
  document.querySelector('#myComments').innerHTML = '';
  populateComments(id);
};

const commentEvent = () => {
  const commentsBtns = document.getElementById('list-of-char');
  commentsBtns.addEventListener('click', (e) => {
    if (e.target.classList.contains('elementDisplay')) {
      const { id } = e.target.parentElement.parentElement;
      renderModal(id);
    }
  });
};

export default commentEvent;