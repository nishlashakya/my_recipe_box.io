import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import {registerUser} from '../../actions/userActions';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, Alert } from 'react-bootstrap';

class RegisterPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			password: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleRegister = (e) => {
		e.preventDefault();
		this.props.registerUser(this.state)
		.then((data) => {
			this.props.router.push('/login');
			console.log('registered successfully');
		})
		.catch((err) => {
			console.log('error caught', err);
		});
	}

	render() {
		return (
			<div className="container">
				<h3>Register</h3><br />

				<Alert bsStyle="warning">
	    		Fill up the following information
	  		</Alert>

				<Form horizontal>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2} md={2}>
							Email
						</Col>
						<Col sm={10} md={4}>
							<FormControl name='email' type='email' value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPhone">
						<Col componentClass={ControlLabel} sm={2} md={2}>
							Phone number
						</Col>
						<Col sm={10} md={4}>
							<FormControl name='phoneNumber' type='text' value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Phone Number"/>
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={2} md={2}>
							Password
						</Col>
						<Col sm={10} md={4}>
							<FormControl type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit" onClick={this.handleRegister}>
								Register
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
		registered: store.user.registered,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		registerUser,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterPage))
