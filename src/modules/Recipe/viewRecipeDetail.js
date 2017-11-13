import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { viewRecipeDetail } from '../../actions/recipeActions';
import { getCategory } from '../../actions/categoryActions';

import { Grid, Row, Col, Button, Label, Well, Image, Panel } from 'react-bootstrap';

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
			// this.setState({
			// 	recipe: recipe[0]
			// });
			this.props.getCategory(recipe[0].categoryId)
			.then((category) => {
				console.log('jjjjjjjjjjjj', category);
				this.setState({
					recipe: recipe[0],
					category: category.name
				})
			})
    })
		.catch((err) => {
			console.log('oops, we got error');
		})
	}
	render() {
		const recipe = this.state.recipe || {};
		const category = this.state.category || '';

		return(
			<div>
				<Grid>
			    <Row className="show-grid">
						<Col xs={6} md={4}>
							<Image width={200} height={200} align="middle" src="../../burger.jpg" circle />
						</Col>
			      <Col xs={12} md={8}>
							<Well>
								<h1> <Label bsStyle="primary">{recipe.title}</Label> </h1>
								<br />
								<h3> Description: </h3>
								<p> {recipe.description} </p>
								<h3> Category: </h3>
								<p> {category} </p>
							</Well>
						</Col>
			    </Row>

					<Row className="show-grid">
						<Col md={6} mdPush={6}>
						<Panel header="Directions:" bsStyle="primary">
							<ul>
							{ recipe.directions && recipe.directions.map((direction) => {
								return (
									<li> {direction.step} </li>
								)}
							)}
							</ul>
				    </Panel>
						</Col>
			      <Col md={6} mdPull={6}>

							<Panel header="Ingredients:" bsStyle="primary">
								<ul>
								{ recipe.ingredients && recipe.ingredients.map((ingredient) => {
									return (
										<li> {ingredient.ingredient} </li>
									)}
								)}
								</ul>
					    </Panel>
						</Col>
			    </Row>

				</Grid>
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
		getCategory
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipeDetail)
