import { Outlet } from 'react-router-dom';

const Ad = () => {
  return (
    <>
      <nav>
        <a href="www.google.com">google</a>
        <a href="www.youtube.com">youtube</a>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default Ad;