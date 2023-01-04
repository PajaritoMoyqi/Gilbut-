import { NavLink, Outlet } from 'react-router-dom';

const ArticlesList = () => {
  const activatedStyle = {
    color: 'red'
  }

  return (
    <>
      <Outlet />
      <ul>
        <li><NavLink to="/articles/1" style={({ isActive }) => (isActive ? activatedStyle : undefined)}>article 1</NavLink></li>
        <li><NavLink to="/articles/2" style={({ isActive }) => (isActive ? activatedStyle : undefined)}>article 2</NavLink></li>
        <li><NavLink to="/articles/3" style={({ isActive }) => (isActive ? activatedStyle : undefined)}>article 3</NavLink></li>
      </ul>
    </>
  )
}

export default ArticlesList;