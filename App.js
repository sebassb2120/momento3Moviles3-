import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserScreen from './components/UserScreen';
import CarScreen from './components/CarScreen';
import RentScreen from './components/RentScreen';

//import Chat from './components/Chat';
import Settings from './components/Settings'
import Bottomtab from './components/Bottomtab';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='bottomtab'>
        
        <Stack.Screen name='Login' component={UserScreen} />
        <Stack.Screen name='Cars' component={CarScreen} />
        <Stack.Screen name='Rent' component={RentScreen} />
        
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name='bottomtab' component={Bottomtab} options={{title:'sistema prueba'}}/>

      </Stack.Navigator>
     </NavigationContainer>
  );
}

