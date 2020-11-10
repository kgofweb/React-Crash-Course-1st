import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
   // Style
   getStyle = () => {
      return {
         textDecoration: this.props.data.completed ? 'line-through' : 'none',
         background: '#F4F4F4F4',
         padding: '10px',
         borderBottom: '1px dotted #ccc'
      }
   }

   render() {
      // Destructuring
      const { id, title } = this.props.data;

      return (
         <div style={this.getStyle()}>
            <p>
               <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
               {' '}
               {title}
               <button onClick={this.props.deleteTodo.bind(this, id)} className="btn">Delete</button>
            </p>
         </div>
      )
   }
}

// PropTypes
TodoItem.propTypes  = {
   data: PropTypes.object.isRequired,
   markComplete: PropTypes.func.isRequired,
   deleteTodo: PropTypes.func.isRequired
}

export default TodoItem;