import { Link } from 'react-router-dom';


export function Nav(props) {

  const renderAuthenticationButtons = () => {

    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cadastro">Cadastrar-se</Link>
        </li>
      </>
    )
  }


  return (
    <>
      <nav className={"navbar navbar-expand-sm bg-light navbar-light"}>
        <div id="container1" className={"container-fluid"}>
          <Link to="/" className='navbar-brand'>Lista de Tarefas</Link>
        </div>
        <ul className={"navbar-nav me-auto mb-2 mb-rg-0"}>
          {renderAuthenticationButtons()}
        </ul>
      </nav>

    </>
  )
}