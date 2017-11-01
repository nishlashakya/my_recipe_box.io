import * as recipeServices from '../services/recipeServices';
import axios from 'axios';
import APIConstants from '../constants/APIConstants';

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
				reject(err);
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
	return dispatch => {
		return new Promise(function(resolve, reject) {
			axios.delete(APIConstants.DELETE_RECIPE + data)
			.then(res => (resolve(res.data)))
			.catch(err => (reject(err)));
		});
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

function recipeViewSuccess(res) {
	return {
		type: 'VIEW_RECIPE_SUCCESS',
		res
	}
}

function recipeViewError(err) {
	return {
		type: 'VIEW_RECIPE_ERROR',
		err
	}
}


export function editRecipePage(data) {
	return dispatch => {
		return new Promise((resolve, reject) => {
			recipeServices.editRecipePage(data)
			.then(data => {
				dispatch(editRecipePageSuccess(data));
				resolve(data);
			})
			.catch(err => {
				dispatch(editRecipePageError(data));
				reject(err);
			})
		});
	}
}

function editRecipePageSuccess(res) {
	return {
		type: 'EDIT_RECIPE_PAGE_SUCCESS',
		res
	}
}

function editRecipePageError(err) {
	return {
		type: 'EDIT_RECIPE_PAGE_ERROR',
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

export function viewAllRecipes() {
	return dispatch => {
		return new Promise((resolve, reject) => {
			recipeServices.viewAllRecipes()
			.then((data) => {
				dispatch(viewAllRecipesSuccess(data));
				resolve(data);
			})
			.catch((err) => {
				dispatch(viewAllRecipesError());
				reject(err);
			})
		});
	}
}

function viewAllRecipesSuccess(res) {
	return {
		type: 'VIEW_ALL_RECIPES_SUCCESS',
		res
	}
}

function viewAllRecipesError(err) {
	return {
		type: 'VIEW_ALL_RECIPES_ERROR',
		err
	}
}
