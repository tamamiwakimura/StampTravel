import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import this hook to get navigation
import DATA from './province_data';
import { Checkbox} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Province_3 = ({ route }) => {
  const data = route.params; // รับข้อมูลที่ส่งมาจาก Province_2
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0); // เก็บจำนวน checkbox ที่ถูกเลือก
  const navigation = useNavigation();
  useEffect(() => {
    const loadCheckedItems = async () => {
      try {
        const storedCheckedItems = await AsyncStorage.getItem('checkedItems');
        if (storedCheckedItems) {
          const parsedCheckedItems = JSON.parse(storedCheckedItems);
          setCheckedItems(parsedCheckedItems);

          // นับจำนวน checkbox ที่ถูกเลือก
          const countChecked = Object.values(parsedCheckedItems).filter(Boolean).length;
          setCheckedCount(countChecked);
        }
      } catch (error) {
        console.error('Failed to load checked items:', error);
      }
    };

    loadCheckedItems();
  }, []);
 
  //-----------เปลี่ยนสถานะ checkbox นะคับ
  const handleCheckboxPress = async (subId) => {
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = {
        ...prevCheckedItems,
        [subId]: !prevCheckedItems[subId], // เปลี่ยนสถานะ checkbox ของรายการที่มี subId ตรงกัน
      };

      // นับจำนวน checkbox ที่ผู้ใช้เลือกนะจ้ะ
      const countChecked = Object.values(updatedCheckedItems).filter(Boolean).length;
      setCheckedCount(countChecked);

      // บันทึกค่าใน AsyncStorage
      try {
        AsyncStorage.setItem('checkedItems', JSON.stringify(updatedCheckedItems));
      } catch (error) {
        console.error('Failed to save checked items:', error);
      }

      return updatedCheckedItems;
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
                        <Text style={styles.Textprovince}>{checkedCount}</Text>
                      </View>
                      <Checkbox
                        status={checkedItems[item.idsub] ? 'checked' : 'unchecked'}
                        onPress={() => handleCheckboxPress(item.idsub)} // เรียกใช้ฟังก์ชันเมื่อ checkbox ถูกกด
                      />
                    </View>
                  </View>
                </View>
            
            )}
            keyExtractor={(item) => item.idsub}
            showsHorizontalScrollIndicator={false} // ซ่อนสัญลักษณ์การเลื่อนแนวนอน
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
