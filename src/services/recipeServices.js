import axios from 'axios';
import APIConstants from '../constants/APIConstants';

export function addRecipe(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.ADD_RECIPE, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
    })
}

export function editRecipe(data) {
	return new Promise((resolve, reject) => {
		axios.post(APIConstants.EDIT_RECIPE + data)
		.then(res => (resolve(res.data)))
		.catch(err => (reject(err.response.data)));
	})
}
export function deleteRecipe(data) {
	return new Promise((resolve, reject) => {
		axios.delete(APIConstants.DELETE_RECIPE + data)
		.then(res => (resolve(res.data)))
		.catch(err => (reject(err.response.data)));
	})
}

export function viewRecipeDetail(data) {
	return new Promise((resolve, reject) => {
		console.log('url....', APIConstants.VIEW_RECIPE_DETAIL + data);
		// axios.get(APIConstants.VIEW_RECIPE_DETAIL , {
		// 	params: {
		// 		id: data
		// 	}
		// })
		axios.get(APIConstants.VIEW_RECIPE_DETAIL + data)
		.then(res => (resolve(res.data)))
		.catch(err => (reject(err.response.data)));
	})
}
