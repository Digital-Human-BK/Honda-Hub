const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const USER_REGEX = /^\w+$/;
const PWD_REGEX = /^[A-Za-z0-9]{5,20}$/;
const FILE_EXTENSION_REGEX = /\.(jpg|jpeg|png|gif)$/;
const IMAGE_URL_REGEX = /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/;

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

export const validateUserInfo = (body) => {
  const cars = body.cars.trim();
  const sign = body.sign.trim();
  const about = body.about.trim();

  const errors = [];

  if (cars.length > 60) {
    errors.push({ msg: 'Cars length must be 1 to 60 characters long' });
  }
  if (sign.length > 0 && sign.length < 3) {
    errors.push({ msg: 'Sign length must be 3 to 200 characters long' });
  }
  if (sign.length > 200) {
    errors.push({ msg: 'Sign length must be 3 to 200 characters long' });
  }
  if (about.length > 0 && about.length < 5) {
    errors.push({ msg: 'About length must be 5 to 1000 characters long' });
  }
  if (about.length > 1000) {
    errors.push({ msg: 'About length must be 5 to 1000 characters long' });
  }

  if (errors.length > 0) {
    throw errors;
  }
};

export const validatePost = (data) => {
  const title = data.title.trim();
  const text = data.text.trim();
  const category = data.category;
  const author = data.author;

  const categories = ['general', 'problems', 'events'];
  const errors = [];

  if (title === '') {
    errors.push({ msg: 'Title is required' });
  }
  if (title.length > 0 && title.length < 3) {
    errors.push({ msg: 'Title must be 3 to 80 characters long' });
  }
  if (title.length > 80) {
    errors.push({ msg: 'Title must be 3 to 80 characters long' });
  }
  if (categories.includes(category) === false) {
    errors.push({ msg: 'Invalid category' });
  }
  if (text === '') {
    errors.push({ msg: 'Content required' });
  }
  if (text.length === 1) {
    errors.push({ msg: 'Content must be 2 to 2000 characters long' });
  }
  if (text.length > 2000) {
    errors.push({ msg: 'Content must be 2 to 2000 characters long' });
  }
  if (author === '') {
    errors.push({ msg: 'No user' });
  }

  if (errors.length > 0) {
    throw errors;
  }
};

export const validateComment = (data) => {
  const text = data.text.trim();

  const errors = [];

  if (text === '') {
    errors.push({ msg: 'Content required' });
  }
  if (text.length > 1000) {
    errors.push({ msg: 'Comment must be 1 to 1000 characters long' });
  }

  if (errors.length > 0) {
    throw errors;
  }
};

export const validateImageUpload = (file) => {
  if (!file) {
    throw new Error('Please select image');
  }

  if (!FILE_EXTENSION_REGEX.test(file.name)) {
    throw new Error('Supported file types: .jpg .jpeg .png .gif')
  }
}

export const validateImageUrl = (imageUrl) => {
  if(IMAGE_URL_REGEX.test(imageUrl) === false) {
    throw new Error('Invalid Image URL');
  }
}
