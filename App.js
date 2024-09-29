import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Province_2 from './App/province_2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mytravel_1 from './App/province_1';
import Province_3 from './App/province_3';
import HomePageScreen from './src/Screens/homepage';
import ViewAllPageScreen from './src/Screens/viewAll';
const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="homepage">
        <Stack.Screen name="homepage" component={HomePageScreen} options={{headerShown: false,}}/>

        <Stack.Screen name="Province" component={Mytravel_1} />
        <Stack.Screen name="Mytravel_2" component={Province_2} />
        <Stack.Screen name="Mytravel_3" component={Province_3} />
        <Stack.Screen name="viewAll" component={ViewAllPageScreen} options={{headerShown: false,}}/>

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
