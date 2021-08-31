import React from 'react';
import './Contenido.css';

const Label = ( {usuario} ) =>{
    return(
        <div className='label-container'>
            <label 
                name = {usuario.name}
                pass = {usuario.pass}
            />
           
            
        </div>
    )
};

export default Label;