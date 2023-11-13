import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserScreen from "./UserScreen";
import CarsScreen from "./CarScreen";
import RentScreen from "./RentScreen";
import Settings from "./Settings";
//import Chat from "./Chat";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator(); // variable para especificar las opciones de bottom tabs

export default function Bottomtab() {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "orange",
        tabBarInactiveBackgroundColor: "black",
      }}
    >
      <Tab.Screen    
        name="Login"
        component={UserScreen}
        options={{
          title: "Inicio de Sesión",
          tabBarStyle: { display: "none" },
        }}
      />

      <Tab.Screen
        name="CarsScreen"
        component={CarsScreen}
        options={{
          title: "Autos",
          tabBarStyle: { display: "none" },
        }}
      />

      <Tab.Screen
        name="RentScreen"
        component={RentScreen}
        options={{
          title: "Renta Auto",
          tabBarStyle: { display: "none" },
        }}
      />

      


      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Configuraciones",
        }}
      />
    
    </Tab.Navigator>
  );
}
