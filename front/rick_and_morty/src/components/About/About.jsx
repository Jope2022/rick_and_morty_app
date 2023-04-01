import style from "./About.module.css"
import img from "../../img/Jose.jpg"

export default function About(){
    return(
        <div className={style.parrafo}>
         <div  >  
           <img className={style.capa} src={img} alt="jose" />
           </div>
           <div className={style.parrafoimg}>
            <h1 >Jose Perez</h1>
             <h3> FullStrack Developer</h3>
             <p >"Soy Argentino 44 años Estudiante 
                de Henry y en esta aplicación utilice todo lo aprendido
                 en el Boodcamp."</p>  
                 </div>
             </div>
    );
}