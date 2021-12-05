import './App.css';
import SideNav from './SideNav';
import CharCards from './Cards';
import { Switch, Route } from 'react-router-dom';
import Content from './Content';
import Blogs from './Blogs';
import Contact from './Contact';
import Authors from './Authors'
import Footer from './Footer';
import Admin from './components/admin';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

function App() {
  //Setting up the Modal
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
              <CharCards content={Content[0]} />
            </Route>
            <Route path='/GaigeCard'>
              <CharCards content={Content[1]} />
            </Route>
            <Route path='/MozeCard'>
              <CharCards content={Content[2]} />
            </Route>
          </div>
        </Route>

        <div className='contentBody'>
          <Route path='/blog/:index'>
            <Blogs />
          </Route>

          <Route path='/Authors'>
            <Authors />
          </Route>
        </div>
      </Switch>
      <Button variant="secondary" onClick={handleShow}>Admin</Button>
      <Admin defaultContent={Content} setShow={setShow} show={show} />
      <Footer />
    </>
  );
}

export default App;