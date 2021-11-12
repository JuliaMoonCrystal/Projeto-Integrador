import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/NavBar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import './App.css';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';


function App() {

  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(function(){
    function posicaoScroll(){
        if(window.scrollY > 10){
          setAtivaCor(true);
        } else {
          setAtivaCor(false);
        }
    }

    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <Router>
      {/* acao={ativaCor} */}
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

            <Route path='/cadastrar'>
              <CadastroUsuario />
            </Route>

            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>

            <Route exact path='/formularioPostagem'>
              <CadastroPostagem />
            </Route>

            <Route path='/tema'>
              <ListaTema />
            </Route>

            <Route path='/posts'>
              <ListaPostagem />
            </Route>



          </div>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;