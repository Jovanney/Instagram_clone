import {db} from './firebase.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react';
import Home from './pages/home';
import Create from './pages/createaccount';




function App() {
  const [user, setUser] = useState(null); //para saber qual tela devemos mostrar ao usuário, se ele está logado ou n
  
  useEffect(()=>{
      
  },[])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<Home user={user} setUser={setUser}/>}/>
          <Route path='/Createaccount' element={<Create />}/>
        </Routes>
    </Router>
    </>

 
  );
}

export default App;
