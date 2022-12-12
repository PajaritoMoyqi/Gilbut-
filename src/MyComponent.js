const MyComponent = (props) => {
  return <div>
    <div>My new component, Hello { props.name }</div>
    <div>And my children name is { props.children }</div>
  </div>
};

MyComponent.defaultProps = {
  name: 'Lee'
}

export default MyComponent;