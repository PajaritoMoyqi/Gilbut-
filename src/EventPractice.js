import { useState } from 'react';

const EventPractice = () => {

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  }

  const handleKeyPress = e => {
    if(e.key === 'Enter'){
      onClick();
    }
  }


  return (
    <div>
      <h1>Event Practice</h1>
      <input 
        type="text"
        name="username"
        placeholder="your name"
        value={username}
        onChange={
          onChangeUsername
        }
      />
      <input 
        type="text"
        name="message"
        placeholder="anything you want to write"
        value={message}
        onChange={
          onChangeMessage
        }
        onKeyPress={
          handleKeyPress
        }
      />
      <button onClick={
        onClick
      }>
        Check and Reset
      </button>
    </div>
  );
}

export default EventPractice;