import { Component } from 'react';

class EventPractice extends Component {

  state = {
    message: ''
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
            (e) => {
              this.setState({
                message: e.target.value
              })
            }
          }
        />
        <button onClick={
          () => {
            alert(this.state.message);
            this.setState({
              message: ''
            });
          }
        }>
          Check and Reset
        </button>
      </div>
    );
  }
}

export default EventPractice;