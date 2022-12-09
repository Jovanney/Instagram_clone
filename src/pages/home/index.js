import './home.css';
import {useEffect, useState} from 'react';
//import firebase from 'firebase';
import { Link } from ' ';
import { auth, storage, db } from '../../firebase';

function Home(props) {
     
/*
    var images = ['https://i.ibb.co/4pFQmtG/01.png', 'https://i.ibb.co/CsKV539/02.png', 'https://i.ibb.co/S5zkxN0/03.png', 'https://i.ibb.co/LzgB7MZ/04.png'];
    
    var index = 0;

    function change() {
      document.getElementById("trocar").src = images[index];
      
      if (index == 3) {
        index = 0;
      } else {
        index++;
      }

      setTimeout(change, 4000);
    }
    */

    const [progress,setProgress] = useState(0);

    const [file, setFile] = useState(null);

    useEffect(()=>{
      
    },[])

    function logar(e){

      e.preventDefault();
      let email = document.getElementById('email-login').value;
      let senha = document.getElementById('senha-login').value;

      auth.signInWithEmailAndPassword(email,senha)
      .then((auth)=>{
        props.setUser(auth.user.displayName);
      }).catch((err)=>{
        alert(err.message);
      })

    };

    function AbrirModalUpload(e){
      e.preventDefault();
      let modal = document.querySelector('.Modalupload');

      modal.style.display = "block";
    };

    function CloseModalPost(){
      let modal = document.querySelector('.Modalupload');

      modal.style.display = "none";
    };

    function Uploadarquivo(e){
      e.preventDefault();

      const uploadTask = storage.ref(`images/${file.name}`).put(file);

      uploadTask.on('state_changed', function(snapshot){
        const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        setProgress(progress);
      }, function(error){
          alert('Falha no upload!');
      }, function(){

        storage.ref("images").child(file.name).getDownloadURL()
        .then(function(url){
            db.collection('posts').add({
              image: url,
              userName: props.user,
              //timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

            setProgress(0);
            setFile(null);

            alert('Upload Realizado com sucesso!');

            document.getElementById('upload').reset();
            CloseModalPost();

        })

    })


  }
    

    return (
      <div className="App">
  
          {
            (props.user)?
            <div className='Logado'>
              
              <div className="sidenav">
                <div className='instagramlogo'><img src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png'></img></div>
                <a href="#"><img src='https://i.ibb.co/ZW3LS49/Image.png'></img><span>Página inicial</span></a> 
                <a href="#"><img src='https://i.ibb.co/nkZk2Tt/image.png'></img><span>Pesquisa</span></a>
                <a href="#"><img src='https://i.ibb.co/vLfmW1k/image.png'></img><span>Explorar</span></a>
                <a href="#"><img src='https://i.ibb.co/k53xFrF/image.png'></img><span>Mensagens</span></a>
                <a href="#"><img src='https://i.ibb.co/hYgPR7H/image.png'></img><span>Notificações</span></a>
                <a onClick={(e)=>AbrirModalUpload(e)} href="#"><img src='https://i.ibb.co/D9WWGsX/image.png'></img><span>Criar</span></a>
                <a href='#'><img src='https://i.ibb.co/wNwZ20G/image.png'></img><span>Perfil</span></a>
                <a href='#' id='maisnav'><img src='https://i.ibb.co/S51QBC2/image.png'></img><span>Mais</span></a>
              </div>
              <div className='bottomnav'>
                <a href="#"><img src='https://i.ibb.co/ZW3LS49/Image.png'></img></a>
                <a href="#"><img src='https://i.ibb.co/vLfmW1k/image.png'></img></a>
                <a href="#"><img src='https://i.ibb.co/D9WWGsX/image.png'></img></a>
                <a href="#"><img src='https://i.ibb.co/k53xFrF/image.png'></img></a>
                <a href='#'><img src='https://i.ibb.co/wNwZ20G/image.png'></img></a>
              </div>
              <div className='topnav'>
                <div className='instagramlogotop'><img src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png'></img></div>
                <input type='text'id='pesquisarbarra'></input>
                <a href="#" id='notificacoes'><img src='https://i.ibb.co/hYgPR7H/image.png'></img></a>
              </div>
  
              <div className='stories'>
                <div className='userstories'>
                  <a href='#'><img src='https://i.ibb.co/wNwZ20G/image.png'></img></a>
                  <a href='#'><img src='https://i.ibb.co/wNwZ20G/image.png'></img></a>
                  <a href='#'><img src='https://i.ibb.co/wNwZ20G/image.png'></img></a>
                  <a href='#'><img src='https://i.ibb.co/wNwZ20G/image.png'></img></a>
                  <a href='#'><img src='https://i.ibb.co/wNwZ20G/image.png'></img></a>
                  <a href='#'><img src='https://i.ibb.co/wNwZ20G/image.png'></img></a>
                </div>
              </div>
              <div className='Main'>  
              </div>
              <div className='rightmenu'>
                <div className='User'>
                  <img src='https://i.ibb.co/SNNcn83/317615104-550307403099615-3072352388974695416-n.jpg'></img>
                  <p>jovanney_silva</p> 
                  <p id='nameperfil'>Jova Silva</p>
                  <a href='#'>Mudar</a>
                </div>
                <div className='sugestoes'>
                    <p>Sugestões para ti</p>
                    <a href='#'>Ver todas</a>
                </div>
                <div className='perfilsugestao'>
                  <img src='https://i.ibb.co/SNNcn83/317615104-550307403099615-3072352388974695416-n.jpg'></img>
                  <p>User</p> 
                  <p id='nomesugestao'>Novo</p>
                  <a href='#'>seguir</a>
                  <img src='https://i.ibb.co/SNNcn83/317615104-550307403099615-3072352388974695416-n.jpg'></img>
                  <p>User</p> 
                  <p id='nomesugestao'>Novo</p>
                  <a href='#'>seguir</a>
                  <img src='https://i.ibb.co/SNNcn83/317615104-550307403099615-3072352388974695416-n.jpg'></img>
                  <p>User</p> 
                  <p id='nomesugestao'>Novo</p>
                  <a href='#'>seguir</a>
                  <img src='https://i.ibb.co/SNNcn83/317615104-550307403099615-3072352388974695416-n.jpg'></img>
                  <p>User</p> 
                  <p id='nomesugestao'>Novo</p>
                  <a href='#'>seguir</a>
                </div>
                <div className='aboutright'>
                    <a href='#'>Sobre</a>
                    <a href='#'>Ajuda</a>
                    <a href='#'>Impresa</a>
                    <a href='#'>API</a>
                    <a href='#'>Empregos</a>
                    <a href='#'>Privacidade</a>
                    <a href='#'>Termos</a>
                    <a href='#'>Localizações</a>
                    <a href='#'>Idioma</a>
                </div>
                <p id='aboutme'>© 2022 INSTAGRAM CLONE FROM JOVA</p>
              </div>

              <div className='Modalupload'>
                    <div className='FormUpload'>
                        <div onClick={()=>CloseModalPost()} className='close-modal-post'>X</div>
                        <h4>Criar publicação nova</h4>
                        <img src='https://i.ibb.co/QPGBLdW/image.png'></img>
                        <p>Arrasta fotos e Vídeos para aqui</p>
                        <form onSubmit={(e)=>Uploadarquivo(e)} id="upload">
                          
                          <label for='selecao-arquivo'>Selecionar no computador</label>
                          <input onChange={(e)=>setFile(e.target.files[0])} id='selecao-arquivo' type='file'></input>
                          <input id='botaopostarfoto' type="submit" value='Seguinte'></input>
                          <progress id="progress-upload" value={progress}></progress>


                        </form>
                    </div>
              </div>
            
            </div>
            
            
            
            :
  

            <div className='deslogado'>
              <div className='main'>
                <div className='header_logo' >
                  <a href="#"><img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-1.png"/></a>
                </div>
                <div className="header_login_form" >
                  <form onSubmit={(e)=>logar(e)}>
                    <input id='email-login' type="text" placeholder="Telefone,nome de usuário ou email"/> 
                    <input id='senha-login' type="password" placeholder="Senha"/>
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
                  <p>Esqueceu a senha?</p>
                </div>
              </div>
            <div className='create_acount' >
              <p>Não tem uma conta?<Link to="Createaccount"> Cadastre-se</Link></p>
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
            <div className='Imgfront' >
              <img id="trocar" ></img>
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
        
          }
      </div>
        
        
    );
    

  }

 

export default Home;