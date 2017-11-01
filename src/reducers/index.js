import { combineReducers } from 'redux';

import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';
import { recipeReducer } from './recipeReducer';
import { categoryReducer } from './categoryReducer';

import {reducer as toastrReducer} from 'react-redux-toastr'

const reducer = combineReducers({
	counter: counterReducer,
	user: userReducer,
	recipe: recipeReducer,
	category: categoryReducer,

	toastr: toastrReducer // <- Mounted at toastr.
})

export default reducer;
