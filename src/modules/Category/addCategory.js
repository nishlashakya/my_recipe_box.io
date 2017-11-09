import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { toastr } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { addCategory } from '../../actions/categoryActions'

import { Grid, Row, Col, Well, FieldGroup, FormGroup, ControlLabel, FormControl, Button, Label } from 'react-bootstrap';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  handleAddCategory = (e) => {
    e.preventDefault();
    this.props.addCategory(this.state)
    .then((res) => {
      this.setState({
        name: '',
        description: ''
      })
      this.props.router.push('/category/view');
      toastr.success('Success', 'Category Added');
    })
    .catch((err) => {
      console.log(',,,,,,,,,,,,,,,,,,,,,', err);
    })
  }

  render() {
    return (
      <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <Well>
              <form>
              <FormGroup>
                <Col>
                  <FormControl name='name' type='text'  value={this.state.name} onChange={this.handleChange} placeholder="Category Name"/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalDescription">
                <Col>
                  <FormControl name='description' type='textarea' value={this.state.description} onChange={this.handleChange} placeholder="Description"/>
                </Col>
              </FormGroup>
                <Button type="submit" onClick={this.handleAddCategory}>
                  Add
                </Button>
              </form>
            </Well>
          </Col>
        </Row>
      </Grid>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
	return {
    categories: store.category.categories
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    addCategory
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(AddCategory))
