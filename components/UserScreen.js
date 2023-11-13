import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper'; // Importa componentes de react-native-paper
import { users } from '../data';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation desde react-navigation/native
import RentScreen from './RentScreen'; // Esto parece ser una importación innecesaria, pero puedes usarla para navegar a la pantalla RentScreen en el futuro.
import { styles } from '../assets/styles/allstyles'; // Importa estilos desde un archivo.

function UserScreen() {
  const [username, setUsername] = useState(''); // Estado para el nombre de usuario.
  const [name, setName] = useState(''); // Estado para el nom
  const [password, setPassword] = useState(''); // Estado para la contraseña.
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mostrar mensajes de error.
  const [snackbarVisible, setSnackbarVisible] = useState(false); // Estado para mostrar o esconder una notificación emergente.

  const navigation = useNavigation(); // Obtiene el objeto de navegación para redirigir a otras pantallas.

  const handleRegistration = () => {
    const isUsernameTaken = users.some((user) => user.username === username);
    if (isUsernameTaken) {
      setErrorMessage('Nombre de usuario ya existe. Elige otro.');
      setSnackbarVisible(true);
      return; // Salir de la función si el nombre de usuario ya está tomado.
    }

    // Realiza validaciones adicionales (por ejemplo, contraseña, nombre, etc.)
    // Aquí puedes agregar validaciones personalizadas, como verificar que el nombre solo contiene letras y espacios
    // y que la contraseña contiene letras y números.

    // Si todas las validaciones pasan, agrega el nuevo usuario al arreglo de usuarios.
    users.push({ username, name, password });

    // Limpia los campos después de un registro exitoso.
    setUsername('');
    setName('');
    setPassword('');
    setErrorMessage('Registro exitoso');
    setSnackbarVisible(true);
  };

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      // Utiliza la función navigate para redirigir al usuario a la pantalla CarsScreen
      navigation.navigate('Cars');
    } else {
      setErrorMessage('Usuario y/o contraseña incorrectos. Inténtelo de nuevo');
      setSnackbarVisible(true);
    }
  };

  return (
    <View style={{ padding: 20, backgroundColor:'black' }}>
      <Text style={{ fontSize: 24, marginBottom:20 , color:'white', textAlign:'center' }}>Registro de Usuario</Text>
      <TextInput
        label="Nombre de usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Nombre"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true} // Campo de contraseña
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleRegistration}
        style={{ backgroundColor: 'orange', color: 'white', marginTop:20 }}
      >
        Registrar Usuario
      </Button>

      <Button mode="outlined" onPress={handleLogin}>
        Iniciar Sesión
      </Button>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
      >
        {errorMessage}
      </Snackbar>
    </View>
  );
}

export default UserScreen;

