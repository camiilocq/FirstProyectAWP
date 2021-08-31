import React, { useState } from 'react';
import './Home.css';
import Title from './components/Title/Title';
import Contenido from './components/Contenido/Contenido';


const Home = () =>{

    const [user, setUser ] = useState('');
    const [password, setPassword] = useState('');
    const [hasShow , setShow] = useState(false);

    function handleSubmit(){
        let account = JSON.parse(localStorage.getItem('account'));
        setUser(account.user)
        setPassword(account.password) 
        console.log(user)
        setShow(true);  
        
    }
  
    return(
        <div>
            <Title text='¡Bienvenido al portal de control de notas!'/>
            {hasShow&&
            <Contenido 
            usuario={{
                name: user,
                pass: password
            }}
           
            />}
            <button onClick={handleSubmit} className='submit-button'>
                        show
                    </button>
            
            
        </div>
    )

}

export default Home;
