import React, {Component} from 'react';
import PropTypes from 'prop-types';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
}
export class Router extends Component {
  state = {
    route: getCurrentPath()
  }

//Updates the route and handles the call to history.pushState
//See index.js
  handleLinkClick = (route) => {
    this.setState({route});
    history.pushState(null, '', route);

  }

  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  }

  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    }
  }

  componentDidMount() {
    window.onpopstate = () => {
      /// This method gets fired everytime we use the back and forward button in the browser
      this.setState({route: getCurrentPath()})
    }
  }
  render(){
    return <div>{this.props.children}</div>
  }
}
