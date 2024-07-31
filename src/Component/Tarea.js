import React from 'react';
import '../styles/task.css'
import { HiOutlineTrash } from "react-icons/hi";
function Tarea({texto}) {
  return (
    <div className= 'tarea-contenedor' >
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-icono'>
        <HiOutlineTrash />
      </div>
    </div>
  );    
}
export default Tarea;

