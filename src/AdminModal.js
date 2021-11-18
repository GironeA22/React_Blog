import data from './components/data'
import { useState } from 'react'
import Admin from './components/admin'
import Button from './react-bootstrap/Button'

function App() {

  //for the modal
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  //blogData starts out with the info from the jsx file we imported

  const [blogData, setBlogData] = useState(data)

  const BlogContent = () => {
    //console.log(blogData)
    return (
      <>
        <h1>Blog</h1>
        {blogData.map((info, i) => (
          <div key={i}>
            {info.title}
          </div>
        ))}
      </>
    )
  }
  return (
    <>
      <Button onClick={handleShow}>Admin</Button>
      {/* sending a ton of stuff, simplify? */}
      <Admin updateBlog={setBlogData} blogData={blogData} setShow={setShow} show={show} />
      <BlogContent />


    </>
  )
}

export default App;
