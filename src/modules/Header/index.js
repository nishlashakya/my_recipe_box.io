import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {logoutUser} from '../../actions/userActions';


import './style.css';

class Header extends Component {

	handleLogout = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	}

	render() {
		return (
			<nav className="navbar navbar-inverse" id="myNav">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to={'/'} className="navbar-brand">RECIPE BOX</Link>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						{!this.props.loggedInUser ?
							<ul className="nav navbar-nav navbar-right">
								<li><Link to={'/login'}>Login</Link></li>
								<li><Link to={'/register'}>Register</Link></li>
							</ul>
							:
							<ul className="nav navbar-nav navbar-right">
								<li><Link to={"/recipe/add/"}>Add recipe</Link></li>
								<li><a>Welcome {this.props.loggedInUser.firstName}</a></li>
								<li><Link onClick={this.handleLogout}>Logout</Link></li>
							</ul>
						}
					</div>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		loggedInUser: store.user.loggedInUser
	}
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		logoutUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
