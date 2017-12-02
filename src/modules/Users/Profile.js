import React, { Component } from 'react';
import {Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
export default class Profile extends Component {

	render() {
		return (
      <div>
        <h3> Edit Profile </h3>
        <Form horizontal>
          <FormGroup controlId="formHorizontalTitle">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={10}>
              <FormControl name='firstName' type='text' value={this.props.user.firstName}  placeholder="firstName"/>
            </Col>
          </FormGroup>
        </Form>
        <span>{this.props.user.firstName}</span>
      </div>
		)
	}
}
