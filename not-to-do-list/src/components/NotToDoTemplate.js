import './NotToDoTemplate.scss';

const NotToDoTemplate = ({ children }) => {
  return (
    <div className="NotToDoTemplate">
      <div className="app-title">Schedule check</div>
      <div className="content">{ children }</div>
    </div>
  )
}

export default NotToDoTemplate;