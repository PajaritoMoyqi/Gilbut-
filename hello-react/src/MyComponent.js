import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  
  static defaultProps = {
    name: 'Lee'
  }

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  }

  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        <div>My new component, Hello { name }</div>
        <div>And my children name is { children }</div>
        <div>My favorite number is { favoriteNumber }</div>
      </div>
    );
  }
};


export default MyComponent;