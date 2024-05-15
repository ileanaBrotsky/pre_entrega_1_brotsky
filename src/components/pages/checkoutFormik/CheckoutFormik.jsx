import { Button, TextField } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from "yup";

const ChekoutFormik = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: { nombre: "", email: "" , password:"", confirmarpassword:""},
    onSubmit: (data) => {
      console.log(data);
    },
    // validationSchema: Yup.object({
    //   nombre: Yup.string().required("El campo es obligatorio").min(3, "Mínimo requerido tres letras"),
    //   email: Yup.string().required("El campo es obligatorio").email("El email debe ser válido"),
    //   password: Yup.string().required("El campo es obligatorio").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/, "debe contener una mayúscula,<br/> una minúscula y un carácter especial"),
    //   confirmarpassword: Yup.string().required("El campo es obligatorio").oneOf(Yup.ref("password"), "las contraseñas no coinciden"),
    // }),
    validateOnChange: false,
    //    validateOnBlur:true
  });
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          type="text"
          label="name"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre }
        />
           <TextField
          variant="outlined"
          type="text"
          label="email"
          name="email"
          onChange={handleChange}
           error={errors.email ? true : false}
           helperText={errors.email }
        />
        <TextField
          variant="outlined"
          type="text"
          label="Contraseña"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
          <TextField
          variant="outlined"
          type="text"
          label="Confirmar Contraseña"
          name="confirmarpassword"
          onChange={handleChange}
          error={errors.confirmarpassword ? true : false}
          helperText={errors.confirmarpassword }
        />
          <Button type='submit'>Enviar</Button>
      </form>
    </div>
  );
};

export default ChekoutFormik;
