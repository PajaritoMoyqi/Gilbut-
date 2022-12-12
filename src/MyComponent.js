import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {

  return <div>
    <div>My new component, Hello { name }</div>
    <div>And my children name is { children }</div>
    <div>My favorite number is { favoriteNumber }</div>
  </div>
};

MyComponent.defaultProps = {
  name: 'Lee'
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;