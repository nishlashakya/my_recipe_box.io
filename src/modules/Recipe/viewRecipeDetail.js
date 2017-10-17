import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ViewRecipeDetail extends Component {
	constructor(props) {
		super(props);
		console.log('props...............', this.props);
	}
	render() {
		return(
			<div>
				<p><span>RECIPE NAME:</span>{this.props.recipe.title}</p>
				<p><span>DESCRIPTION:</span>{this.props.recipe.description}</p>
				<p><span>INGREDIENTS:</span></p>
					<ul>
						{ this.props.recipe.ingredients.map((ingredient) => {
							return (
								<li> {ingredient.ingredient} </li>
							)}
						)}
					</ul>
				<p><span>DIRECTIONS:</span></p>
					<ul>
						{ this.props.recipe.directions.map((direction) => {
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
		recipe: store.recipe.detailRecipe
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({

	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipeDetail)
