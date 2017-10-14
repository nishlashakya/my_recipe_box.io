import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';


class ViewRecipePage extends Component {

  constructor(props) {
    super(props);
    console.log(',,,,,,,,,,,,,,,,,', props);
    console.log(',,,,,,,,,,,,,1,,,,', this.props);
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
                        <Button bsStyle="primary">View details</Button>&nbsp;
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
  console.log(',,,,,,,,,,,,,,,,,', store.recipe);
	return {
		recipe: store.recipe.recipes
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipePage)
