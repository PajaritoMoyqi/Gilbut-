import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Main page</p>
      <Link to="/about">About page</Link>
    </div>
  )
}

export default Home;