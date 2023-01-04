import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goBackTwice = () => {
    navigate(-2);
  }
  const goArticlesList = () => {
    navigate('/articles')
  }

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={goBackTwice}>go back twice</button>
      <button onClick={goArticlesList}>go List</button>
    </>
  )
}

export default Login;