import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main_1 from './App/province_1';
import Province_2 from './App/province_2';
import province_1 from './App/province_1';
import AccountScreen from './App/test';
export default function App() {
  return (
    <View style={styles.container}>
      <AccountScreen/>
    </View>
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
