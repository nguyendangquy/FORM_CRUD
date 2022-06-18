
import React  from 'react';
import './App.css';
// import Contact from './component/Contact';
import Header from './component/layout/Header';
import About from './component/pages/About';
import Contacts from './component/contacts/Contacts';
import AddContact from './component/contacts/AddContact';
// import AddContact2 from './component/contacts/AddContact2';
import NotFoundPage from'./component/pages/NotFoundPage'
import DetailContact from './component/pages/DetailContact';
import {Provider} from'./context';

//Router
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
        <Provider>
          <Router>
            <Header branding='Contact Manager'/>
            <div className="container">
              {/* <AddContact /> */}
              {/* <AddContact2 /> */}
              {/* <Contacts /> */}
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/addcontact" component={AddContact}/>
                <Route exact path="/detail/:id" component={DetailContact}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
          </Router>
        </Provider>
    </React.Fragment>
  );
}

export default App;
