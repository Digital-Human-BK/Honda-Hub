const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const USER_REGEX = /^[A-Za-z0-9]+$/;
const PWD_REGEX = /^[A-Za-z0-9]{5,20}$/;

export const validateRegister = (body) => {
  const username = body.username.trim();
  const email = body.email.trim();
  const password = body.password.trim();
  const repass = body.repass.trim();

  const errors = [];

  if (username === '') {
    errors.push({ msg: 'Username is required' });
  }
  if (USER_REGEX.test(username) === false && username !== '') {
    errors.push({ msg: 'Username must be only latin letters and numbers' });
  }
  if (username.length > 0 && username.length < 2) {
    errors.push({ msg: 'Username must be longer than 2 characters' });
  }
  if (username.length > 15) {
    errors.push({ msg: 'Username must be shorter than 15 characters' });
  }
  if (email === '') {
    errors.push({ msg: 'Email is required' });
  }
  if (EMAIL_REGEX.test(email) === false && email !== '') {
    errors.push({ msg: 'Invalid email' });
  }
  if (password === '') {
    errors.push({ msg: 'Password is required' });
  }
  if (PWD_REGEX.test(password) === false && password !== '') {
    errors.push({
      msg: 'Password 5 to 20 characters, latin letters and numbers only',
    });
  }
  if (password !== repass) {
    errors.push({ msg: "Passwords don't match" });
  }

  if (errors.length > 0) {
    throw errors;
  }
};

export const validateLogin = (body) => {
  const email = body.email.trim();
  const password = body.password.trim();

  const errors = [];

  if (email === '') {
    errors.push({ msg: 'Email is required' });
  }
  if (EMAIL_REGEX.test(email) === false && email !== '') {
    errors.push({ msg: 'Invalid email' });
  }
  if (password === '') {
    errors.push({ msg: 'Password is required' });
  }
  if (PWD_REGEX.test(password) === false && password !== '') {
    errors.push({
      msg: 'Invalid password',
    });
  }

  if (errors.length > 0) {
    throw errors;
  }
};
