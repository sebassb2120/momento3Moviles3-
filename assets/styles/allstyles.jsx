import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'orange', // Cambiamos el color del borde a azul
    borderWidth: 5,
    borderRadius: 30,
    padding: 10,
    fontSize: 20,
    marginTop:15,
  },
  confirmationBubble: {
    backgroundColor: 'orange', // Fondo azul
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  confirmationText: {
    color: 'black', // Texto blanco
    fontSize: 20, // Tamaño de fuente más grande
  },
  priceBubble: {
    backgroundColor: 'orange', // Fondo azul
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  priceText: {
    color: 'white', // Texto blanco
    fontSize: 20, // Tamaño de fuente más grande
  },
  button: {
    marginVertical: 10, // Agrega margen en la parte superior e inferior
  },
  buttonContainer: {
    flexDirection: 'row', // Alinea los botones en fila
    justifyContent: 'space-between', // Espacio entre los botones
    marginTop:10,
  },
});

export { styles };
