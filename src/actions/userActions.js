export function loginUser(data) {
  if (data.username === 'admin' && data.password === 'password') {
    return {
      type: 'LOGIN_USER_SUCCESS',
      user: data
    }
  } else {
    return {
      type: 'LOGIN_USER_FAIL',
      error: 'Invalid username or password'
    }
  }
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER'
  }
}

export function registerUser(data) {
  return {
    type: 'REGISTER_USER',
    registeredUsers: {
      email: data.email,
			phoneNumber: data.phoneNumber,
			username: data.username,
			password: data.password
    }
  }
}
