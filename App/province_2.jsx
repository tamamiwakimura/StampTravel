import * as React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView,Image ,TouchableOpacity } from 'react-native';
import { List} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DATA from './province_data';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native'; // เพิ่ม useNavigation
import { useFocusEffect } from '@react-navigation/native'; 
import { useState, useEffect } from 'react';
import { TextInput,ImageBackground,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // นำเข้า MaterialIcons


const Province_2 = ({ route ,navigation}) => {
  const data = route.params ; // รับข้อมูลที่ส่งมาจาก 
    


  return (
    <View>
        
        <SafeAreaView>
            
            <View style={styles.container}>
            <View >
                    <ImageBackground
                            source={{
                                uri: "https://www.charnveeresortkhaoyai.com/wp-content/uploads/2023/12/Rancho-Dec-1-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88-%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2-06-scaled.jpg",
                            }}
                            style={styles.HeaderPic}
                        >
                      
                       
                        </ImageBackground>
                </View>
                <View style={styles.ViewMytravellist}>
                    <Text style={styles.TextMytravellist}>{data.label}</Text>
                </View>
                <View style={styles.ViewFlatlist}>
                <FlatList style={styles.Flatlist}
                    data={data.subprovince}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Tourist Attractions', { ...item, checkedCount: 0 })} > 
                      
                        <View style={styles.item} key={item.subprovince}>

                            <View style={styles.Text}>
                              <View  style={styles.TextViewscore}>
                                <View>
                                  <Text style={styles.Textprovince} >{item.name}</Text>
                                </View>
                                <Text style={styles.Textscore}>
                                   {}  {item.subsubprovince.length}
                                </Text>
                              </View>
                             
                              
                            </View>
                            
                            
                            
                        </View>
                    </TouchableOpacity>
                    )}
                    keyExtractor={item => item.key}
                    showsHorizontalScrollIndicator={false} // ซ่อนสัญลักษณ์การเลื่อนแนวนอน
                />
                </View>
                
            </View>
        </SafeAreaView>
        </View>
  );
};

const styles = StyleSheet.create({
  HeaderPic:{
    height:150,
    width:'100%',
    

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
    
    width: 300, //ความกว้าง flatlist
    height: 60,
    flexDirection: 'row' //ให้มันเรียงในแนวนอนนะจ้ะ
},
image: {
    width: 120, // กำหนดความกว้างของรูปภาพ
    height: 80, // กำหนดความสูงของรูปภาพ
    //marginBottom: 8, // ระยะห่างระหว่างรูปกับข้อความ
    borderRadius: 8, // ทำให้ขอบของรูปภาพโค้งมน
    objectFit:'fill', //กำหนดขนาดรูปภาพ
    

},
ViweImage: {
    justifyContent: 'center', //ให้รูปอยู่ตรงกลาง
},
Text: {
    paddingHorizontal: 20, //กำหนดความกว้างแนวนอน ของข้อความกับรูปภาพ
    justifyContent:'center'
},
Textprovince: { //text อำเภอ
    fontSize: 16,
    fontWeight:'bold'
},

TextViewscore: {
  flexDirection: 'row',
  justifyContent: 'space-between',  
  alignItems: 'center',  // ให้ข้อความอยู่กึ่งกลางในแนวตั้ง
  width: 250,  // ความกว้างตรงกลาง
},
Textscore: {
  
  justifyContent: 'center',
  fontSize: 19,
  fontWeight:'bold'

},
ViewProgress: {
    alignItems: 'center',
    flexDirection: 'row',
   
    //margin:10
},

ProgressBar:{
    margin: 3,
    marginVertical:21,
    
  },
  ViewFlatlist:{
    marginHorizontal:30
},
TextInput:{
    marginHorizontal:40,
    backgroundColor:'white',
    marginVertical:80,
    borderRadius: 10,
    paddingHorizontal:10,
    height:30,
    flexDirection: 'row' //ให้มันเรียงในแนวนอนนะจ้ะ

},
iconsearh:{
    paddingVertical:3,
    paddingHorizontal:3
}
});

export default Province_2;

