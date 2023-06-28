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
import useDadosUsuario from './hooks/useDadosUsuario';
import { useEffect, useState } from 'react';
import { useListTarefas } from './hooks/useListTarefas';

function App() {

  const {setDadosUsuario, dadosUsuario, removeDadosUsuario} = useDadosUsuario();
  const [algumaCoisa, setAlgumaCoisa] = useState(null);
  const {listTarefas, setListTarefas, addTarefa, updateTarefa, removeTarefa, editando, setEditando} = useListTarefas();

  useEffect(() => {

    const verificaToken = async () => {
     
      if (dadosUsuario && dadosUsuario.token) {

        let url_base = "http://localhost:3000";
        let url = `${url_base}/usuarios/login/valid`;

        console.log ("VERIFICANDO TOKEN")

        const res = await fetch(url, 
          {
            method: "POST", 
            body: JSON.stringify({token: dadosUsuario.token}),
            headers: {
              'Content-Type': 'application/json',
            }

          })
        if (res.status == 401) {
          removeDadosUsuario();
        }
      }
    } 
    verificaToken();
    
  }, [dadosUsuario, removeDadosUsuario])


  return (
    <>
      {/* <Contador/> */}
      
        <BrowserRouter>
        <Nav dadosUsuario={dadosUsuario} removeDadosUsuario={removeDadosUsuario}/>
          <Routes>
            <Route index element={<Home 
                  dadosUsuario={dadosUsuario} 
                  listTarefas={listTarefas} 
                  setListTarefas={setListTarefas}
                  addTarefa={addTarefa}
                  updateTarefa={updateTarefa}
                  removeTarefa={removeTarefa}
                  editando={editando}
                  setEditando={setEditando}
                  />} />
            <Route path="pagina_zuera" element={<PaginaZuera />} />
            <Route path="login" element={<Login setDadosUsuario={setDadosUsuario}/>} />
          </Routes>

        </BrowserRouter>


        {/* <Pokedex nome="snorlax"/>
        <Pokedex nome="mewtwo"/>
        <Pokedex nome="pikachu"/>
        <Pokedex nome="charmander" numero="6" /> */}

    </>
  )
}

export default App
