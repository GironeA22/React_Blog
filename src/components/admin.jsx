import { Form, Modal, Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContent, selectContent } from '../state/contentSlice';

/*
updateContent is now the name of the function that updates content, 
content is still the list plus (eventually) any additions, 
 defaultContent gives us access to the data file in order to reset the site to original conditions.
 setShow(function) and show(boolean) are for the modal.*/

const Admin = ({ defaultContent, setShow, show }) => {
  const dispatch = useDispatch();
  const content = useSelector(selectContent);
  const [response, setResponse] = useState({ name: "" }) //we use this to keep track of the input, see handleSubmit

  //this function takes the form responses and makes them in to a key value pair, then puts it into 'response'
  const updateField = (e) => {
    setResponse({
      ...response,
      [e.target.name]: e.target.value
    })
  }

  const handleClose = () => setShow(false);

  // reset the site to original content   
  const resetSite = () => {
    handleClose();
    localStorage.setItem("storedContent", JSON.stringify(defaultContent));
    window.location.reload(false);
  }

  //send updated library to redux store
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    const updateContentArr = [
      ...content, response];

    if (response.name) {   //this is to fix adding an empty {} to updateArr on submit
      dispatch(addContent(updateContentArr))
      setResponse({})
    }
  }

  return (
    <Container >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark text-white p-3" closeButton>
          <Modal.Title >Update Content</Modal.Title>
        </Modal.Header>
        <Form className="bg-secondary" >
          {/* add lines here to match the keys in your objects within the data file */}
          <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="name" name='name' onChange={updateField} />
          <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="introImg" name='introImg' onChange={updateField} />
          <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="img" name='img' onChange={updateField} />
          <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" as="textarea" placeholder="descriptor" name="descriptor" aria-label="With textarea" onChange={updateField} />
          <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" as="textarea" placeholder="content" name="content" aria-label="With textarea" onChange={updateField} />
          <Form.Control className="bg-light m-1 text-secondary" size="lg" type="text" placeholder="path" name='path' onChange={updateField} />
        </Form>
        <Modal.Footer className="bg-dark">
          <Button size="sm" variant="secondary" onClick={resetSite}>Reset Site</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Admin