export function saveUser(userData) {
  localStorage.setItem('user', JSON.stringify(userData));
};

export function logoutUser() {
  localStorage.clear();
  window.location = '/'
}

export function getUser() {
  if (localStorage.getItem('user') && Object.keys(localStorage.getItem('user')).length) {
    return JSON.parse(localStorage.getItem('user'));
  } else {
    return null
  }
}
