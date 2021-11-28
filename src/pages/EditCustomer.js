import {
    Box,
    Button,
    Checkbox,
    Container,
    FormHelperText,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { firebaseGuardar } from 'src/utils/FirebaseUtil';
import * as Yup from 'yup';

const EditCustomer = () => {

    const navigate = useNavigate();

    const crearCliente = (cliente) => {
        firebaseGuardar('usuarios', cliente);
        navigate('/app/customers', { replace: true });
    }

    return (
        <>
            <Helmet>
                <title>Register | Material Kit</title>
            </Helmet>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center'
                }}
            >
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            email: '',
                            firstName: '',
                            lastName: '',
                            telefono: '',
                        }}
                        validationSchema={
                            Yup.object().shape({
                                email: Yup.string().email('No es una cuenta de correo válida').max(255).required('El correo es necesario'),
                                firstName: Yup.string().max(255).required('El nombre es necesario'),
                                lastName: Yup.string().max(255).required('El apellido es necesario'),
                                telefono: Yup.string().test('len', 'Número de teléfono erróneo', val => {
                                    if (val) {
                                        return (val.length === 9 && val > 0 && val % 1 == 0);
                                    }
                                }).required('El número de teléfono también es necesario :D'),
                            })
                        }
                        onSubmit = {(cliente) => {
                        crearCliente(cliente);
                        }}
                    >
                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values
                    }) => {
                        console.log(touched.telefono)
                        console.log(values)
                        console.log(errors)
                        return (
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ mb: 3 }}>
                                    <Typography
                                        color="textPrimary"
                                        variant="h2"
                                    >
                                        Registra tus contactos
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                    >
                                        Añade usuarios para interactuar con ellos
                                    </Typography>
                                </Box>
                                <TextField
                                    error={Boolean(touched.firstName && errors.firstName)}
                                    fullWidth
                                    helperText={touched.firstName && errors.firstName}
                                    label="Nombre"
                                    margin="normal"
                                    name="firstName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstName}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.lastName && errors.lastName)}
                                    fullWidth
                                    helperText={touched.lastName && errors.lastName}
                                    label="Apellido"
                                    margin="normal"
                                    name="lastName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastName}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    type="email"
                                    value={values.email}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(touched.telefono && errors.telefono)}
                                    fullWidth
                                    helperText={touched.telefono && errors.telefono}
                                    label="Móvil"
                                    margin="normal"
                                    name="telefono"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.telefono}
                                    type="number"
                                    variant="outlined"
                                />
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        color="primary"
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Incorporar usuario
                                    </Button>
                                </Box>
                            </form>
                        )
                    }}
                </Formik>
            </Container>
        </Box>
        </>
    );
};

export default EditCustomer;

// import {
//   Box,
//   Button, Container, TextField,
//   Typography
// } from '@material-ui/core';
// import { Formik } from 'formik';
// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom';
// import { firebaseCrear } from 'src/utils/FirebaseUtil';
// import * as Yup from 'yup';

// const EditCustomer = () => {
//   const navigate = useNavigate();

//   const crearCliente = (cliente) => {
//     firebaseCrear('clientes', cliente);
//     navigate('/app/customers', { replace: true });
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Modificar cliente</title>
//       </Helmet>
//       <Box
//         sx={{
//           backgroundColor: 'background.default',
//           display: 'flex',
//           flexDirection: 'column',
//           height: '100%',
//           justifyContent: 'center'
//         }}
//       >
//         <Container maxWidth="sm">
//           <Formik
//             initialValues={{
//               email: '',
//               phone: '',
//               firstName: '',
//               lastName: ''
//             }}
//             validationSchema={
//               Yup.object().shape({
//                 email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
//                 firstName: Yup.string().max(255).required('First name is required'),
//                 phone: Yup.string().max(60),
//                 lastName: Yup.string().max(255).required('Last name is required')
//               })
//             }
//             onSubmit={(usuario) => {
//               crearCliente(usuario);
//             }}
//           >
//             {({
//               errors,
//               handleBlur,
//               handleChange,
//               handleSubmit,
//               isSubmitting,
//               touched,
//               values
//             }) => (
//               <form onSubmit={handleSubmit}>
//                 <Box sx={{ mb: 3 }}>
//                   <Typography
//                     color="textPrimary"
//                     variant="h2"
//                   >
//                     Crear nuevo Cliente
//                   </Typography>
//                 </Box>
//                 <TextField
//                   error={Boolean(touched.firstName && errors.firstName)}
//                   fullWidth
//                   helperText={touched.firstName && errors.firstName}
//                   label="First name"
//                   margin="normal"
//                   name="firstName"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.firstName}
//                   variant="outlined"
//                 />
//                 <TextField
//                   error={Boolean(touched.lastName && errors.lastName)}
//                   fullWidth
//                   helperText={touched.lastName && errors.lastName}
//                   label="Last name"
//                   margin="normal"
//                   name="lastName"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values.lastName}
//                   variant="outlined"
//                 />
//                 <TextField
//                   error={Boolean(touched.email && errors.email)}
//                   fullWidth
//                   helperText={touched.email && errors.email}
//                   label="Email Address"
//                   margin="normal"
//                   name="email"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   type="email"
//                   value={values.email}
//                   variant="outlined"
//                 />
//                 <TextField
//                   error={Boolean(touched.phone && errors.phone)}
//                   fullWidth
//                   helperText={touched.phone && errors.phone}
//                   label="Phone Address"
//                   margin="normal"
//                   name="phone"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   type="phone"
//                   value={values.phone}
//                   variant="outlined"
//                 />

//                 <Box sx={{ py: 2 }}>
//                   <Button
//                     color="primary"
//                     disabled={isSubmitting}
//                     fullWidth
//                     size="large"
//                     type="submit"
//                     variant="contained"
//                   >
//                     Crear
//                   </Button>
//                 </Box>

//               </form>
//             )}
//           </Formik>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default EditCustomer;
