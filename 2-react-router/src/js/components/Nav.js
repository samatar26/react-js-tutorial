import React from 'react';
import { Link, IndexLink } from 'react-router';


export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render(){
    const {collapsed} =  this.state;
    const { location } = this.props;
    const archivesClass = location.pathname.match(/^\/archives/) ? 'active' : '';
    const featuredClass = location.pathname === '/' ? 'active' : '';
    const settingsClass = location.pathname.match(/^\/settings/) ? 'active' : '';
    const navClass = collapsed ? 'collapse' : '';


    return (
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div class={'navbar-collapse '+ navClass} id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li className={featuredClass}>
          <IndexLink to="/" >Featured</IndexLink>
        </li>
        <li className={archivesClass}>
          <Link to="archives">Archives</Link>
        </li>
        <li className={settingsClass}>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
}
