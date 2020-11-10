import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {
   render() {
      return this.props.todos.map((data) => (
         // <h3> {data.name} </h3>
         <TodoItem key={data.id} data={data} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
      ));
   }
}

// PropTypes
Todo.propTypes  = {
   todos: PropTypes.array.isRequired,
   markComplete: PropTypes.func.isRequired,
   deleteTodo: PropTypes.func.isRequired
}

export default Todo;