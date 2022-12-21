import { Navigate, isRouteErrorResponse } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;

  if(!isLoggedIn){
    return (
      <Navigate to="/login" replace={true} />
    )
  }

  return (
    <div>My private page</div>
  )
}

export default MyPage;