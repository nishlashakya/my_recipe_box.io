const initialState = {
	// recipes: localStorage.getItem('recipe') && Object.keys(localStorage.getItem('recipe')).length ? JSON.parse(localStorage.getItem('recipe')) : null,
	recipes: [],
	recipeAddSuccesss: false,
	recipeAddError: null,
};

export function recipeReducer(state=initialState, action) {

	switch(action.type) {
		case 'ADD_RECIPE_SUCCESS':
			// state.recipes.push(action.recipe)
			// localStorage.setItem('recipe', JSON.stringify(action.recipe));
			return {
				...state,
				// recipes: action.recipe,
				recipeAddSuccesss: true,
				recipeAddError: null,
				recipes: state.recipes.concat(action.recipe.doc)
			}

		default:
			return {...state};
	}
}
