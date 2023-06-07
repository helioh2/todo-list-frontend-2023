import './App.css'
import { Contador } from './exemplos/Contador'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Nav } from './components/Nav/Nav';
import { Home } from './pages/Home/Home';
import { PaginaZuera } from './pages/PaginaZuera/PaginaZuera';
import { Pokedex } from './exemplos/Pokedex';
import { Login } from './pages/Login/Login';
import useUserData from './hooks/useUserData';

function App() {

  const {setUserData, userData, removeUserData } = useUserData();

  return (
    <>
      {/* <Contador/> */}
        <BrowserRouter>

          <Nav userData={userData}/>

          <Routes>
            <Route index element={<Home />} />
            <Route path="pagina_zuera" element={<PaginaZuera />} />
            <Route path="login" element={<Login setUserData={setUserData}/>} />
          </Routes>

        </BrowserRouter>

        {/* <Pokedex nome="pikachu"/> */}
    </>
  )
}

export default App
