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

export function viewRecipeDetail(data) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			recipeServices.viewRecipeDetail(data)
			.then(data => {
				dispatch(recipeViewSuccess(data));
				resolve(data);
			})
			.catch(err => {
				dispatch(recipeViewError(err));
				reject(err);
			})
		})
	}
}

function recipeViewSuccess(data) {
	return {
		type: 'VIEW_RECIPE_SUCCESS',
		detailRecipe: data
	}
}

function recipeViewError(err) {
	return {
		type: 'VIEW_RECIPE_ERROR',
		err
	}
}

export function editRecipe(data) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			recipeServices.editRecipe(data)
			.then(data => {
				dispatch(recipeUpdateSuccess(data));
				resolve(data);
			})
			.catch(err => {
				dispatch(recipeUpdateError(err));
				reject(err);
			})
		})
	}
}

function recipeUpdateSuccess(data) {
	return {
		type: 'UPDATE_RECIPE_SUCCESS',
		recipe: data
	}
}

function recipeUpdateError(err) {
	return {
		type: 'UPDATE_RECIPE_ERROR',
		err
	}
}
