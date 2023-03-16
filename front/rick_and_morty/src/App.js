import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
//import Error from "./components/Error/Error.module.css";
import Form from "./components/Form/Form.jsx";
import { useEffect } from 'react';
import { useState } from 'react';
import Favorites from './components/Favorites/Favorites';

function App() {
   const location = useLocation();
   
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const username = 'ejemplo@gmail.com';
   const password = '1password';

   function login(userData) {
      if (userData.username === username && userData.password === password)
         setAccess(true);
         navigate('/home'); 
   }

 useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function onClose(id) {
      setCharacters(characters.filter(element => element.id !== id))
   }
   
   function random() {
      let randomId = Math.floor(Math.random() * 826);
      onSearch(randomId);
   }
   function onSearch(id) {
      fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.id) {
               characters.find((element) => element.id === data.id) === undefined
                  ? setCharacters((characters) => [...characters, data])
                  : alert("Personaje repetido, prueba otro ID");
            } else {
                window.alert('No hay personajes con ese ID');
            }
         });
   }
   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} random={random} />}
         <Routes>
            <Route exact path="/" element={<Form login={login} />}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}> </Route>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/detail/:detailId" element={<Detail />}> </Route>
            <Route path="/favorites" element={<Favorites/>}> </Route>
         </Routes>
      </div>
   )
}
export default App
