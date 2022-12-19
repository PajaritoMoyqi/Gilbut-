import { Component } from 'react';

class LifecycleUpdate extends Component {
  state = {
    number: 0, 
    color: null
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('called: getDerivedStateFromProps');

    if(nextProps.color !== prevState.color){
      return { color: nextProps.color };
    }

    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('called: shouldComponentUpdate');

    return nextState.number % 10 !== 4;
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color
    };

    return (
      <div>
        <p>number: {this.state.number}</p>
        <p style={style} ref={ref => this.myRef=ref}>color: {this.state.color}</p>
        <button onClick={this.handleClick}>
          plus
        </button>
      </div>
    );
  }

  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('called: getSnapshotBeforeUpdate');

    if(prevProps.color !== this.props.color){
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('called: componentDidUpdate');
    if(snapshot){
      console.log('snapshot: ', snapshot);
    }
  }
}

export default LifecycleUpdate;