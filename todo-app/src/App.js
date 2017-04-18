import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: false},
        {id: 2, name: 'Build an Awesome App', isComplete: false},
        {id: 3, name: 'Help Everyone', isComplete: false},
      ],

    };
  }

  checkItem(e){

    if (e.target.checked) {
      this.checked = true;
      e.target.parentElement.classList.add('active');
      return;
    }
    e.target.parentElement.classList.remove('active');
  }
  
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>

        <div className="Todo-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map(todo=>
              <li key={todo.id}>
                <input type="checkbox" onChange={this.checkItem.bind(this)}/>{todo.name}
                </li>)}
            </ul>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
