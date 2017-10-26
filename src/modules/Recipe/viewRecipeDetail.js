import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {viewRecipeDetail} from '../../actions/recipeActions';

class ViewRecipeDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			recipe: {}
		}
	}

	componentDidMount() {
		this.props.viewRecipeDetail(this.props.params.id)
		.then((recipe) => {
			this.setState({
				recipe: recipe[0]
			});
    })
		.catch((err) => {
			console.log('oops, we got error');
		})
	}
	render() {
		const recipe = this.state.recipe || {};
		return(
			<div>
			<p><span>RECIPE NAME:</span>{recipe.title}</p>
			<p><span>DESCRIPTION:</span>{recipe.description}</p>
			<p><span>INGREDIENTS:</span></p>
				<ul>
					{ recipe.ingredients && recipe.ingredients.map((ingredient) => {
						return (
							<li> {ingredient.ingredient} </li>
						)}
					)}
				</ul>
			<p><span>DIRECTIONS:</span></p>
				<ul>
					{ recipe.directions && recipe.directions.map((direction) => {
						return (
							<li> {direction.step} </li>
						)}
					)}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		viewRecipeDetail,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipeDetail)
