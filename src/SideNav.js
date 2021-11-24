import { Nav } from 'react-bootstrap';

const SideNav = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/" className='link-info'>Home</Nav.Link>
      <Nav.Link href="/Contact-Us" className='link-info'>Contact Us</Nav.Link>
      <Nav.Link href='/Authors' className='link-info'>Authors</Nav.Link>
    </Nav>
  )
}
export default SideNav;