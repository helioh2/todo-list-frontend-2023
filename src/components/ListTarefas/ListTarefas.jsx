import { useCallback, useEffect, useState } from "react"
import './ListTarefas.css'
import { Link } from "../../../node_modules/react-router-dom/dist/index";

export function ListTarefas(props) {

    const [tarefas, setTarefas] = useState({})
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
            console.log(json.reduce((lista, valor) => ({ ...lista, [valor._id]: valor }), {}));  //transforma em um dicionario/objeto suja chave é o id
            setTarefas(json.reduce((lista, valor) => ({ ...lista, [valor._id]: valor }), {}));

        } else {
            // TODO: Fazer tratamento de erros correto
        }
    }, [setTarefas])

    useEffect(() => {
        if (props.dadosUsuario && props.dadosUsuario.usuario) {
            fetchData(props.dadosUsuario.token);
        } else {
            setTarefas({});
        }
    }, [fetchData, props, setTarefas])


    const marcarTarefaComoFeita = async (tarefa) => {

        if (!tarefa.feito) {

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
                tarefa.feito = true;
                setTarefas({ ...tarefas, [tarefa._id]: tarefa });
            }
        }
    }


    return (
        <>
            <section id="list-tarefas">

                <table className="table table-striped">
                    <tbody>
                        {Object.values(tarefas).map(tarefa => {
                            return (
                                <tr key={tarefa._id} className="linha-tarefa">
                                    <td className="coluna-texto">
                                        <span className={`item-tarefa check-${tarefa.feito}`}
                                            onClick={() => marcarTarefaComoFeita(tarefa)}>
                                            {tarefa.texto}
                                        </span>
                                        <span id="criado-em">Criado em {tarefa.data} </span>
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