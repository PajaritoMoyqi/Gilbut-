const ListItem = ({ list, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" onClick={() => onToggle(list.id)} checked={list.done} readOnly={true} />
      <span style={{ textDecoration: list.done ? 'line-through' : 'none' }}>{list.desc}</span>
      <button onClick={() => onRemove(list.id)}>DELETE</button>
    </div>
  )
}

const Lists = ({
  text,
  lists,
  onChangeText,
  onCreate,
  onToggle,
  onRemove,
}) => {
  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    onChangeText('');
  };
  const onChange = e => {
    onChangeText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} />
        <button type="submit">SUBMIT</button>
      </form>
      <div>
        {lists.map(list => (
          <ListItem 
            key={list.id}
            list={list} onToggle={onToggle} onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  )
}

export default Lists;
