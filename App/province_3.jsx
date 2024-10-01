import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Province_3 = ({ route }) => {
  const data = route.params; // รับข้อมูลที่ส่งมาจาก Province_2
  const [checkedItems, setCheckedItems] = useState({}); // เก็บข้อมูลสถานะของ checkbox
  const [currentProvince, setCurrentProvince] = useState(null); // เก็บข้อมูลจังหวัดปัจจุบัน
  const navigation = useNavigation();

  useEffect(() => {
    // โหลดสถานะของ checkbox เมื่อ component ถูก mount
    const loadCheckedItems = async () => {
      try {
        const storedCheckedItems = await AsyncStorage.getItem('checkedItems');
        if (storedCheckedItems) {
          setCheckedItems(JSON.parse(storedCheckedItems));
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadCheckedItems();
  }, []);

  useEffect(() => {
    // ตั้งค่า currentProvince เมื่อเปลี่ยนข้อมูล route
    if (data.name) {
      setCurrentProvince(data.name);
    }
  }, [data.name]);

  useEffect(() => {
    // บันทึกสถานะ checkbox ลงใน AsyncStorage เมื่อ checkedItems เปลี่ยนแปลง
    const saveCheckedItems = async () => {
      try {
        await AsyncStorage.setItem('checkedItems', JSON.stringify(checkedItems));
      } catch (e) {
        console.error(e);
      }
    };

    saveCheckedItems();
  }, [checkedItems]);

  const handleCheckboxPress = async (itemId) => {
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = {
        ...(prevCheckedItems[currentProvince] || {}),
        [itemId]: !prevCheckedItems[currentProvince]?.[itemId],
      };

      const updatedCheckedItemsState = {
        ...prevCheckedItems,
        [currentProvince]: updatedCheckedItems,
      };

      return updatedCheckedItemsState;
    });
  };

  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Image
              source={{
                uri: "https://www.charnveeresortkhaoyai.com/wp-content/uploads/2023/12/Rancho-Dec-1-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88-%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2-06-scaled.jpg",
              }}
              style={styles.HeaderPic}
            />
          </View>
          <View style={styles.ViewMytravellist}>
            <Text style={styles.TextMytravellist}>{data.name}</Text>
          </View>
          <View style={styles.ViewFlatlist}>
            <FlatList
              style={styles.Flatlist}
              data={data.subsubprovince}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <View style={styles.ViweImage}>
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                  </View>
                  <View style={styles.Text}>
                    <View style={styles.TextViewscore}>
                      <View>
                        <Text style={styles.Textprovince}>{item.namesub}</Text>
                      </View>
                      <View style={styles.ViewChecbox}>
                        <Checkbox
                          status={checkedItems[currentProvince]?.[item.idsub] ? 'checked' : 'unchecked'}
                          onPress={() => handleCheckboxPress(item.idsub)}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.idsub}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderPic: {
    height: 200,
    width: '100%',
  },
  ViewMytravellist: {
    padding: 16,
    alignItems: 'center',
  },
  TextMytravellist: {
    fontWeight: 'bold',
  },
  Flatlist: {
    height: 500,
  },
  container: {},
  item: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 12,
    width: 300,
    height: 80,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 60,
    borderRadius: 8,
    objectFit: 'fill',
  },
  ViweImage: {
    justifyContent: 'center',
  },
  Text: {
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  Textprovince: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Textdetail: {
    fontSize: 10.5,
  },
  ViewProgress: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ProgressBar: {
    margin: 3,
    marginVertical: 21,
  },
  ViewFlatlist: {
    marginHorizontal: 30,
  },
});

export default Province_3;
