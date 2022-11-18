import logo from './logo.svg';
import './App.css';
import {db} from './firebase.js';
import {useEffect, useState} from 'react';


function App() {
  const [user, sertUser] = useState(null); //para saber qual tela devemos mostrar ao usuário, se ele está logado ou n 
 
  useEffect(()=>{
    
  },[])
 
  return (
    <div className="App">
      <div className='main'>
        <div className='header_logo' >
            <a href="#"><img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png"/></a>
        </div>
        <div className="header_login_form" >
            <form >
                <input type="text" placeholder="Número de telemóvel, nome de utulizador ou..."/> 
                <input type="password" placeholder="Palavra-passe"/>
                <input type="submit" name="acao" value="Iniciar Sessão"/>
            </form>
        </div>
        <div className='Main_texto'>
          <p><span>OU</span></p>
        </div>
        <div className='Facebook'>
            <a href='#'><img src='https://cdn-icons-png.flaticon.com/512/124/124010.png'></img><span>Iniciar sessão com o Facebook</span></a>
        </div>
        <div className='Main_esqsenha'>
          Esqueceste-te da palavra-passe?
        </div>

      </div>
    </div>
  );
}

export default App;
