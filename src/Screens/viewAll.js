import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ViewAllPageScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        <TouchableOpacity
          style={styles.viewAllBtn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.viewAllText}> Back </Text>
        </TouchableOpacity>

        {/* Phuket Old Town */}
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://www.pullmanphuketpanwa.com/wp-content/uploads/sites/51/2022/07/Phuket-Tour-Company-01.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Phuket old town</Text>
            <Text style={styles.cardLocation}>Phuket, Thailand</Text>
          </View>
        </View>

        {/* Yaowarat Road */}
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://thailand.tripcanvas.co/wp-content/uploads/2020/01/0-Chinatown-Night-Food-Street-chin.dailybites.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Yaowarat Road</Text>
            <Text style={styles.cardLocation}>Bangkok, Thailand</Text>
          </View>
        </View>

        {/* Mae Kampong */}
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://as1.ftcdn.net/v2/jpg/02/21/50/66/1000_F_221506686_Ja04sxl5vT3Oblc7BnV6DxQj30mnYZXi.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Mae Kampong</Text>
            <Text style={styles.cardLocation}>Chiang Mai, Thailand</Text>
          </View>
        </View>

        {/* Koh Tapu */}
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/thumb_back/fh260/background/20220713/pngtree-island-sand-souvenir-ko-tapu-photo-image_6216266.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Koh Tapu</Text>
            <Text style={styles.cardLocation}>Phang Nga, Thailand</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  headerBackground: {
    width: '100%',
    height: 150, // Adjust height to fit the header
    ustifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 15,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 5,
    flex: 1,
    marginHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#777',
  },
  searchIcon: {
    marginLeft: 10,
  },
  actions: {
    flexDirection: 'row',
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 15,
    width: '100%',
    marginTop: '10px',
    
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    
  },
  viewAllBtn: {
    position: 'absolute',
    right: 15,
    top: 5,
  },
  viewAllText: {
    color: '#007BFF',
  },
  card: {
    width: '100%',
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginVertical:7,


    
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardLocation: {
    fontSize: 14,
    color: '#777',
  },
  icon: {
    marginTop: 5,
    alignSelf: 'center',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginRight: 15,
    padding: 10,
    marginVertical: 10,
  },
  textSection: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 10,
    justifyContent: 'center',
  },
  gridText: {
    padding: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gridImage: {
    width: 150,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
});
