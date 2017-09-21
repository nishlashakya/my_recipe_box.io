const initialState = {
	loggedIn: false,
	loginError: '',
	registered: false,
	registeredUsers: []
}

export function userReducer(state=initialState, action) {
	switch (action.type) {

		case 'LOGIN_USER_SUCCESS':
			return {
				...state,
				loggedIn: true,
				loginError: ''
			}

		case 'LOGIN_USER_FAIL':
			return {
				...state,
				loggedIn: false,
				loginError: action.error
			}

		case 'LOGOUT_USER':
			return {
				...state,
				loggedIn: false
			}

		case 'REGISTER_USER':
			state.registeredUsers.push(action.registeredUsers)
			return {
				...state,
				registeredUsers: state.registeredUsers
			}

		default:
			return {...state}
	}
}
