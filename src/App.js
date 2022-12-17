import { Component } from 'react';
import SampleFunctional from './SampleFunctional';

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
        <SampleFunctional color={this.state.color} idNumber={1}>SampleFunctional</SampleFunctional>
      </div>
    );
  }
}

export default App;