const pageLogo = require('../assets/svg/Rick-Logo.png');

const renderLogo = () => {
  const container = document.getElementById('pageLogo');
  const logo = new Image();
  logo.src = pageLogo;

  container.insertAdjacentElement('afterbegin', logo);
};

export default renderLogo;