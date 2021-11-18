import { Nav } from 'react-bootstrap';

const SideNav = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/" className='bg-link link-dark'>Home</Nav.Link>
      <Nav.Link href="/Torgue" className='link-success'>Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav>
  )
}
export default SideNav;