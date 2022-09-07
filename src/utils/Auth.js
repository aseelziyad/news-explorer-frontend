export const BASE_URL = 'http://localhost:3000';

const getRespose = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const register = (user) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      name: user.name,
    }),
  }).then(getRespose);
};

export const authorize = (user) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  })
    .then(getRespose)
    .then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('name', user.name);
        return res;
      } else {
        return;
      }
    });
};

export const checkToken = (token) => {
  // if (token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(getRespose);
  // }
};
