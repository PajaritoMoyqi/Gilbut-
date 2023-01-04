import { Navigate } from "react-router-dom";

const Mypage = () => {
  const isLoggedIn = false;

  if(!isLoggedIn){
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <h1>Mypage Page</h1>
      <p>Only logged-in user can access this page.</p>
      <p>if not, one should go to login page to validate oneself.</p>
    </>
  )
}

export default Mypage;