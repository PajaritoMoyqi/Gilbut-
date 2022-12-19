import { Component } from 'react';

class LifeCycleError extends Component {
  render() {
    console.log('called: LifeCycleError render');

    return (
      <div>
        {this.props.missing.value}
      </div>
    );
  }
}

export default LifeCycleError;