import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import {loginUser, logoutUser} from '../../actions/userActions';
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap';

class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.loginUser(this.state);
	}

	handleLogout = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	}

	render() {
		return (
			<div className="container">
				{this.props.loggedIn ?

					<div>
						<h1> Welcome to react </h1>
						<button onClick={this.handleLogout}> logout </button>
					</div> :
					<div>
						<h3>Login</h3><br />

						<Form horizontal>
							<FormGroup controlId="formHorizontalUsername">
								<Col componentClass={ControlLabel} sm={2} md={2}>
									Username
								</Col>
								<Col sm={10} md={4}>
									<FormControl name='username' type='text' value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
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
									<Checkbox>Remember me</Checkbox>
								</Col>
							</FormGroup>

							<FormGroup>
								<Col smOffset={2} sm={10}>
									<Button type="submit" onClick={this.handleSubmit.bind(this)}>
										Sign in
									</Button>
								</Col>
							</FormGroup>
						</Form>

					</div>
				}
				{this.props.message && <p> {this.props.message} </p>}
				<p className="well">This is a sample registration page. You can edit <code>src/modules/Login/index.js</code> to edit this page.</p>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		loggedIn: store.user.loggedIn,
		message: store.user.loginError
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		loginUser,
		logoutUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
