import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/LoginScreen';
import MenuList from './components/menu';
import { Colors } from 'react-native-paper';
//import MenuList from './components/menu';
const Stack = createNativeStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='HOME'
      screenOptions={{ headerStyle:{backgroundColor :'pink'},  headerTitleAlign: 'center',
      }}>
     <Stack.Screen name="Welcome"  component={MenuList} />
     <Stack.Screen name="Subscribe" component={LoginScreen} />
 
     
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
