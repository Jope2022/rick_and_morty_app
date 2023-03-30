import Card from "../Card/Card"
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (characters.length === 0 ?
        (<p className={styles.containerCards} > ¡Busca un personaje!</p>)
        :
       (characters.map(char => <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
            detailId={char.detailId}
            onClose={() => props.onClose(char.id)} />
          )))
         } 
       
    
