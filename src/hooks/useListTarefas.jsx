import { useState } from "react";


export function useListTarefas() {

    const [listTarefas, setListTarefas] = useState([])
    const [editando, setEditando] = useState(null)

    function addTarefa(tarefa) {
        setListTarefas([...listTarefas, tarefa])
    }

    function updateTarefa(tarefaAtualizada) {
        setListTarefas(
            listTarefas.map(tarefa =>
                tarefa._id === tarefaAtualizada._id ? tarefaAtualizada : tarefa
            )
          );
    }

    function removeTarefa(tarefaId) {
        setListTarefas(
            listTarefas.filter(tarefa => tarefa._id !== tarefaId)
        )
    }


    return {
        listTarefas,
        setListTarefas,
        addTarefa,
        updateTarefa,
        removeTarefa,
        editando,
        setEditando
    }

}