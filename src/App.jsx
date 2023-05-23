import './App.css'
import { Contador } from './exemplos/Contador'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Nav } from './components/Nav/Nav';
import { Home } from './pages/Home/Home';
import { PaginaZuera } from './pages/PaginaZuera/PaginaZuera';

function App() {
  return (
    <>
      {/* <Contador/> */}
      <BrowserRouter>

        <Nav />

        <Routes>
          <Route index element={<Home />} />
          <Route path="pagina_zuera" element={<PaginaZuera />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
