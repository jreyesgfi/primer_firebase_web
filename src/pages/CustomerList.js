import { Box, Container } from '@material-ui/core';
import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { firebaseBuscar } from 'src/utils/FirebaseUtil';
//import { firebaseBuscar } from 'src/utils/FirebaseUtil';
import CustomerListResults from '../components/customer/CustomerListResults';
import CustomerListToolbar from '../components/customer/CustomerListToolbar';

const CustomerList = () => {

    // Usamos un hook para atribuir valor por defecto a la lista usuarios
    const [usuarios, setUsuarios] = useState([]);

    // Cuando se inicie esta vista buscamos los clientes
    useEffect(()=> {
        buscarClientes();
    });

    const buscarClientes = async () => {
        let usuarios = await firebaseBuscar('usuarios')
        setClientes(resultado);
    }



  return <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <CustomerListResults customers={usuarios} />
        </Box>
      </Container>
    </Box>
  </>;
}

export default CustomerList;
