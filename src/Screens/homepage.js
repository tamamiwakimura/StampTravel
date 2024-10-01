import React from 'react';
import {StyleSheet,Text,View,Image,ScrollView,TouchableOpacity,ImageBackground,} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomePageScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/564x/e2/b9/3e/e2b93e3df5e1d6af4367c4a30c65942e.jpg',
        }}
        style={styles.headerBackground}></ImageBackground>

      {/* Recommended Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        <TouchableOpacity
          style={styles.viewAllBtn}
          onPress={() => navigation.navigate('viewAll')}>
          <Text style={styles.viewAllText}>View all </Text>
        </TouchableOpacity>

        <ScrollView horizontal >
          {/* Phuket Old Town */}
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://media.gettyimages.com/id/1478631570/photo/phuket-old-town-at-dusk.jpg?s=612x612&w=0&k=20&c=bA6qN-OFc1Xma_GuPIS4laNXAKNAqdxDoc2PuuqB0R0=',
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
        </ScrollView>
      </View>

      {/* Special for you Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Special for you</Text>
        <View style={styles.gridItem}>
          {/* Satun */}
          <Image
            source={{
              uri: 'https://www.takemetour.com/amazing-thailand-go-local/wp-content/uploads/2018/03/Things-to-do-in-Satun-Thailand-The-Loves-Gate-on-Koh-Kai.jpg',
            }}
            style={styles.gridImage}
          />
          <View style={styles.textSection}>
            <Text style={styles.gridText}>Satun</Text>
            <Text style={styles.cardLocation}>159 สถานที่ท่องเที่ยว</Text>
          </View>
        </View>

        <View style={styles.gridItem}>
          {/* Songkhla */}
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Songkhla_Laem_Samila.jpg',
            }}
            style={styles.gridImage}
          />
          <View style={styles.textSection}>
            <Text style={styles.gridText}>Songkhla</Text>
            <Text style={styles.cardLocation}>309 สถานที่ท่องเที่ยว</Text>
          </View>
        </View>

        <View style={styles.gridItem}>
          {/* chiang mai */}
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg/1200px-0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg',
            }}
            style={styles.gridImage}
          />
          <View style={styles.textSection}>
            <Text style={styles.gridText}>Chiang Mai</Text>
            <Text style={styles.cardLocation}>509 สถานที่ท่องเที่ยว</Text>
          </View>
        </View>

        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    flex: 1,
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
    color: '#708090',
  },
  card: {
    width: 170,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
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
    width: 120, 
    height: 80, 
    borderRadius: 10, 
    marginRight: 15,
  },
});
