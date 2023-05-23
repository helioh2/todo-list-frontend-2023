

export function ListTarefas(props) {
    return (
        <>
            <p>Listagem de tarefas</p>
             {/* <section id="list-tarefas">

                <table class="table table-striped">
                    // <% listaTarefas.forEach((tarefa)=>{ %>
                    <tr class="linha-tarefa">
                        <td class="coluna-texto">
                            <span class="check-<%= tarefa.feito %>">
                                <a href="/check/<%= tarefa._id %>" class="texto-tarefa check-<%= tarefa.feito %>"> <%= tarefa.texto %></a>
                            </span>
                            <span id="criado-em">Criado em <%= tarefa.data.toLocaleDateString('pt-BR') %></span>
                        </td>
                        <td class="coluna-botoes">
                            <a class="btn btn-success" href="/editarTarefaForm?id=<%= tarefa.id %>"><i class="bi bi-pencil-square"></i></a>
                            <a class="btn btn-danger" href="/apagarTarefa?id=<%= tarefa.id %>"><i class="bi bi-trash"></i></a>
                        </td>
                    </tr>
                </table>

            </section>  */}
        </>
    )
}