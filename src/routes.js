import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './modules/App';
import Homepage from './modules/Home';
import LoginPage from './modules/Login';
import RegisterPage from './modules/Register';
import AddRecipePage from './modules/Recipe/addRecipe';
import ViewRecipePage from './modules/Recipe/viewRecipe';
import ViewRecipeDetail from './modules/Recipe/viewRecipeDetail';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Homepage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/register" component={RegisterPage} />
		<Route path="/addRecipe" component={AddRecipePage} />
		<Route path="/viewRecipe" component={ViewRecipePage} />
		<Route path="/viewRecipeDetail" component={ViewRecipeDetail} />
	</Route>
)
