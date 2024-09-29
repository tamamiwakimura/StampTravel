import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DATA from './province_data';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Province_3 = ({ route }) => {
  const data = route.params; // รับข้อมูลที่ส่งมาจาก Province_2
  const [checkedItems, setCheckedItems] = useState({}); // เก็บข้อมูล checkbox
  const [checkedCount, setCheckedCount] = useState({}); // เก็บจำนวน checkbox ที่ถูกเลือก
  const [currentSubProvince, setCurrentSubProvince] = useState(data.subsubprovince[0]?.idsub || null); // ใช้ค่าเริ่มต้นจากข้อมูล
  const navigation = useNavigation();

  useEffect(() => {
    // ตั้งค่าเริ่มต้นให้กับ currentSubProvince
    if (data.subsubprovince && data.subsubprovince.length > 0) {
      setCurrentSubProvince(data.subsubprovince[0].id); // ใช้ id แทน ids
    }
  }, [data.subsubprovince]);

  useEffect(() => {
    // โหลดค่าที่บันทึกไว้ใน AsyncStorage
    const loadCheckedItems = async (subId) => {
      try {
        const storedCheckedItems = await AsyncStorage.getItem(`checkedItems_${subId}`);
        if (storedCheckedItems) {
          const parsedCheckedItems = JSON.parse(storedCheckedItems);
          setCheckedItems((prev) => ({
            ...prev,
            [subId]: parsedCheckedItems,
          }));

          // นับจำนวน checkbox ที่ถูกเลือก
          const countChecked = Object.values(parsedCheckedItems).filter(Boolean).length;
          setCheckedCount((prev) => ({
            ...prev,
            [subId]: countChecked,
          }));
        }
      } catch (error) {
        console.error('Failed to load checked items:', error);
      }
    };

    if (currentSubProvince) {
      loadCheckedItems(currentSubProvince);
    }
  }, [currentSubProvince]);

  const handleCheckboxPress = async (itemId) => {
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = {
        ...(prevCheckedItems[currentSubProvince] || {}), // ใช้ค่าที่มีอยู่แล้ว
        [itemId]: !prevCheckedItems[currentSubProvince]?.[itemId], // เปลี่ยนสถานะ checkbox
      };

      const updatedCheckedItemsState = {
        ...prevCheckedItems,
        [currentSubProvince]: updatedCheckedItems, // อัปเดต checkedItems สำหรับ subId
      };

      // นับจำนวน checkbox ที่ถูกเลือก
      const countChecked = Object.values(updatedCheckedItems).filter(Boolean).length;

      setCheckedCount((prev) => ({
        ...prev,
        [currentSubProvince]: countChecked,
      }));

      // บันทึกข้อมูลใน AsyncStorage
      try {
        AsyncStorage.setItem(`checkedItems_${currentSubProvince}`, JSON.stringify(updatedCheckedItems));
      } catch (error) {
        console.error('Failed to save checked items:', error);
      }

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
                    <Checkbox
                      status={checkedItems[currentSubProvince]?.[item.idsub] ? 'checked' : 'unchecked'}
                      onPress={() => handleCheckboxPress(item.idsub)}
                    />
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.idsub}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    HeaderPic:{
        height:120,
        width:320,
        

    },
  
    ViewMytravellist: {
        padding: 16, //ให้มีขอบ
        alignItems: 'center',
    },
    TextMytravellist:{
        fontWeight:'bold'
    },

    Flatlist: {
        height:450,
    },
    container: {
        padding: 20, //ความกว้างขอบบน
        marginLeft:5
    },
    item: {
        marginVertical: 8, //ช่องว่างบนล่าง
        padding: 10, //ช่องว่างซ้ายขวา
        backgroundColor: '#FFFFFF', //ให้flatlist เป็นสีขาว

        //-----------------------------อันนี้้สำหรับ IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
       
        //----------------------------อันนี้สำหรับ Androind
        elevation: 5, // เงากรอบจ้า
       
        borderRadius: 12, //ความโค้งของกรอบนะจ้ะ
        
        width: 300,
        height: 80,
        flexDirection: 'row' //ให้มันเรียงในแนวนอนนะจ้ะ
    },
    image: {
        width: 100, // กำหนดความกว้างของรูปภาพ
        height: 60, // กำหนดความสูงของรูปภาพ
        //marginBottom: 8, // ระยะห่างระหว่างรูปกับข้อความ
        borderRadius: 8, // ทำให้ขอบของรูปภาพโค้งมน
        objectFit:'fill', //กำหนดขนาดรูปภาพ
        

    },
    ViweImage: {
        justifyContent: 'center', //ให้รูปอยู่ตรงกลาง
    },
    Text: {
        paddingHorizontal: 16, //กำหนดความกว้างแนวนอน ของข้อความกับรูปภาพ
        justifyContent:'center'
    },
    Textprovince: { //text จังหวัด
        fontSize: 16,
        fontWeight:'bold'
    },
    Textdetail: {
        fontSize: 10.5
    },
    ViewProgress: {
        alignItems: 'center',
        flexDirection: 'row',
       
        //margin:10
    },

    ProgressBar:{
        margin: 3,
        marginVertical:21,
        
        
        
    }
});

export default Province_3;
