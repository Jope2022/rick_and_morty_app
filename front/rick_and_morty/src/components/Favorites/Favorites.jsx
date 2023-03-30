import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css"
//import {Link} from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
   const dispatch= useDispatch();

    const handlerOder = (event)=>{
            dispatch(orderCards(event.target.value))
    }
    const handlerFilter = (event)=>{
      dispatch(filterCards(event.target.value))
}
return (
       <div >
         <div >
            <select   className={styles.divOrder} onChange={handlerOder} >
               <option   value="order" disabled="disabled">Order By</option>
               <option value="Ascendente">Ascendente</option>
               <option value="Descendente">Descendente</option>
            </select>
            <select className={styles.divOrder} onChange={handlerFilter}>
            <option value="Filter" disabled="disabled">Filter By</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Unknown">Unknown</option>
               <option value="Genderless">Genderless</option>
               
            </select>
         </div>
      {
         myFavorites.map((character) => {
            return (
               <div className={styles.divContainerA}>
                  <div className={styles.divContainerB}>
                     <div className={styles.divContainerC}>

                        <div className={styles.styleFondo}>
                           <dir >
                              <h2 className={styles.styleName}>{character.name}</h2>
                              <img className={styles.styleImage} src={character.image} alt="img not found" />

                           </dir>
                        </div>
                     </div>
                  </div>
               </div>
          )
        })    
    }

        </div>
    )
    }

                                 

 export default Favorites;