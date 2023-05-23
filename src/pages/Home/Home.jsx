import { Header } from "../../components/Header/Header";
import { ListTarefas } from "../../components/ListTarefas/ListTarefas";


export function Home() {

    const usuarioLogado = null;
    const tarefaSelecionada = null;


    return (
        <>
           <Header usuarioLogado={usuarioLogado} tarefaSelecionada={tarefaSelecionada}/>

            <ListTarefas />
    
        </>
    )
}