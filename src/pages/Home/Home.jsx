import { Header } from "../../components/Header/Header";
import  ListTarefas  from "../../components/ListTarefas/ListTarefas";


export function Home(props) {

    const tarefaSelecionada = null;


    return (
        <>
            <Header 
                dadosUsuario={props.dadosUsuario} 
                addTarefa={props.addTarefa}
                updateTarefa={props.updateTarefa}
                editando={props.editando}
                setEditando={props.setEditando}/>

            <ListTarefas dadosUsuario={props.dadosUsuario}                       
                        listTarefas={props.listTarefas} 
                        setListTarefas={props.setListTarefas}                
                        removeTarefa={props.removeTarefa}
                        updateTarefa={props.updateTarefa}
                        editando={props.editando}
                        setEditando={props.setEditando}
                        />
    
        </>
    )
}