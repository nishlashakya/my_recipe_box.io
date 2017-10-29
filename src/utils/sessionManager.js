export function saveUser(userData) {
  localStorage.setItem('user', JSON.stringify(userData));
};

export function saveUserToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
}

export function logoutUser() {
  localStorage.clear();
  window.location = '/'
}

export function getUser() {
  if (localStorage.getItem('user') && Object.keys(localStorage.getItem('user')).length) {
    return JSON.parse(localStorage.getItem('user'));
  }
    return null
}

export function getUserToken() {
  if (localStorage.getItem('token')) {
    return JSON.parse(localStorage.getItem('token'));
  }
    return null;
}
