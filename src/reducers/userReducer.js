import {logoutUser, saveUser, getUser} from '../utils/sessionManager'

const initialState = {
	loggedInUser: getUser(),
	loggedIn: false,
	loginSuccess: false,
	loginError: null,
	registerSuccess: false,
	registerError: null
}

export function userReducer(state=initialState, action) {
	switch (action.type) {

		case 'LOGIN_USER_SUCCESS':
			saveUser(action.res);
			return {
				...state,
				loginSuccess: true,
				loggedInUser: action.res,
				loggedIn: true,
				loginError: null
			}

		case 'LOGIN_USER_FAIL':
			return {
				...state,
				loggedIn: false,
				loginSuccess: false,
				loggedInUser: null,
				loginError: action.error
			}

		case 'LOGOUT_USER':
			logoutUser();
			return {
				...state,
				loggedIn: false
			}

		case 'REGISTER_USER_SUCCESS':
			return {
				...state,
				registerSuccess: true,
				registerError: null
			}

		case 'REGISTER_USER_FAIL':
			return {
				...state,
				registerSuccess: false,
				registerError: action.err
			}

		default:
			return {...state}
	}
}
