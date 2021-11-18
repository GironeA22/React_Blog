import './App.css';
import SideNav from './SideNav';
import CharCards from './Cards';
import { Switch, Route } from 'react-router-dom';
import Content from './Content';
import Blogs from './Blogs';
import Footer from './Footer';
import Admin from './components/admin';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

function App() {
  const [content, setContent] = useState(Content) //set the initial state to the imported data file
  const [show, setShow] = useState(false); //sets show to false, which keeps the Modal from loading
  const handleShow = () => setShow(true); //function to change show to true and load Modal
  return (
    <>
      <div className="App">
        <SideNav />
      </div>
      <Switch>
        <Route exact path='/'>
          <div className="Cards">
            <CharCards />
            <Route path='/TorgueCard'>
              <CharCards content={content[0]} />
            </Route>
            <Route path='/GaigeCard'>
              <CharCards content={content[1]} />
            </Route>
            <Route path='/MozeCard'>
              <CharCards content={content[2]} />
            </Route>
          </div>
        </Route>
        <div className='contentBody'>
          <Route path='/Torgue'>
            <Blogs content={content[0]} />
          </Route>
          <Route path='/Gaige'>
            <Blogs content={content[1]} />
          </Route>
          <Route path='/Moze'>
            <Blogs content={content[2]} />
          </Route>
        </div>
      </Switch>
      <Button variant="secondary" onClick={handleShow}>Admin</Button>
      <Admin content={content} updateContent={setContent} defaultContent={Content} setShow={setShow} show={show} />
      <Footer />
    </>
  );
}

export default App;