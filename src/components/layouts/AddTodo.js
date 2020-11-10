import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './AddTodo.css';

export class AddTodo extends Component {
   state = {
      title: ''
   }

   // onChange
   handleChnage = (e) => {
      this.setState({
         title: e.target.value
      });
   }

   // onSubmit
   handleSubmit = (e) => {
      e.preventDefault();

      this.props.addTodo(this.state.title);
      this.setState({
         title: ''
      });
   }

   render() {
      return (
         <div className="container">
            <form onSubmit={this.handleSubmit} className='form'>
               <input 
               type="text" 
               name='title' 
               placeholder='Add Todo'
               value={this.state.title}
               onChange={this.handleChnage}
               />

               <input 
               type='submit' 
               className='btn' 
               value='Submit'
               />
            </form>
         </div>
      )
   }
}

// PropTypes
AddTodo.propTypes  = {
   addTodo: PropTypes.func.isRequired
}

export default AddTodo