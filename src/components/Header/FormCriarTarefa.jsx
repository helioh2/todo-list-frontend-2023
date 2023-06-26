import { useEffect, useState } from "react"


function FormCriarTarefa(props) {

    const [dadosForm, setDadosForm] = useState({texto: ""})


    useEffect(() => {
        if (props.editando) {
            setDadosForm({texto: props.editando.texto})
        }
    }, [props.editando])

    async function criarOuEditarTarefa(event) {
        event.preventDefault();

        let url_base = "http://localhost:3000";
        let url = `${url_base}/tarefas`
        let method = "POST"
        if (props.editando) {
            method = "PATCH"
            url += `/${props.editando._id}`
        }

        const res = await fetch(url, 
            {
                method: method,
                body: JSON.stringify(dadosForm),
                headers: {
                    Authorization: 'Bearer ' + props.dadosUsuario.token,
                    'Content-Type': 'application/json'
                },
            })
        if (res.ok) {
            const tarefa = await res.json()
            if (!props.editando) {
                props.addTarefa(tarefa)
            } else {
                props.updateTarefa(tarefa)
                props.setEditando(null)
            }
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
            <button className="btn btn-primary" id="addButton" onClick={criarOuEditarTarefa}>{props.editando? "Atualizar Tarefa": "Criar Tarefa"}</button>
        </form>
    )
}




export default FormCriarTarefa;