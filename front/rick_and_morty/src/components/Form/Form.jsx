import React  from "react"
import validate from "./validation.js"
import style from "../Form/Form.module.css"
import { useState } from "react";


const Form =(props)=> {
       
   const [userData, setUserData] = useState
   ({ username: '', password: '' });
    
   const [errors, setErrors] = useState
   ({ username: '', password: '' });
    
   const handleInputChange = (e) =>{
     const value = e.target.value;
     const property = e.target.name;
    setUserData({ 
         ...userData,[property]: value });
    setErrors(validate({
        ...userData, [property]: value }));
   } 

   const handleSubmit = (e) =>{ 
    e.preventDefault();
    props.login(userData);
   }
    return (
        <div className={style.divPrincipal} >
            <form  onSubmit={handleSubmit}>
                <h5 className={style.formularioH5} >Formulario Login</h5>
                <label htmlFor="username">Username:</label>
                <input type="text" 
                className={style.styleInput }
                name="username"
                value={userData.username}
                onChange={handleInputChange}/>
                {errors.username  && <p className="danger" style={{color:"red"}}>{errors.username } </p>} 
                <br />
                         
                <label htmlFor="password">Password:</label>
                <input 
                className={style.styleInput }
                name="password"
                type="password"
                value={userData.password}
                onChange={handleInputChange}/>
                {errors.password  && <p className="danger" style={{color:"red"}}>{errors.password } </p>}
                <br />
 
                 <button  className={style.botton} >LOGIN</button>
                
                
            </form>
        </div>
 )
} 
export default Form;