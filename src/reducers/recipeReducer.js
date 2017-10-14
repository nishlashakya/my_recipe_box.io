const initialState = {
	recipes: []
};

export function recipeReducer(state=initialState, action) {

	switch(action.type) {
		case 'ADD_RECIPE':
			state.recipes.push(action.recipe)
			return {
				...state
			}

		default:
			return {...state};
	}
}