import React, { Component } from 'react';
import { withRouter, Link } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';

import { viewCategory, deleteCategory } from '../../actions/categoryActions'

import { Grid, Row, Col, Well, Label, Button, OverlayTrigger, Popover } from 'react-bootstrap';

class ViewCategory extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount = () => {
    this.props.viewCategory();
  }

  handleDelete = (id) => {
    this.props.deleteCategory(id)
    .then(() => {
      toastr.success('Success', 'category deleted');
    })
  }

  handleUpadate = () => {
    this.props.router.push('/');
  }

  render() {
    return (
      <div>
      <Grid>
        <Well>
          <h1> <Label bsStyle="primary">Categories</Label> </h1>
          <Link to={"/category/add/"}>Add Category</Link>

          <ul>
          {
            this.props.categories.map((category, i) => {
              const popoverHoverFocus = (
                <Popover id="popover-trigger-hover-focus" title={category.name}>
                  {category.description}
                </Popover>
              );
              return (
                <li key = {i}>
                  <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popoverHoverFocus}>
                    <Button>{category.name}</Button>
                  </OverlayTrigger>
                  <Button bsStyle="warning" href={"/category/edit/" + category._id}>U</Button>
                  <Button bsStyle="danger" onClick={() => this.handleDelete(category._id)}>D</Button>
                  <br/>
                  <br/>
                </li>
              )
            })
          }
          </ul>

        </Well>
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
    viewCategory,
    deleteCategory
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategory)
