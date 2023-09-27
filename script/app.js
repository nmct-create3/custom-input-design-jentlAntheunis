const handlePasswordSwitcher = function () {
  //select the password switcher
  const passwordSwitcher = document.querySelector('.js-password-toggle-checkbox');
  //select the password field
  const passwordField = document.querySelector('.js-password-input');
  //listen to clicking the switcher
  passwordSwitcher.addEventListener('click', (e) => {
    //check type of password field
    const fieldType = passwordField.type;
    //if password, make text and vice versa
    if (fieldType == 'password') {
      document.querySelector('.js-password-input').type = 'text';
    } else if (fieldType == 'text') {
      document.querySelector('.js-password-input').type = 'password';
    }
  });
};

const init = function () {
  console.log('Script loaded!');

  // init password switcher
  handlePasswordSwitcher();

  // Other init functions here
};

document.addEventListener('DOMContentLoaded', init);
