/**
 * @jest-environment jsdom
 */

import { commentCounter } from '../utils/modal'


const commentsMockup = [  
  {creation_date: "2021-09-16", comment: "So funny!", username: "Nora"},
  {username: "Russo", creation_date: "2021-09-16", comment: "I like evil morty the most"},
  {username: "Nora", comment: "Like!", creation_date: "2021-09-16"},
  {username: "Russo", comment: "Hey", creation_date: "2021-09-16"},
  {username: "David", comment: "test 2", creation_date: "2021-09-16"},
  {username: "Nora", comment: "Finally!", creation_date: "2021-09-16"},
  {comment: "Finally!", creation_date: "2021-09-16", username: "Nora"}
]

document.body.insertAdjacentHTML('afterbegin', `
  <ul id='myComments' role='list'>
  </ul>
`) 
describe('Testing comments counter function', () => {
  test("should return the count of array's elements (7)", () => {
    const count = commentCounter(commentsMockup)

    expect(count).toBe(7);
  });
});