import { useState } from "react"

import { adicionarTarefa } from "../../store/actions/tarefasActions";
import { connect } from "react-redux";

function FormCriarTarefa({ tarefas, dadosUsuario, adicionarTarefa}) {

    const [dadosForm, setDadosForm] = useState({texto: ""})


    async function criarTarefa(event) {
        event.preventDefault();

        let url_base = "http://localhost:3000";
        let url = `${url_base}/tarefas`
        let method = "POST"

        const res = await fetch(url, 
            {
                method: method,
                body: JSON.stringify(dadosForm),
                headers: {
                    Authorization: 'Bearer ' + dadosUsuario.token,
                    'Content-Type': 'application/json'
                },
            })
        if (res.ok) {
            const tarefa = await res.json()
            adicionarTarefa(tarefa)
            setDadosForm({texto: ""})
        } else {
            //TRATAR ERROS
        }
    }

    function handleChange(event) {
        
        const { value, name } = event.target
        setDadosForm(anterior => ({
            ...anterior, [name]: value
        })
        )
    }

    return (
        <form>
            <div className="mb-3 mt-3">
                <input
                    className="form-control"
                    type="text"
                    name="texto"
                    id="tarefa"
                    placeholder="Insira uma tarefa"
                    value={dadosForm.texto}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary" id="addButton" onClick={criarTarefa}>Criar Tarefa</button>
        </form>
    )
}

  
const mapDispatchToProps = dispatch => ({
    adicionarTarefa: tarefa => dispatch(adicionarTarefa(tarefa))
});

const mapStateToProps = state => ({
    tarefas: state.tarefas,
});
  


export default connect(mapStateToProps, mapDispatchToProps)(FormCriarTarefa);