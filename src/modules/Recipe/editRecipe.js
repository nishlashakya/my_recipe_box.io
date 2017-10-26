import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import {editRecipePage, editRecipe, deleteRecipe} from '../../actions/recipeActions';
import { Form, FormGroup, FormControl, Col, Row, ControlLabel, Button } from 'react-bootstrap';

class EditRecipePage extends Component {

	constructor(props) {
		super(props);

		this.state = {
      title: '',
      description: '',
      photo: '',
      ingredients: [{
				ingredient: '',
				key: Math.random().toString(36).slice(2)
			}],
      directions: [{
				step: '',
				key: Math.random().toString(36).slice(2)
			}],
		}
	}

  componentWillMount() {
    this.props.editRecipePage(this.props.params.id)
    .then((recipe) => {
      this.setState({
				_id: recipe._id,
        title: recipe.title,
        description: recipe.description,
        photo: recipe.photo,
        ingredients: recipe.ingredients,
        directions: recipe.directions,
      })
    })
  }

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleIngredientChange = (idx) => (e) => {
		e.preventDefault();
		let ingredients = this.state.ingredients;
		ingredients[idx][e.target.name] = e.target.value;
		this.setState({
			ingredients
		})
	}

	handleDirectionChange = (idx) => (e) => {
		e.preventDefault();
		let directions = this.state.directions;
		directions[idx][e.target.name] = e.target.value;
		this.setState({
			directions
		})
	}

  handleAddDirection = (e) => {
    this.setState({ directions: this.state.directions.concat([{
			step: '',
			key: Math.random().toString(36).slice(2)
		}]) });
  }

  handleAddIngredient = (e) => {
    this.setState({ ingredients: this.state.ingredients.concat([{
			ingredient: '',
			key: Math.random().toString(36).slice(2)
		}]) });
  }

  handleRemoveIngredient = (idx) => (e) => {
    e.preventDefault();
    this.setState({
      ingredients: this.state.ingredients.filter((i, id) => idx !== id)
    });
  }

  handleRemoveDirection = (idx) => (e) => {
    e.preventDefault();
    this.setState({
      directions: this.state.directions.filter((d, id) => idx !== id)
    });
  }
	handleEdit = (e) => {
		e.preventDefault();
		this.props.editRecipe(this.state)
		.then((res) => {
			console.log('Recipe updated successfully');
			this.props.router.push('/recipe/view/' + res._id);
		})
		.catch((err) => {
			console.log('oops, we got error');
		})
	}

	handleDelete = (e) => {
		e.preventDefault();
		this.props.deleteRecipe(e.target.dataset.id)
		.then((res) => {
			this.props.router.push('/')
			console.log('Recipe deleted');
		})
		.catch((err) => {
			console.log('error!');
		})
	}
	render() {
		return (
			<div className="container">
				<h3>Edit Recipe</h3><br />

				<Form horizontal className="well">
					<FormGroup controlId="formHorizontalTitle">
						<Col componentClass={ControlLabel} sm={2}>
							Title
						</Col>
						<Col sm={10}>
							<FormControl name='title' type='text' value={this.state.title} onChange={this.handleChange} placeholder="Title"/>
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalDescription">
						<Col componentClass={ControlLabel} sm={2}>
							Description
						</Col>
						<Col sm={10}>
							<FormControl name='description' type='textarea' value={this.state.description} onChange={this.handleChange} placeholder="Description"/>
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPhoto">
						<Col componentClass={ControlLabel} sm={2}>
							Photo
						</Col>
						<Col sm={10}>
							<FormControl name='photo' type='file' value={this.state.photo} onChange={this.handleChange}/>
						</Col>
					</FormGroup>

          <Row>
            <Col  componentClass={ControlLabel} sm={2}>
            Ingredients:
            </Col>
          </Row>

          {this.state.ingredients.map((i, idx) => (
            <FormGroup controlId="formHorizontalIngredient" key={i.key}>
              <Col componentClass={ControlLabel} sm={2}>
                {`${idx + 1}`}.
              </Col>
              <Col sm={9}>
                <FormControl name='ingredient' type='text' onChange={this.handleIngredientChange(idx)} value={i.ingredient}/>
              </Col>
              <Col sm={1}>
              <Button onClick={this.handleRemoveIngredient(idx)}> - </Button>
              </Col>
            </FormGroup>
          ))}

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.handleAddIngredient}> Add ingredient </Button>
            </Col>
          </FormGroup>

					<Row>
            <Col  componentClass={ControlLabel} sm={2}>
            Directions:
            </Col>
					</Row>

            {this.state.directions.map((d, idx) => (
              <FormGroup controlId="formHorizontalDirections" key={d.key}>
                <Col componentClass={ControlLabel} sm={2}>
    							Step {`#${idx + 1}`}
    						</Col>
                <Col sm={9}>
                  <FormControl name='step' type='text' onChange={this.handleDirectionChange(idx)} value={d.step} placeholder={`Step #${idx + 1}`}/>
                </Col>
                <Col sm={1}>
                <Button onClick={this.handleRemoveDirection(idx)}> - </Button>
                </Col>
              </FormGroup>
            ))}

					<FormGroup>
						<Col smOffset={2} sm={10}>
              <Button onClick={this.handleAddDirection}> Add Direction </Button>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button className="button--primary" type="submit" onClick={this.handleEdit}>
								Edit Recipe
							</Button>
							<Button bsStyle="danger" data-id={this.state._id} onClick={this.handleDelete}>
								Delete Recipe
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		recipeEdit: store.recipe.recipeEdit,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		editRecipePage,
		editRecipe,
		deleteRecipe
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditRecipePage))
