import Nav from '../components/Nav'
import Body from '../components/Body'
import { Outlet } from 'react-router'

const Layout = () => {

  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default Layout