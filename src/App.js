import React, { Component } from 'react';
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Todo from './components/Todo';
import AddTodo from './components/layouts/AddTodo';
// Pages
import About from './components/routers/About';
import Docs from './components/routers/Docs';
import axios from 'axios';
// CSS
import './App.css';

class App extends Component {
  state = {
    todo: []
  }

  // 
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({
        todo: res.data
      }));
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todo: this.state.todo.map(todos => {
        if(todos.id === id) {
          todos.completed = !todos.completed;
        }
        return todos;
      })
    });
  }

  // Delete Todo items
  deleteTodo = (id) => {
    // Delete tod via API
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todo: [...this.state.todo.filter(todos => todos.id !== id)]
      }));
  }

  // Add Todo
  addTodo = (title) => {
    // const newTodo = { id: 4, title, completed: false }

    // Add todo via API
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todo: [...this.state.todo, res.data] }));
  }

  render() {
    return(
      <Router>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todo todos={this.state.todo} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            <Route path="/docs" component={Docs} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;