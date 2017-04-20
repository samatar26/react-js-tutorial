import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router} from './components/router';


//We have wrapped the Router component around our App
//We want to use to update its state and call history.pushState when one of the links are clicked.
// The links are nested in the app inside the footer component, so you might think we would pass the router's handling click method down via props.

// There are two problems with this. One, in a complex app, that could potentially mean passing the same item down many levels. This could mean a lot of maintenance if things need to change.
//
// The second problem is that, in this setup, app is being placed inside the router through a call to this.props.children. We can't just add props onto the app component in our render function. The way we're going to handle this is through React's context mechanism.

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
