import { useCallback, useEffect, useState } from "react"
import './ListTarefas.css'
import { PencilSquare, Trash } from "react-bootstrap-icons";

function ListTarefas(props) {

    let url_base = "http://localhost:3000";
    let url = `${url_base}/tarefas`;

    const fetchData = useCallback(async (token) => {

        const res = await fetch(url,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        );

        if (res.ok) {
            const json = await res.json();
            // console.log(json.reduce((lista, valor) => ({ ...lista, [valor._id]: valor }), {}));  //transforma em um dicionario/objeto suja chave é o id
            props.setListTarefas(json);

        } else {
            // TODO: Fazer tratamento de erros correto
        }
    }, [props.setListTarefas])

    useEffect(() => {
        if (props.dadosUsuario && props.dadosUsuario.usuario) {
            fetchData(props.dadosUsuario.token);
        } else {
            props.setListTarefas([]);
        }
    }, [fetchData, props.setListTarefas, props.dadosUsuario])


    const marcarTarefaComoFeita = async (tarefa) => {

        if (!tarefa.feito) {
            tarefa.feito = true;

            const res = await fetch(`${url}/${tarefa._id}`,
                {
                    method: "PATCH",
                    body: JSON.stringify(tarefa),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${props.dadosUsuario.token}`
                    }
                }
            )
            if (res.ok) {
                props.updateTarefa(tarefa);
            }
        }
    }


    const deleteTarefa = async (tarefaId) => {
        const res = await fetch(`${url}/${tarefaId}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.dadosUsuario.token}`
                }
            }
        );
        if (res.ok) {
            props.removeTarefa(tarefaId);
        }
    } 


    return (
        <>
            <section id="list-tarefas">

                <table className="table table-striped">
                    <tbody>
                        {props.listTarefas.map(tarefa => {
                            return (
                                <tr key={tarefa._id} className="linha-tarefa">
                                    <td className="coluna-texto">
                                        <span className={`item-tarefa check-${tarefa.feito}`}
                                            onClick={() => marcarTarefaComoFeita(tarefa)}>
                                            {tarefa.texto}
                                        </span>
                                        <span id="criado-em">Criado em {tarefa.data} </span>
                                    </td>

                                    <td className="coluna-botoes">
                                        <span 
                                            className="btn btn-success" 
                                            onClick={() => props.setEditando(tarefa)}>
                                                <PencilSquare/>
                                        </span>
                                        <span 
                                            className="btn btn-danger item-tarefa" 
                                            onClick={() => deleteTarefa(tarefa._id)}>
                                                <Trash/>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>

            </section>
        </>
    )
}



export default ListTarefas;