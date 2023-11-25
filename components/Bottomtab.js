import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserScreen from "./UserScreen.js";
import CarScreen from "./CarScreen.js";
import RentScreen from "./RentScreen.js";
import Settings from "./Settings.js";
import Chat from "./Chat";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator(); // variable para especificar las opciones de bottom tabs

export default function Bottomtab() {
  return (
    <Tab.Navigator
      initialRouteName="CarsScreen"
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
        component={CarScreen}
        options={{
          title: "Autos",
        }}
      />

      <Tab.Screen
        name="RentScreen"
        component={RentScreen}
        options={{
          title: "Renta Auto",
        }}
      />

      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Cliente",
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
