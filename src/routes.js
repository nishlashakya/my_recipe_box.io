import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules/App';
import Homepage from './modules/Home';
import LoginPage from './modules/Login';
import RegisterPage from './modules/Register';
import AddRecipePage from './modules/Recipe/addRecipe';
import ViewRecipePage from './modules/Recipe/viewRecipe';
import ViewRecipeDetail from './modules/Recipe/viewRecipeDetail';
import EditRecipePage from './modules/Recipe/editRecipe';

import AddCategory from './modules/Category/addCategory';
import ViewCategory from './modules/Category/viewCategory';
import EditCategory from './modules/Category/editCategory';

import Dashboard from './modules/Users/dashboard';

function requireAuth(nextState, replace, callback) {
	const login = localStorage.getItem('user');
	if (!login) replace ('/login')
	return callback()
}

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ViewRecipePage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/register" component={RegisterPage} />
		<Route path="/recipe/add" component={AddRecipePage} onEnter={requireAuth}/>
		<Route path="/recipe/view" component={ViewRecipePage} />
		<Route path="/recipe/view/:id" component={ViewRecipeDetail} />
		<Route path="/recipe/edit/:id" component={EditRecipePage} onEnter={requireAuth}/>
		<Route path="/category/add" component={AddCategory} onEnter={requireAuth} />
		<Route path="/category/view" component={ViewCategory} />
		<Route path="/category/edit/:id" component={EditCategory} onEnter={requireAuth} />
		<Route path="/users/dashboard/:id" component={Dashboard} />
	</Route>
)
