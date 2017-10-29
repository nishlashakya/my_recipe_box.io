import axios from 'axios';
import APIConstants from '../constants/APIConstants';

import { getUserToken } from '../utils/sessionManager';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': getUserToken()
  }
};

export function addRecipe(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.ADD_RECIPE, data, config)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
    })
}

export function editRecipe(data) {
	return new Promise((resolve, reject) => {
		axios.put(APIConstants.EDIT_RECIPE + data._id, data, config)
		.then(res => (resolve(res.data)))
		.catch(err => (reject(err.response.data)));
	});
}

export function editRecipePage(data) {
  return new Promise((resolve, reject) => {
    axios.get(APIConstants.EDIT_RECIPE + data, config)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err.response.data)));
  });
}

export function viewRecipeDetail(data) {
	return new Promise((resolve, reject) => {
		axios.get(APIConstants.VIEW_RECIPE_DETAIL + data)
		.then(res => (resolve(res.data)))
		.catch(err => (reject(err.response.data)));
	})
}

export function viewAllRecipes() {
  return new Promise(function(resolve, reject) {
    axios.get(APIConstants.VIEW_ALL_RECIPES)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });

}
