import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';

import { getCategory, editCategory } from '../../actions/categoryActions'

import { Grid, Row, Col, Well, FieldGroup, FormGroup, FormControl, Button, Label } from 'react-bootstrap';

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
  }

  componentDidMount = () => {
    this.props.getCategory(this.props.params.id)
    .then((category) => {
      this.setState({
        id: category._id,
        name: category.name,
        description: category.description
      })
    })
  }

  handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  handleEditCategory = () => {
    this.props.editCategory(this.state)
    .then((res) => {
      this.props.router.push('/category/view');
      toastr.success('Success', 'Category Updated');
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
                <Button onClick={this.handleEditCategory}>
                  Update
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
    category: store.category.category
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    getCategory,
    editCategory
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(EditCategory))
