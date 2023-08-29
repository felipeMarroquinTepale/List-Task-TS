import { useState } from "react"
import { ListaTareas } from "./ListaTareas";



export const ToDoApp = () => {

    const [nuevaTarea,setNuevaTarea] = useState<string>('');
    const [listaTareas,setListaTareas] = useState<string[]>([]);


    const handleAddTask = () => {
        if(nuevaTarea.trim() === '') return
        setListaTareas(tareasAnteriores => [...tareasAnteriores,nuevaTarea] )
        setNuevaTarea('');

    }

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_,i) => i !== index))

    }

    return (
        <div>

            <div className="card border-secondary text-center col-sm-5 p-3 mx-auto p-2 t-5 shadow mt-5">
                <div className="card-header">
                    ----------
                </div>
                <div className="card-body">
                    <h5 className="card-title">Escribe una tarea</h5>

                    <div className="d-grid gap-2 col-6 mx-auto mt-4">

                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            onChange={(e)=> setNuevaTarea(e.target.value)}
                            placeholder="Nueva tarea">
                        </input>

                        <button className ="btn btn-primary mt-1" onClick={handleAddTask} type="button">Agregar una tarea</button>
                    </div>

                </div>
            </div>


            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>

        </div>
    )
}