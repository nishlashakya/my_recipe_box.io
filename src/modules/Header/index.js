import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.css';

class Header extends Component {

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
						<Link to={'/'} className="navbar-brand">Example</Link>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						{!this.props.loggedInUser ?
							<ul className="nav navbar-nav navbar-right">
								<li><Link to={'/login'}>Login</Link></li>
								<li><Link to={'/register'}>Register</Link></li>
							</ul>
							:
							<ul className="nav navbar-nav navbar-right">
								<li><a>Welcome {this.props.loggedInUser.email}</a></li>
								<li><Link onClick={() => {}}>Logout</Link></li>
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

export default connect(mapStateToProps)(Header)
