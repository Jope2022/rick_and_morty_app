const validate= (userData) =>{
let errors= {};

 // Validación del username
 if (!userData.username) {
   errors.username = "El nombre de usuario es obligatorio.";
 }
  if (!/\S+@\S+/.test(userData.username)) {
   errors.username = "El nombre de usuario debe ser un email válido.";
 } if (userData.username.length > 35) {
   errors.username = "El nombre de usuario no puede tener más de 35 caracteres.";
 }

 // Validación de la contraseña
 if (!userData.password) {
   errors.password = "La contraseña es obligatoria.";
 } else if (!/(?=.*[0-9])/.test(userData.password)) {
   errors.password = "La contraseña debe tener entre 6 y 10 caracteres y al menos un número.";
 }
 return errors;
}

export default validate;


