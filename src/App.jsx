import { useEffect, useState } from 'react'

import './App.css'
import Formulario from './component/Formulario'
import Header from './component/Header'
import ListadoPacientes from './component/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);//CREAMOS UN ARREGLO PARA PASARLE VALORES 
  const [paciente, setPaciente] =useState({})//CREAMOS CONSTANTE DE ESTADO PARA GENERAR LA 
 
  

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id =>{
    const pacienteActualizado = pacientes.filter( paciente => paciente.id !== id )
    setPacientes(pacienteActualizado)
    console.log("ELIMAINAr")
  }

  return (
    <div className="conteiner ml-9 mt-9 ">
        <Header /> 
      <div className="mt-12 md:flex">
        <Formulario 
         pacientes={pacientes}
         setPacientes={setPacientes}
         paciente={paciente}
         setPaciente={setPaciente}
         />

        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />

      </div>     
    </div>
  )
}

export default App
