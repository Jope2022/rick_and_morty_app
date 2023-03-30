import { useState} from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from "./Detail.module.css"

export default function Detail() {

const { detailId } = useParams()

const [character, setCharacter] = useState( {
    name: "",
    status: "",
    species:"",
    gender:"",
    origin:"",
    image:"",
}); 

useEffect(() => {
      fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

return (
    < div >
        <div className={style.divUno}>
            <div className={style.Texto} >
              <h1 >
                <p  >NOMBRE: <b Name></b>{character.name } </p>
                </h1>
                <h2 >
                {character.status &&<p>STATUS: <b Status></b>{character.status} </p>}
                {character.species && <p>SPECIE: <b Species></b>{character.species} </p>}
                {character.gender &&<p>GENDER: <b Gender></b>{character.gender} </p> }
                {character.origin && <p>ORIGIN: <b Origin></b>{character.origin} </p>}
                </h2>            
            </div>
            <div >
            <img className={style.imagenEtiqueta} src={character.image} alt="" />
            </div>
        </div>
    </div >
   );
 }

