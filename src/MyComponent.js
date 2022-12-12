const MyComponent = (props) => {
  return <div>My new component, Hello { props.name }</div>
};

MyComponent.defaultProps = {
  name: 'Lee'
}

export default MyComponent;