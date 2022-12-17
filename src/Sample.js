import { Component } from 'react';
import PropTypes from 'prop-types';

class Sample extends Component {
  static defaultProps = {
    ungivenProp: 'Default Value'
  }
  static propTypes = {
    name: PropTypes.string,
    idNumber: PropTypes.number.isRequired
  }

  state = {
    number: 0,
    message: '',
    names: [
      {id: 1, text: 'Smith'},
      {id: 2, text: 'Kwang'},
      {id: 3, text: 'Leuitong'},
      {id: 4, text: 'Umnuwoa'},
      {id: 5, text: 'Alejandro'},
    ],
    nextId: 6,
    nameInput: ''
  }

  handleClick = () => { // to avoid to use constructor initialization
    this.setState((prevState, props) => {
      return {number: prevState.number+1}
    }, () => console.log('first'));
    this.setState(prevState => ({
      number: prevState.number+1
    }), () => console.log('second'));
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.setState({
        [e.target.name]: ''
      })
    }
  }

  handleClickRef = () => {
    this.input.focus();
  }
  handleKeyPressMap = (e) => {
    if(e.key === 'Enter'){
      this.setState({
        names: [
          ...this.state.names,
          { id: this.state.nextId, text: this.state.nameInput }
        ],
        nextId: this.state.nextId + 1,
        [e.target.name]: '',
      })
    }
  }
  handleDoubleClickFilter = (id) => {
    const nextNames = this.state.names.filter(name => name.id !== id);
    this.setState({
      names: nextNames
    });
  }


  render() {
    const name = 'Jinwoo';
    const { color, idNumber, children, ungivenProp } = this.props;
    const style = {
      color: color
    };

    const namesList = this.state.names.map(name => <li key={name.id} onDoubleClick={() => this.handleDoubleClickFilter(name.id)}>{name.text}</li>)

    return (
      <>
        <h1>Hello, it's React.js example</h1>
        <div>
          <h2>Props part</h2>
          <p>You are {name}, right?</p>
          <p style={style}>And our parent gives us {color} props that defines text color of this sentence.</p>
          <p>Also children value: {children}</p>
          <p>If some prop is required, and when it's not given, there will be error in console. : {idNumber}</p>
          <p>If there is un given prop, you can give default value({ungivenProp}) to that prop.</p>
        </div>
        <div>
          <h2>State and Event part</h2>
          <p>Changing Number: {this.state.number}</p>
          <button
            className="number"
            onClick={this.handleClick}
          >increase +2</button>
          <input type="text" name="message"
            value={this.state.message}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div>
          <h2>Ref part</h2>
          <input type="text"
            ref={ref => this.input=ref}
          />
          <button
            onClick={this.handleClickRef}
          >
            Focus to Input
          </button>
        </div>
        <div>
          <h2>map/filter function</h2>
          <ul>
            {namesList}
          </ul>
          <input type="text" name="nameInput"
            value={this.state.nameInput}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPressMap}
          />
        </div>
      </>
    );
  }
}

export default Sample;