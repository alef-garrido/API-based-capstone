import myRequestGet from './fetchData';

const APIurl = 'https://rickandmortyapi.com/api/character/';
const modalHTML =`
<div id="modal" class="hide">
  <div id="modalMain">
    <button id="closeBtn">x</button>
    <img src="${value.image}" alt="${value.name} thumbnail" class="modalImg">
    <h4>${value.name}</h4>
    <ul class="charSpecs">
      <li>Status: ${value.status}</li>
      <li>Type: ${value.type}</li>
      <li>Gender: ${value.gender}</li>
      <li>Origin: ${value[0].name}</li>
    </ul>
   </div>
 </div>   
`

const renderModal = (id) => {
  myRequestGet.getOne(`${APIurl}${id}`).then((value) => {
    const body = document.getElementsByTagName('body')
    body.insertAdjacentHTML('afterbegin', modalHTML)
  })
} 


const commentEvent = () => {
  const commentsBtns = document.getElementById('list-of-char')
  commentsBtns.addEventListener('click', (e) => {
    if(e.target.classList.contains('elementDisplay')) {
      const id = e.target.parentElement.parentElement.id;
      console.log(id)
      renderModal(id);
    }
  })
}  



export default commentEvent