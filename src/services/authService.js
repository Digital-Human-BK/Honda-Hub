import { BASE_URL, AUTH_ENDPOINTS } from '../api/forumApi';

export async function register(data) {
  const response = await fetch(BASE_URL + AUTH_ENDPOINTS.register, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok === false) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}

export async function login(data) {
  const response = await fetch(BASE_URL + AUTH_ENDPOINTS.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok === false) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}

export const logout = async (token) => {
  const res = await fetch(BASE_URL + '/logout', {
    headers: {
      
    },
  });
  console.log(res);
};
