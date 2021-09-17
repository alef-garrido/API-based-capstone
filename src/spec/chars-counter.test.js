/**
 * @jest-environment jsdom
 */

import itemsCounter from '../utils/counter';

const charsMock = [
  {
    id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', type: '',
  },
  {
    id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human', type: '',
  },
  {
    id: 3, name: 'Summer Smith', status: 'Alive', species: 'Human', type: '',
  },
  {
    id: 4, name: 'Beth Smith', status: 'Alive', species: 'Human', type: '',
  },
  {
    id: 5, name: 'Jerry Smith', status: 'Alive', species: 'Human', type: '',
  },
  {
    id: 6, name: 'Abadango Cluster Princess', status: 'Alive', species: 'Alien', type: '',
  },
  {
    id: 7, name: 'Abradolf Lincler', status: 'unknown', species: 'Human', type: 'Genetic experiment',
  },
];

document.body.insertAdjacentHTML('afterbegin', `
    <span class="bg-dark border-info border-3 py-2 px-2 rounded-end" id="number-of-chars"></span>
`);

describe('Items counter', () => {
  test('return the correc numeber', () => {
    const count = itemsCounter(charsMock);

    expect(count).toBe(7);
  });

  test('DOM display the correct number', () => {
    const span = document.getElementById('number-of-chars');
    expect(span.textContent).toMatch('7');
  });
});