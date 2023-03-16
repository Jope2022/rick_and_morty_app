import Card from "../Card/Card"

export default function Cards(props) {
  const { characters } = props;
  return (characters.length === 0 ?
        (<p> ¡Busca un personaje!</p>)
        :
       (characters.map(char => <Card
            key={char.id}
            id={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
            image={char.image}
           // detailId={char.detailId}
            onClose={() => props.onClose(char.id)} />
          )))
         } 
       
    
