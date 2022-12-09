import "./Create.css";
import { Link } from 'react-router-dom';
import {auth} from '../../firebase.js';



function Create() {
    
  function Criarconta(e){
    e.preventDefault();

    let email = document.getElementById('email-cadastro').value;
    let username = document.getElementById('username-cadastro').value;
    let senha = document.getElementById('senha-cadastro').value;

    //Criar conta firebase
    auth.createUserWithEmailAndPassword(email, senha)
    .then((authUser)=>{
      authUser.user.updateProfile({
          displayName:username
      })
      alert('Conta Criada!');
    }).catch((error)=>{
      alert(error.message);
    })
    ;

  }

    return (
        <div className='deslogado'>
        <div className='main'>
          <div className='header_logo' >
            <Link to="/"><img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png"/></Link>
          </div>
          <div className="textcenter">
            <p>Cadastre-se para ver fotos e videos dos seus amigos.</p>
          </div>
          <div className='Facebook2'>
            <img src="https://i.pinimg.com/474x/38/9b/14/389b14861f4be0c8d84876b3dda9afc0.jpg"></img>
            <p>Entrar com Facebook</p>
          </div>
          <div className='Main_texto'>
            <p><span><b>OU</b></span></p>
          </div>
          <div className="header_login_form" >
            <form onSubmit={(e)=>Criarconta(e)}>
              <input id='email-cadastro' type="text" placeholder="Número do celular ou email"/> 
              <input type="text" placeholder="Nome completo"/>
              <input id="username-cadastro" type="text" placeholder="Nome de usuário"/>
              <input id="senha-cadastro" type="password" placeholder="Senha"/>
              <div className="textocrirarconta">
                <p>As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Instagram. <a href="#">Saiba mais</a></p>
                <p id="texto2">Ao se cadastrar, você concorda com nossos <b id="pointer">Termos, Política de Privacidade e Política de Cookies.</b></p>
            </div>
              <input type="submit" name="acao" value="Cadastrar-se"/>
            </form>
          </div>

          <div className='espaco'>
          </div>
        </div>

      <div className='create_acount' >
        <p>Tem uma conta?<a href="#"> Conecte-se</a></p>
      </div>
      <div className='get_app'>
        <p>Obtenha o aplicativo.</p>
        <a href='#'><img src='https://static.cdninstagram.com/rsrc.php/v3/y_/r/tUzYKZ-xrQK.png'></img></a>
        <a href='#'><img src='https://static.cdninstagram.com/rsrc.php/v3/yE/r/QQnPXT5YsC4.png'></img></a>
      </div>

      <footer>
        <div className='linkswithline'>
            <a href='#'>Meta</a>
            <a href='#'>Sobre</a>
            <a href='#'>Blog</a>
            <a href='#'>Carreias</a>
            <a href='#'>Ajuda</a>
            <a href='#'>Api</a>
            <a href='#'>Privacidade</a>
            <a href='#'>Termos</a>
            <a href='#'>Principais contas</a>
            <a href='#'>Hashtags</a>
            <a href='#'>Localizações</a>
            <a href='#'>Instagram Lite</a>
            <a href='#'>Carregamento de contatos e não usuários</a>
        </div>
      </footer>
    </div>
    )

};

export default Create;