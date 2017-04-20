import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

import {TodoForm, TodoList, Footer} from './components/todo/index';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils.js';

class App extends Component {
  state = {
    todos: [
      {id: 1, name: 'Learn React', isComplete: false},
      {id: 2, name: 'Integrate NodeJs/Hapi with the React App', isComplete: false},
      {id: 3, name: 'Integrate Postgres with my app(s)', isComplete: false},
    ],
    currentTodo: '',

  };

  static contextTypes = {
    route: PropTypes.string
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({
      todos: updatedTodos
    });
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos));
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({todos: updatedTodos});
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: '',
    });

  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please supply a todo name!'
    });
  }


  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    });

  }
//label

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="App">

        <div className="App-header">
          <h2>React Todos</h2>
        </div>

        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}/>
          <TodoList handleToggle={this.handleToggle}
             todos={displayTodos}
             handleRemove={this.handleRemove}/>
           <Footer />
        </div>


      </div>
    );
  }
}

export default App;
