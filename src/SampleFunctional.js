import { useState } from 'react';
import PropTypes from 'prop-types';

const SampleFunctional = ({ color, idNumber, children, ungivenProp }) => {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');
  const [names, setNames] = useState({
    names: [
      {id: 1, text: 'Smith'},
      {id: 2, text: 'Kwang'},
      {id: 3, text: 'Leuitong'},
      {id: 4, text: 'Umnuwoa'},
      {id: 5, text: 'Alejandro'}
    ],
    nextId: 6,
    nameInput: ''
  });

  const handleClick = () => {
    setNumber((prevState, props) => {
      return prevState+1;
    });
    setNumber(prevState => prevState+1);
  }
  const handleChange = (e) => {
    if(e.target.name === 'message') setMessage(e.target.value);
    else if(e.target.name === 'nameInput') setNames({...names, nameInput: e.target.value})
  }
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      setMessage('');
    }
  }

  const handleKeyPressMap = (e) => {
    if(e.key === 'Enter'){
      setNames({...names,
        names: [
          ...names.names,
          { id: names.nextId, text: names.nameInput }
        ],
        nextId: names.nextId + 1,
        nameInput: '',
      })
    }
  }
  const handleDoubleClickFilter = (id) => {
    const nextNames = names.names.filter(name => name.names.id !== id);
    setNames({
      ...names,
      names: nextNames
    });
  }

  const name = 'Jinwoo';
  const style = {
    color: color
  };

  const namesList = names.names.map(name => <li key={name.id} onDoubleClick={() => handleDoubleClickFilter(name.id)}>{name.text}</li>)

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
        <p>Changing Number: {number}</p>
        <button
          className="number"
          onClick={handleClick}
        >increase +2</button>
        <input type="text" name="message"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div>
        <h2>map/filter function</h2>
        <ul>
          {namesList}
        </ul>
        <input type="text" name="nameInput"
          value={names.nameInput}
          onChange={handleChange}
          onKeyPress={handleKeyPressMap}
        />
      </div>
    </>
  );
}

SampleFunctional.defaultProps = {
  ungivenProp: 'Default Value'
}
SampleFunctional.propTypes = {
  name: PropTypes.string,
  idNumber: PropTypes.number.isRequired
}

export default SampleFunctional;