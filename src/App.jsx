import './App.css'
import { Contador } from './exemplos/Contador'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      {/* <Contador/> */}
      <BrowserRouter>

      <Header/>

      </BrowserRouter>
    </>
  )
}

export default App
