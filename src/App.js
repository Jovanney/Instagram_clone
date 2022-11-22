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
                <input type="text" placeholder="Telefone,nome de usuário ou email"/> 
                <input type="password" placeholder="Senha"/>
                <input type="submit" name="acao" value="Entrar"/>
            </form>
        </div>
        <div className='Main_texto'>
          <p><span>OU</span></p>
        </div>
        <div className='Facebook'>
            <a href='#'><img src='https://cdn-icons-png.flaticon.com/512/124/124010.png'></img><span>Iniciar sessão com o Facebook</span></a>
        </div>
        <div className='Main_esqsenha'>
          Esqueceu a senha?
        </div>
      </div>
      <div className='create_acount' >
        <p>Não tem uma conta? <a href='#'>Cadastre-se</a></p>
      </div>
      <div className='get_app'>
        <p>Obtenha o aplicativo.</p>
        <a href='#'><img src='https://static.cdninstagram.com/rsrc.php/v3/y_/r/tUzYKZ-xrQK.png'></img></a>
        <a href='#'><img src='https://static.cdninstagram.com/rsrc.php/v3/yE/r/QQnPXT5YsC4.png'></img></a>
      </div>
      <div className='MobileHide'>
          <div className='container_img'>
              <div className='Imgback'>
                  <img src='https://imageup.me/images/projetoins.jpeg'></img>
              </div>
          </div>
      </div>
      <div className='Imgfront'>
        <img src='https://imageup.me/images/fca67d8c-c14e-4abe-81ef-b65413a52823.png'></img>
      </div>
      </div>
 
  );
}

export default App;
