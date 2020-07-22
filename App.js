import React from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import './App.css';

{/* class based component */}
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      greetingStart: "Hello, ",
      showForm: true
    }

    // bind to the component, look up .bind() in js docs
    // alternative is to use arrow function which do not have their own 'this' context so it falls
    // back to the component
    //this.handleToggleButton = this.handleToggleButton.bind(this);
  }
 
  handleToggleButton = () => {
    {/* Event handler, handler the toggle button click event */ }
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
    return (
      <div className="App">
        {/* conditionally render the form based on showForm value */}
        {/* <Form /> is a functional component imported from /components/Form.js */}
        {/* greetingStart and saluation are props being set on the Form component */}
        {this.state.showForm ?

          <Form
            greetingStart={this.state.greetingStart}
            salutation={'Mr.'}
          />
          :
          <h4>No Form shown</h4>
        }
        <br></br>
        <button onClick={this.handleToggleButton}>Toggle Form</button>
      </div>
    );
  }
}

export default App;


// Ternary opertor   conditon ? result1 : result2;

// props, are like function arguments. 
// props.greeting,  props.salutation

// props = {}
// props = { greeting: greet }

// Hello, Tyler

