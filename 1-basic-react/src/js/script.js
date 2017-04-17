import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  //You can use a constructor,
  //but must call super
  constructor() {
    super();
    this.name = 'Samatar';
  }

//this is a class method, and you can invoke them
  getVal(/*val*/) {
    return 'Samatar' /* + val */ ;
    //You can call this.getVal(3) inside the render function
  }

  render() {
    return (
      <h1>It's {this.name}!</h1>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
