import React from 'react';
<<<<<<< HEAD
import Navbar from './components/estaticos/navbar/NavBar';
import logo from './logo.svg';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div >
     <Navbar />
    </div>
=======
    <Router>
      <Navbar />
        <Switch>
          <div style={{minHeight: '100vh'}}>

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/sobre'>
              <Sobre />
            </Route>
          </div>
        </Switch>
      <Footer />
    </Router>
>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
  );
}

export default App;