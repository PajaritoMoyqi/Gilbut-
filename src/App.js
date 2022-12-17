import { Component } from 'react';
import Sample from './Sample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Color Generator</button>
        <Sample color={this.state.color} idNumber={1}>SAMPLE</Sample>
      </div>
    );
  }
}

export default App;