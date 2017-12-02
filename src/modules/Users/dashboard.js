import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row, Tab, Container, Nav, NavItem, Well} from 'react-bootstrap';
import { getUser } from '../../actions/userActions';

import Profile from './Profile';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.params.id)
    .then(res => {
      console.log('.......res...', res);
    })
  }
  render() {
    return(
      <div>
      <Tab.Container id="dashboard-menu" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={2} smOffset={1} >
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="first">
                Dashboard
              </NavItem>
              <NavItem eventKey="second">
                Profile
              </NavItem>
              <NavItem eventKey="third">
                My Recipes
              </NavItem>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
                <Well>
                <h2> {this.props.user.firstName} {this.props.user.lastName} </h2>
                <span>Email: {this.props.user.email}</span>
                </Well>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Well>
                  <Profile
                    user={this.props.user}
                  />
                </Well>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return({
    user: store.user.loggedInUser
  });
}

const mapDispatchToProps = (dispatch) => {
  return(bindActionCreators({
    getUser
  }, dispatch)
);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
