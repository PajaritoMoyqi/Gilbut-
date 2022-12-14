import { Component } from 'react';

class EventPractice extends Component {

  state = {
    message: ''
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Event Practice</h1>
        <input 
          type="text"
          name="message"
          placeholder="anything you want to write"
          value={this.state.message}
          onChange={
            this.handleChange
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