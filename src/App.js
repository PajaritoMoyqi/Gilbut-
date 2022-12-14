import { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={ref => this.ScrollBox = ref} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          To Bottommmmmmmm
        </button>
      </div>
    );
  }
}

export default App;