const SERVER_URL = 'http://localhost:3031/';
export default {
    REGISTER  					: SERVER_URL + 'users/register',
    LOGIN     					: SERVER_URL + 'users/login',
		ADD_RECIPE 					: SERVER_URL + 'recipe/add',
		EDIT_RECIPE					: SERVER_URL + 'recipe/edit/',
		DELETE_RECIPE				: SERVER_URL + 'recipe/',
		VIEW_RECIPE_DETAIL	: SERVER_URL + 'recipe/view/',
		VIEW_ALL_RECIPES	  : SERVER_URL + 'recipe/view',

    ADD_CATEGORY        : SERVER_URL + 'category/add'
}
