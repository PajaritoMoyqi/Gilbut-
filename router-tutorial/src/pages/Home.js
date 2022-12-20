import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Main page</p>
      <ul>
        <li><Link to="/about">About page</Link></li>
        <li><Link to="/profiles/hans">Hans Profile page</Link></li>
        <li><Link to="/profiles/crazyHorse">crazyHorse Profile page</Link></li>
        <li><Link to="/profiles/void">not exists user Profile page</Link></li>
        <li><Link to="/articles">Articles List page</Link></li>
      </ul>
    </div>
  )
}

export default Home;