import styles from "./SearchBar.module.css" 
import {useState} from "react"


export default function SearchBar(props) {
   const  [character, setCharacter]= useState("");
  
  const handleSearch=(evento)=>{
  setCharacter(evento.target.value);
  }

return (
      <div>
         <input  className={styles.styleInput}
          type='search' onChange={handleSearch} placeholder={"Ingrese un ID"} />
        
         <button className={styles.styleBoton} 
         onClick={() => props.onSearch(character)}>
         Agregar</button> 
         <button className={styles.styleBoton} 
         onClick={props.random}>
         Agregar Aleatorio
         </button> 
      </div>
   );
}
