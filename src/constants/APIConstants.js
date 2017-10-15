const SERVER_URL = 'http://localhost:3031/';
export default {
    REGISTER  					: SERVER_URL + 'users/register',
    LOGIN     					: SERVER_URL + 'users/login',
		ADD_RECIPE 					: SERVER_URL + 'recipes/addRecipe',
		EDIT_RECIPE					: SERVER_URL + 'recipes/editRecipe/',
		DELETE_RECIPE				: SERVER_URL + 'recipes/',
		VIEW_RECIPE_DETAIL	: SERVER_URL + 'recipes/viewRecipeDetail/'
}
