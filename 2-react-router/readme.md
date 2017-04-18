### React Routers

Routes will allow us to go to diffent pages/different states within our application.
This is the initial setup you need to get your routes up and running:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './pages/Layout';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>

  </Router>,
app);
```

Instead of rendering a layout, we will render our router. Then you can render your different routes and point them to different components.

I appear to be using an older version of both history and react router, but will continue with it. All the anchor links seem to have unique hash queries, which must be how different routes are created.

```js
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
```
You have one main traditional route, e.g. '/' which will contain your IndexRoute which is the page which will show on load, e.g. your home page. On this same route you will have different pages. Here is a way to link to the different pages, instead of using a traditional anchor link:

```js
import React from 'react';
import { Link } from 'react-router';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives">archives</Link>
        <Link to="settings">Settings</Link>
      </div>
    );
  }
}
```

If you were to click on archives for example, It will grab that component and inject the component Archives as a child component to Layout. So what react router does is, it has taken whatever we gave it as children and allows us to inject that as children and spit it out wherever we want to appear it on layout.

You might want to go to a specific article within articles. You can do this by adding a parameter:
```js
<Route path="archives?:article" name="archives" component={Archives}></Route>
```

The location object gives you a lot of useful things, such as query, pathname, etc.
You can then use the information you've received from the queries within the URL, like so:
```js
export default class Archives extends React.Component {
  render(){
    console.log(this.props);
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;
    return (
      <div>
      <h1>Archives ({article})</h1>
      <h4>date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}
```

You can also do stuff optional by wrapping them in parentheses:
```js
<Route path="archives(/:article)" name="archives" component={Archives}></Route>
```

If you want certain things to be active when you're actually on the route, you can simply add an activeclassName like so:

```js
<Link to="archives" activeclassName="test">Archives</Link>
```

Or if you want to do it programmatically:
```js
const { history } = this.props;
history.isActive("archives");
```
This will return a true/false statement whether the route is active.

###Inline styling with React

If you have a little bit of styling to do, e.g. 10 rules, you can do by passing in an object with the relevant styling:
```js
export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: '60px'
    };

    return (
      <div>

        <Nav />

          <div className="container" style={containerStyle}>
            <div class="row">
              <div class="col-lg-12">
                <h1>KillerNews.net</h1>

              {this.props.children}

              </div>
            </div>
        <Footer />
          </div>
        </div>
    );
  }
}
```
