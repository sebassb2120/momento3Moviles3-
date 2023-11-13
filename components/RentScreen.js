import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { users, cars, rents } from '../data'; // Importa datos de usuarios, carros y alquileres
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation para la navegación
import { styles } from '../assets/styles/allstyles'; // Importa estilos

function RentScreen() {
  // Declaración de estados locales para almacenar información de alquiler y mensajes de error.
  const [rentUsername, setRentUsername] = useState(''); // Nombre de usuario
  const [rentPlateNumber, setRentPlateNumber] = useState(''); // Número de placa del carro
  const [rentStartDate, setRentStartDate] = useState(''); // Fecha de inicio del alquiler
  const [rentEndDate, setRentEndDate] = useState(''); // Fecha de fin del alquiler
  const [errorMessage, setErrorMessage] = useState(''); // Mensaje de error
  const [snackbarVisible, setSnackbarVisible] = useState(false); // Visibilidad de la notificación
  const [rentPricePerDay, setRentPricePerDay] = useState(0); // Precio por dí
  const [rentTotalPrice, setRentTotalPrice] = useState(0); // Precio total del alquiler

  const navigation = useNavigation(); // Función de navegación para redirigir a otras pantallas.

  // Función que se ejecuta al hacer clic en el botón "Registrar Alquiler".
  const handleRegisterRent = () => {
    // Verificación de la existencia del usuario y el carro, y la validez de las fechas.
    const userExists = users.some((user) => user.username === rentUsername);
    const carExists = cars.some((car) => car.platenumber === rentPlateNumber);

    if (!userExists) {
      // Si el usuario no existe, se establece un mensaje de error y se muestra la notificación.
      setErrorMessage('El usuario no existe.');
      setSnackbarVisible(true);
      return; // Salir de la función.
    }

    if (!carExists) {
      // Si el carro no existe, se establece un mensaje de error y se muestra la notificación.
      setErrorMessage('El carro no existe.');
      setSnackbarVisible(true);
      return; // Salir de la función.
    }

    const car = cars.find((car) => car.platenumber === rentPlateNumber);
    if (car.state === 'no disponible') {
      // Si el carro no está disponible para alquiler, se establece un mensaje de error y se muestra la notificación.
      setErrorMessage('El carro no está disponible para alquiler.');
      setSnackbarVisible(true);
      return; // Salir de la función.
    }

    const startDate = new Date(rentStartDate);
    const endDate = new Date(rentEndDate);

    if (isNaN(startDate) || isNaN(endDate) || endDate <= startDate) {
      // Verificación de la validez de las fechas. Si no son válidas, se establece un mensaje de error y se muestra la notificación.
      setErrorMessage('Las fechas de inicio y fin son inválidas.');
      setSnackbarVisible(true);
      return; // Salir de la función.
    }

    // Lógica de cálculo de precios
    const dailyRate = 50; // Precio diario de alquiler
    const timeDiff = Math.abs(endDate - startDate);
    const daysRented = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const totalPrice = daysRented * dailyRate;

    // Creación de un nuevo objeto de alquiler
    const newRent = {
      rentnumber: rents.length + 1, // Genera un número único de alquiler.
      username: rentUsername,
      platenumber: rentPlateNumber.toUpperCase(), // Convertir el número de placa a mayúsculas.
      startdate: rentStartDate,
      enddate: rentEndDate,
      pricePerDay: dailyRate,
      totalPrice: totalPrice,
    };

    rents.push(newRent); // Agrega el nuevo alquiler a la lista de alquileres.

    car.state = 'no disponible'; // Marca el carro como "no disponible".

    // Limpieza de los campos después de agregar el alquiler.
    setRentUsername('');
    setRentPlateNumber('');
    setRentStartDate('');
    setRentEndDate('');
    setRentPricePerDay(dailyRate);
    setRentTotalPrice(totalPrice);

    // Muestra un mensaje de éxito.
    setErrorMessage(`Alquiler de carro ${car.platenumber} por ${rentUsername} del ${rentStartDate} al ${rentEndDate} registrado correctamente.`);
    setSnackbarVisible(true);
  };

  // Función para redirigir al usuario a la pantalla de inicio de sesión ("Login").
  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Renta Automovil </Text>
      <TextInput
        placeholder="Nombre usuario"
        value={rentUsername}
        onChangeText={(text) => setRentUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Placa Automovil"
        value={rentPlateNumber}
        onChangeText={(text) => setRentPlateNumber(text.toUpperCase())}
        style={styles.input}
      />
      <TextInput
        placeholder="Fecha de Inicio (YYYY-MM-DD)"
        value={rentStartDate}
        onChangeText={(text) => setRentStartDate(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Fecha de Fin (YYYY-MM-DD)"
        value={rentEndDate}
        onChangeText={(text) => setRentEndDate(text)}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Registrar Alquiler" onPress={handleRegisterRent} style={styles.button} />
        <Button title="Regresar al Usuario" onPress={navigateToLoginScreen} style={styles.button} />
      </View>
      {snackbarVisible ? (
        <View style={styles.confirmationBubble}>
          <Text style={styles.confirmationText}>{errorMessage}</Text>
        </View>
      ) : null}
      {rentPricePerDay > 0 ? (
        <View style={styles.priceBubble}>
          <Text style={styles.priceText}>Precio por día: ${rentPricePerDay}</Text>
        </View>
      ) : null}
      {rentTotalPrice > 0 ? (
        <View style={styles.priceBubble}>
          <Text style={styles.priceText}>Precio total del alquiler: ${rentTotalPrice}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default RentScreen;
