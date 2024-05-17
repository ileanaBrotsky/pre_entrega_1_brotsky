import { Button, TextField, Grid} from '@mui/material';
import { useFormik } from "formik";
 import * as Yup from "yup";

const ChekoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", email: "" , password:"", confirmarpassword:""},
    onSubmit: (data) => {
      console.log(data);
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required("El campo es obligatorio").min(3, "Mínimo requerido tres letras"),
      email: Yup.string().required("El campo es obligatorio").email("El email debe ser válido"),
      password: Yup.string().required("El campo es obligatorio").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/, "debe contener una mayúscula,<br/> una minúscula y un carácter especial"),
      confirmarpassword: Yup.string().required("El campo es obligatorio").oneOf(Yup.ref("password"), "las contraseñas no coinciden"),
    }),
    validateOnChange: false,
       validateOnBlur:true
      });
  console.log(errors);
  return (
   <Grid container  sx={{display:'flex', justifyContent:"center"}}>
      <form onSubmit={handleSubmit} >
        <Grid item rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} xs={12} 
        sx={{display:'flex', flexDirection:"column", backgroundColor: "#FAEFDD", marginTop: 5}}>
  
          <TextField
          variant="outlined"
          sx={{margin:2, backgroundColor:"#FFFFFF"}}
          type="text"
          label="name"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre }
        />
           <TextField
          variant="outlined"
          sx={{margin:2, backgroundColor:"#FFFFFF"}}
          type="text"
          label="email"
          name="email"
          onChange={handleChange}
           error={errors.email ? true : false}
           helperText={errors.email }
        />
        <TextField
          variant="outlined"
          sx={{margin:2, backgroundColor:"#FFFFFF"}}
          type="text"
          label="Contraseña"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
          <TextField
          variant="outlined"
          sx={{margin:2, backgroundColor:"#FFFFFF"}}
          type="text"
          label="Confirmar Contraseña"
          name="confirmarpassword"
          onChange={handleChange}
          error={errors.confirmarpassword ? true : false}
          helperText={errors.confirmarpassword }
        />
          <Button variant="contained" color="success" type='submit'>Enviar</Button>
    </Grid>
    </form>
    </Grid>
  );
};

export default ChekoutFormik;
