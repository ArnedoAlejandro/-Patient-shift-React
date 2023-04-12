const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, email, alta, sintomas, id} = paciente

    const handleEliminar = ()=>{
        const respuesta = confirm("Desea eliminar el paciente?")
        if(respuesta){
            eliminarPaciente(id)
        }
    }

  return (
    <div>
      <div className="mx-5 my-7  bg-white shadow-md px-2 py-2 rounded-xl ">
            <p className="font-bold m-5 text-gray-700 uppercase">Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold m-5 text-gray-700 uppercase">Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold m-5 text-gray-700 uppercase">Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold m-5 text-gray-700 uppercase">Fecha de Alta: {""}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold m-5 text-gray-700 uppercase">Sintomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex">
                <button type="button"   
                    className="py-2 px-10 bg-blue-600 mr-3 ml-3 hover:bg-blue-500 font-bold uppercase 
                    text-white rounded-lg"
                    onClick={()=>setPaciente(paciente)}
                >Editar</button>
                
                <button type="button"   
                    className="py-2 px-10 bg-red-600 hover:bg-red-500 font-bold uppercase 
                    text-white rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            
            </div>
           
        </div>
    </div>
  )
}

export default Paciente
