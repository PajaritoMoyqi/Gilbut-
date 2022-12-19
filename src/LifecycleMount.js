import { Component } from 'react';

class LifecycleMount extends Component {
  state = {
    color: null
  }

  constructor(props) {
    super(props);
    console.log('called: constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('called: getDerivedStateFromProps');

    if(nextProps.color !== prevState.color){
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log('called: componentDidMount');
  }

  render() {
    console.log('called: render');

    const style = {
      color: this.props.color
    };

    return (
      <div>
        <p style={style}>color: {this.state.color}</p>
      </div>
    );
  }
}

export default LifecycleMount;