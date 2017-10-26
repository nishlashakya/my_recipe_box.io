const initialState = {
	// recipes: localStorage.getItem('recipe') && Object.keys(localStorage.getItem('recipe')).length ? JSON.parse(localStorage.getItem('recipe')) : null,
	recipes: [],
	detailRecipe: {},
	recipeList: [],
	recipeAddSuccesss: false,
	recipeAddError: null,
	recipeViewSuccesss: false,
	recipeViewError: null,
	recipeViewAllSuccess: false,
	recipeViewAllError: null,
	editRecipe: {},
	recipeEditPageSuccess: false,
	recipeEditPageError: null
};

export function recipeReducer(state=initialState, action) {

	switch(action.type) {
		case 'ADD_RECIPE_SUCCESS':
			return {
				...state,
				recipeAddSuccesss: true,
				recipeAddError: null,
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
				detailRecipe: action.res[0]
			}

		case 'VIEW_ALL_RECIPES_SUCCESS':
			return {
				...state,
				recipeViewAllSuccess: true,
				recipeViewAllError: null,
				recipeList: action.res
			}

		case 'VIEW_ALL_RECIPES_ERROR':
			return {
				...state,
				recipeViewAllSuccess: false,
				recipeViewAllError: null,
			}

		case 'EDIT_RECIPE_PAGE_SUCCESS':
			return {
				...state,
				recipeEditPageSuccess: true,
				recipeEditPageError: null,
				recipeEdit: action.res
			}

		case 'EDIT_RECIPE_PAGE_ERROR':
			return {
				...state,
				recipeEditPageSuccess: false,
				recipeEditPageError: null,
			}


		default:
			return {...state};
	}
}
