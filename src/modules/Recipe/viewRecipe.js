import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router';
import { bindActionCreators } from 'redux';

import { viewAllRecipes } from '../../actions/recipeActions';

import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';


class ViewRecipePage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.viewAllRecipes();
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
                    <Thumbnail src='../../burger.jpg' alt="242x200">
                      <h3>{recipe.title}</h3>
                      <p>{recipe.description}</p>
                      <p>
                        <Link to={"/recipe/view/" + recipe._id}>View details</Link>&nbsp;
                        <Link to={"/recipe/edit/" + recipe._id}>Edit recipe</Link>&nbsp;
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
    recipeList: store.recipe.recipeList
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    viewAllRecipes
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewRecipePage))
