import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { bindActionCreators } from 'redux';

import {viewRecipeDetail} from '../../actions/recipeActions';

import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';


class ViewRecipePage extends Component {

  constructor(props) {
    super(props);
  }
	handleView = (e) => {
		e.preventDefault();
		this.props.viewRecipeDetail(e.target.dataset.id)
		.then((res) => {
			this.props.router.push('/viewRecipeDetail');
			console.log('Recipe detail View', res);
		})
		.catch((err) => {
			console.log('oops, we got error');
		})

	}

	render() {
		return (
			<div className="App">
        <h2> Recipes </h2>
        <Grid>
          <Row>
            {
              this.props.recipe.map((recipe, i) => {
                return (
                  <Col xs={6} md={4} key={i}>
                    <Thumbnail src={recipe.photo} alt="242x200">
                      <h3>{recipe.title}</h3>
                      <p>{recipe.description}</p>
                      <p>
                        <Button bsStyle="primary" data-id={recipe._id} onClick={this.handleView}>View details</Button>&nbsp;
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
		recipe: store.recipe.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		viewRecipeDetail
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewRecipePage))
