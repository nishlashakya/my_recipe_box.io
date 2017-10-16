import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { bindActionCreators } from 'redux';

import {viewRecipeDetail, viewAllRecipes, editRecipePage} from '../../actions/recipeActions';

import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';


class ViewRecipePage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.viewAllRecipes();
  }
	handleView = (e) => {
		e.preventDefault();
		this.props.viewRecipeDetail(e.target.dataset.id)
		.then((res) => {
			// this.props.router.push('/viewRecipeDetail');
			console.log('Recipe detail View', res);
		})
		.catch((err) => {
			console.log('oops, we got error');
		})

	}
  handleEdit = (e) => {
    e.preventDefault();
    this.props.editRecipePage(e.target.dataset.id);
    console.log('id...........', e.target.dataset.id);
  }

	render() {
		return (
			<div className="App">
        <h2> Recipes </h2>
        <Grid>
          <Row>
            {
              this.props.recipeList.map((recipe, i) => {
                return (
                  <Col xs={6} md={4} key={i}>
                    <Thumbnail src={recipe.photo} alt="242x200">
                      <h3>{recipe.title}</h3>
                      <p>{recipe.description}</p>
                      <p>
                        <Button bsStyle="primary" data-id={recipe._id} onClick={this.handleView}>View details</Button>&nbsp;
                        <Button bsStyle="primary" data-id={recipe._id} onClick={this.handleEdit}>Edit recipe</Button>&nbsp;
                      </p>
                    </Thumbnail>
                  </Col>
                )
              })
            }
          </Row>
        </Grid>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		recipe: store.recipe.recipes,
    recipeList: store.recipe.recipeList
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		viewRecipeDetail,
    viewAllRecipes,
    editRecipePage
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewRecipePage))
