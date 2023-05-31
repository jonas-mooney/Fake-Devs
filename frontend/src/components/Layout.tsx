import Nav from '../components/Nav'
import Body from '../components/Body'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <>
    <Nav />
    <Body>
      <Outlet />
    </Body>
    </>
  )
}

export default Layout