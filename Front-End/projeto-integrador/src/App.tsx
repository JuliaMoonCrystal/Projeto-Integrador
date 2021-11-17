import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Sobre from './paginas/sobre/Sobre';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import NavBar from './components/estaticos/navbar/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import Login from './paginas/login/Login';


function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <NavBar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/Login'>
              <Login />
            </Route>

            <Route path='/Home'>
              <Home />
            </Route>

            <Route path='/Sobre'>
              <Sobre />
            </Route>

            <Route path='/Cadastro'>
              <CadastroUsuario />
            </Route>

            <Route path='/tema'>
              <ListaTema />
            </Route>

            <Route path='/posts'>
              <ListaPostagem />
            </Route>

                <Route exact path='/formularioPostagem'>
                  <CadastroPostagem />
                </Route>

            <Route exact path='/formularioPostagem/:id'>
              <CadastroPostagem />
            </Route>

            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>

            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>

            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>

            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>


          </div>
        </Switch>

        <Footer />
      </Router>
    </Provider>
  );
}

              

export default App;
