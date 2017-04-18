import React from 'react';

import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';


export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: '60px'
    };

    return (
      <div>

        <Nav location={this.props.location}/>

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
