export const HOST = 'http://localhost:3030';

export const AUTH_ENDPOINTS = {
  register: '/register',
  login: '/login',
  logout: '/logout',
};

export const FORUM_ENDPOINTS = {
  postsCount: '/posts-count',
  searchPosts: '/search',
  categories: '/categories/', //+ category
  post: '/posts/', //+ postId
  postComments: '/post-comments/', //+ postId
  comments: '/comments/', //+ commentId
};

export async function get(url) {
  return request(url, createOptions());
}

export async function post(url, data) {
  return request(url, createOptions('POST', data));
}

export async function put(url, data) {
  return request(url, createOptions('PUT', data));
}

export async function del(url) {
  return request(url, createOptions('DELETE'));
}

async function request(url, options) {
  try {
    const response = await fetch(HOST + url, options);

    if (response.ok === false) {
      const error = await response.json();
      throw error;
    }

    if(response.status === 204) {
      return;
    }
    return response.json();
  } catch (err) {
    throw err;
  }
}

function createOptions(method = 'GET', data) {
  const options = {
    method,
    headers: {},
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  return options;
}
