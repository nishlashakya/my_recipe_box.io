import { combineReducers } from 'redux';

import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';
import { recipeReducer } from './recipeReducer';

const reducer = combineReducers({
	counter: counterReducer,
	user: userReducer,
	recipe: recipeReducer
})

export default reducer;
