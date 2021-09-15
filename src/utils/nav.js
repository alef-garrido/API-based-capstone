const pageLogo = require('../assets/PNG/Rick-Logo.png');

const renderLogo = () => {
  const container = document.getElementById('pageLogo');
  const logo = new Image();
  logo.src = pageLogo;
  logo.classList.add('d-inline');

  container.insertAdjacentElement('afterbegin', logo);
};

export default renderLogo;