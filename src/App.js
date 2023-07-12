import './App.css';
import logo from './assets/logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Homepage, Sobre, FormContato} from './Routes';

function App() {
  return (
      <BrowserRouter>
        <Link to={"/"} className={"Homelogo"}><img src={logo} alt={"Logo"}/></Link>
        <div className={"Navbar"}>
            <Link to={"/"}><button>Pagina Inicial</button></Link>
            <Link to={"/about-me"}><button>Sobre mim</button></Link>
            <Link to={"/projects"}><button>Projetos</button></Link>
            <Link to={"/contact"}><button>Contato</button></Link>
        </div>
        <Routes>
            <Route path={"/"} element={<Homepage />}/>
            <Route path={"/about-me"} element={<Sobre />}/>
            <Route path={"/contact"} element={<FormContato />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
