const itemsCounter = (data) => {
  const count = data.length;
  const number0fChars = document.getElementById('number-of-chars');
  number0fChars.innerHTML = `${count}`;
  return count;
};

export default itemsCounter;