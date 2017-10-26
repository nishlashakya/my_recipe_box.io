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

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ViewRecipePage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/register" component={RegisterPage} />
		<Route path="/recipe/add" component={AddRecipePage} />
		<Route path="/recipe/view" component={ViewRecipePage} />
		<Route path="/recipe/view/:id" component={ViewRecipeDetail} />
		<Route path="/recipe/edit/:id" component={EditRecipePage} />
	</Route>
)
