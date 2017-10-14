import * as userServices from '../services/userServices';

export function loginUser(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      userServices.login(data)
      .then(data => {
        dispatch(loginSuccess(data));
        resolve(data);
      })
      .catch(err => {
        dispatch(loginError(err));
        reject(err);
      })
    })
  }
}

function loginSuccess(res) {
  return {
    type: 'LOGIN_USER_SUCCESS',
    res
  }
}

function loginError(err) {
  return {
    type: 'LOGIN_USER_FAIL',
    err
  }
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER'
  }
}

export function registerUser(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      userServices.register(data)
      .then(data => {
        dispatch(registerUserSuccess(data));
        resolve(data);
      })
      .catch(err => {
        dispatch(regigisterUserError(err))
        reject(err);
      });
    });
  }
}

function registerUserSuccess(res) {
  return {
    type: 'REGISTER_USER_SUCCESS',
    res
  }
}

function regigisterUserError(err) {
  return {
    type: 'REGISTER_USER_ERROR',
    err
  }
}
