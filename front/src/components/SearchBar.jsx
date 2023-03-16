export default function SearchBar(props) {
   const {onSearch} = props;
   return (
      <div>
         <input type='search' />
         <button onClick={() =>props.onSearch("Futuro ID del personaje")}>
         Agregar</button> 
      </div>
   );
}
