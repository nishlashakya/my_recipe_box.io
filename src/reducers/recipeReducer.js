const initialState = {
	// recipes: localStorage.getItem('recipe') && Object.keys(localStorage.getItem('recipe')).length ? JSON.parse(localStorage.getItem('recipe')) : null,
	recipes: [],
	detailRecipe: [],
	recipeAddSuccesss: false,
	recipeAddError: null,
	recipeViewSuccesss: false,
	recipeViewError: null,
};

export function recipeReducer(state=initialState, action) {

	switch(action.type) {
		case 'ADD_RECIPE_SUCCESS':
			// state.recipes.push(action.recipe)
			// localStorage.setItem('recipe', JSON.stringify(action.recipe.doc));
			return {
				...state,
				// recipes: action.recipe.doc,
				recipeAddSuccesss: true,
				recipeAddError: null,
				recipes: state.recipes.concat(action.recipe.doc)
			}

		case 'ADD_RECIPE_FAIL':
			return {
				...state,
				recipeAddSuccesss: false,
				recipeAddError: null,
				loginError: action.error
			}

		case 'VIEW_RECIPE_SUCCESS':
			return {
				...state,
				recipeViewSuccess: true,
				recipeViewError: null,
				detailRecipe: action.detailRecipe.recipe

			}


		default:
			return {...state};
	}
}
