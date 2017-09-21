import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';


class ViewRecipePage extends Component {

  constructor(props) {
    super(props);
    console.log('props//////////////////', props);
  }

	render() {
		return (
			<div className="App">
        <h2> Recipes </h2>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <h3>Recipe Name</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">View details</Button>&nbsp;
                </p>
              </Thumbnail>
            </Col>
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
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipePage)
