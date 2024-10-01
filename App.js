import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageScreen from './src/Screens/homepage';
import ViewAllPageScreen from './src/Screens/viewAll';
import Mytravel_1 from './App/province_1';
import Province_2 from './App/province_2';
import Province_3 from './App/province_3';
import { useNavigation } from '@react-navigation/native'; // นำเข้า useNavigation hook

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  const navigation = useNavigation(); 
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        {/* User Profile Section */}
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>User Name</Text>
        <Text style={styles.profileEmail}>test@gmail.com</Text>
      </View>

      {/* Drawer Items */}
      <DrawerItem
        label="My Profile"
        icon={() => <FontAwesome name="user" size={24} color="black" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="My Travel List"
        icon={() => <FontAwesome name="list" size={24} color="black" />}
        onPress={() => navigation.navigate('Province')}
      />
      <DrawerItem
        label="Settings"
        icon={() => <FontAwesome name="cog" size={24} color="black" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Log out"
        icon={() => <FontAwesome name="power-off" size={24} color="black" />}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomePageScreen} />


    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer">
        {/* Drawer as the first screen */}
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen name="Province" component={Mytravel_1} options={{ headerShown: false }} />
        <Stack.Screen name="Mytravel_2" component={Province_2} options={{ headerShown: false }}/>
        <Stack.Screen name="Mytravel_3" component={Province_3} options={{ headerShown: false }}/>

        <Stack.Screen
          name="viewAll"
          component={ViewAllPageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },
});
