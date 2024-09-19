import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Province_2 from './App/province_2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mytravel_1 from './App/Province_1';
import Mytravel_3 from './App/Province3';
const Stack = createStackNavigator();
export default function App() {
  return (
    
         <NavigationContainer>
            <Stack.Navigator initialRouteName="Mytravel_1">
              <Stack.Screen name="Province" component={Mytravel_1} />
              <Stack.Screen name="Mytravel_2" component={Province_2} />
              <Stack.Screen name="Mytravel_3" component={Mytravel_3} />
            </Stack.Navigator>
          </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
