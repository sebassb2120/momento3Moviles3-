import {  View, Text, Switch, TextInput, StyleSheet} from "react-native";
import { styles } from "../assets/styles/allstyles.jsx";

export default function Settings() {
     

  return (
    <View styles={estyles.container}>
      <Text style={{textAlign:'center', fontSize:20, padding:30, fontWeight:'bold'}}>CONFIGURACIONES</Text>

      <View style={estyles.opcionContainer}>
        <Text>Notificaciones</Text>
        <Switch
         
        />
      </View>

      <View style={estyles.opcionContainer}>
        <Text>Rentar Autos</Text>
        <Switch
          // Agrega lógica para manejar el cambio de estado del interruptor
          // Ejemplo: onValueChange={(value) => handleToggleOtherOption(value)}
        />
       </View>

       <View style={estyles.opcionContainer}>
        <Text>Ver Identificacion Cliente</Text>
        <Switch
          // Agrega lógica para manejar el cambio de estado del interruptor
          // Ejemplo: onValueChange={(value) => handleToggleOtherOption(value)}
        />
       </View>

      
      <button style={estyles.botonGuardar}>
        <Text style={estyles.textoBotonGuardar}>Guardar Configuración</Text>
      </button>
    </View>
   
  );
  
}

const estyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: '#fff',
    },
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    opcionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    },

    botonGuardar: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'space-between'         
        
    },

    textoBotonGuardar: {
    color: 'white',     
    fontSize: 16,
    fontWeight: 'bold',    
    }
       
    
     
});