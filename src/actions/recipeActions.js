import * as recipeServices from '../services/recipeServices';

export function addRecipe(data) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			recipeServices.addRecipe(data)
			.then(data => {
				dispatch(recipeAddSuccesss(data));
				resolve(data);
			})
			.catch(err => {
				dispatch(recipeAddError(err));
				reject(data);
			})
		})
	}
}

function recipeAddSuccesss(res) {
	return {
		type: 'ADD_RECIPE_SUCCESS',
		recipe: res
	}
}

function recipeAddError(err) {
	return {
		type: 'ADD_RECIPE_FAIL',
		err
	}
}

export function deleteRecipe(data) {
    return {
      type: 'DELETE_RECIPE',
      recipe: data
    }
}

export function updateRecipe(data) {
    return {
      type: 'UPDATE_RECIPE',
      recipe: data
    }
}
