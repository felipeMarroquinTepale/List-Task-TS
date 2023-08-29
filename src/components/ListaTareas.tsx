import { Tarea } from "./Tarea"

type ListaTareas = {
    listaTareas: string[]
    borrarTarea: (index:number) => void
}

export  const ListaTareas = ({listaTareas, borrarTarea}: ListaTareas) => {

    return(
        <div className="card border-secondary text-center col-sm-5 p-3 mx-auto p-2 t-5 shadow mt-5">
            Lista de tareas...
            {listaTareas.map((tarea,index) => (
                <Tarea key={index} tarea={tarea} borrarTarea={()=> borrarTarea(index)}></Tarea>
            )
            )}

        </div>

    )
}