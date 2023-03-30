import styles from "./Card.module.css";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import { useState  } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";
//useSelector
//useEffect
export default function Card(props) {
   const dispatch = useDispatch();
//   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavorite(props.id)); 
      }
      else {
         setIsFav(true);
         dispatch(addFavorite(props))
   
      }
   }
//   useEffect(() => {
//      myFavorites.forEach((fav) => {
//        if (fav.props.id === props.id) {
//            setIsFav(true);
//         }
//      });
//   }, [props.id]);

   return (

      <div className={styles.divContainer1}>
        <div className={styles.divContainer2}>
         <dir className={styles.styleFondo}>
            {
            isFav ? (
               <button className={styles.styleCorazon}  onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.styleCorazon} onClick={handleFavorite}>🤍</button>
            )
            }
               <div>
                  <button className={styles.styleCierre}
                     onClick={props.onClose}>x</button>
               </div>
               <div className={styles.containerImg}>
                  <img className={styles.styleImage} src={props.image} alt="img not found" />
               </div>
               <Link to={`/detail/${props.id}`}>
                  <h2 className={styles.styleName} >{props.name}</h2>
               </Link>
               <div className={styles.containerText}>
                  <h2 className={styles.styleEspecie}>Species: {props.species}  </h2>
               </div>
               <div>
                  <h2 className={styles.styleEspecie}> Gender: {props.gender} </h2>
                  </div>
            </dir>
         </div>
      </div>
   ); 
}

