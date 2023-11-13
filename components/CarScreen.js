import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

import { cars } from "../data"; // Importa datos de carros (asegúrate de que esta importación apunte al origen de datos real)
import { Card, Title, List } from "react-native-paper"; // Importa componentes de react-native-paper
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation para la navegación
import RentScreen from "./RentScreen"; // Importa el componente RentScreen
import { styles } from '../assets/styles/allstyles'; 

function CarScreen() {
  // Definición de estados para los datos del nuevo carro
  const [platenumber, setPlateNumber] = useState("");
  const [brand, setBrand] = useState("");
  const [carState, setCarState] = useState("disponible");

  // Estado para mensajes de error
  const [errorMessage, setErrorMessage] = useState("");

  // Define la variable de navegación antes de usarla
  const navigation = useNavigation();

  // Función para manejar la adición de un nuevo carro
  const handleAddCar = () => {
    if (!platenumber || !brand || !carState) {
      setErrorMessage("Completa todos los campos antes de agregar un carro.");
      return;
    }

    const isPlateUnique = !cars.some((car) => car.platenumber === platenumber);
    if (!isPlateUnique) {
      setErrorMessage("El número de placa ya existe. Ingresa otro.");
      return;
    }

    // Validación adicional para verificar que el estado del carro sea "disponible" antes de agregarlo.
    if (carState !== "disponible") {
      setErrorMessage('El carro no puede agregarse como "No Disponible."');
      return;
    }

    // Validación adicional para verificar que el carro no esté alquilado
    const isCarAvailable = !cars.some(
      (car) => car.platenumber === platenumber && car.state === "alquilado"
    );
    if (!isCarAvailable) {
      setErrorMessage("El carro ya está alquilado. Ingresa otro.");
      return;
    }

    // Añade el nuevo carro a la lista de carros
    cars.push({ platenumber, brand, state: carState });

    // Limpia los campos después de agregar el carro
    setPlateNumber("");
    setBrand("");
    setCarState("disponible");
    setErrorMessage("Carro agregado correctamente");
  };

  // Función para navegar a la pantalla de usuario
  const navigateToUserScreen = () => {
    navigation.navigate("Login");
  };

  // Función para navegar a la pantalla de alquiler
  const navigateToRentScreen = () => {
    navigation.navigate("Rent");
  };

  return (
    <View style={{ padding: 20, backgroundColor:'gray'}}>
      <Title style={{ marginTop: 35, fontSize: 20, textAlign: "center" }}>
        Agregar Vehiculo.
      </Title>
      <Card>
        <Card.Content>
          {/* Campos de entrada para el número de placa, marca y estado del carro */}
          <TextInput
            placeholder="Número de Placa"
            value={platenumber}
            onChangeText={(text) => setPlateNumber(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Marca vehiculo"
            value={brand}
            onChangeText={(text) => setBrand(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Estado del vehiculo"
            value={carState}
            onChangeText={(text) => setCarState(text)}
            style={styles.input}
          />

          {/* Muestra un mensaje de error si existe */}
          {errorMessage ? (
            <Text style={{ color: "red" }}>{errorMessage}</Text>
          ) : null}
        </Card.Content>
        
      </Card>

      {/* Botón para agregar un carro */}
      <Button      
          title="Añadir Vehiculo"
          onPress={handleAddCar}
          style={{ margin: 50, backgroundColor: 'orange', color: 'white' }}
        />

      <Text style={{ marginTop: 35, fontSize: 20, textAlign: "center" }}>
        Lista de Carros:
      </Text>

      {/* Muestra una lista de carros en un componente FlatList */}
      <FlatList
        data={cars}
        keyExtractor={(item) => item.platenumber}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Content>
              <List.Item
                title={`Placa: ${item.platenumber}`}
                description={`Marca: ${item.brand}, Estado: ${item.state}`}
              />
            </Card.Content>
          </Card>
        )}
      />

      {/* Botón para navegar a la pantalla de alquiler */}
      <Button style={{ margin: 50, background: 'orange', color: 'white' }} title="Rentar" onPress={navigateToRentScreen}  />

      {/* Agrega margen entre los botones */}
      <View style={{ margin: 40 }}>
        {/* Botón para volver al usuario */}
        <Button style={{ margin: 50, backgroundColor: 'orange', color: 'white' }} title="Regresar al Inicio" onPress={navigateToUserScreen} />
      </View>
    </View>
  );
}

export default CarScreen;
