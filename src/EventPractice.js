import { Component } from 'react';

class EventPractice extends Component {

  state = {
    username: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  handleKeyPress = e => {
    if(e.key === 'Enter'){
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input 
          type="text"
          name="username"
          placeholder="your name"
          value={this.state.username}
          onChange={
            this.handleChange
          }
        />
        <input 
          type="text"
          name="message"
          placeholder="anything you want to write"
          value={this.state.message}
          onChange={
            this.handleChange
          }
          onKeyPress={
            this.handleKeyPress
          }
        />
        <button onClick={
          this.handleClick
        }>
          Check and Reset
        </button>
      </div>
    );
  }
}

export default EventPractice;