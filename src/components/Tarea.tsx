type Tarea= {
    tarea: string
    borrarTarea: () => void
}

export const Tarea = ({tarea,borrarTarea}: Tarea) => {
    return (
        <div className="card border-secondary text-center col-sm-5 p-3 mx-auto t-5 shadow mt-2">
            <span>{tarea}</span>

            <button className ="btn btn-danger" onClick={borrarTarea} type="button">Borrar tarea</button>
        </div>
    )
}