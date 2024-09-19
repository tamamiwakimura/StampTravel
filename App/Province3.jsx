import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { List } from 'react-native-paper';


const Mytravel_3 = ({ route }) => {
  const { item } = route.params; // รับข้อมูลที่ส่งมาจาก AccountScreen
  
  return (
    <View style={styles.container}>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Mytravel_3;

