import { View, Text, StyleSheet, FlatList, SafeAreaView,Image ,TouchableOpacity } from 'react-native';
import DATA from './province_data';
import * as Progress from 'react-native-progress';
import { shadow } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import { TextInput,ImageBackground,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // นำเข้า MaterialIcons


const Mytravel_1 = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState(''); // เก็บคำค้นหา
    const [filteredData, setFilteredData] = useState(DATA); // เก็บข้อมูลที่กรองแล้ว

    // ฟังก์ชันสำหรับค้นหานะจ้ะ
    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text) {
            const newData = DATA.filter(item => 
                item.label.toLowerCase().includes(text.toLowerCase()) ||
                item.description.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(newData);
        } else {
            setFilteredData(DATA); // หากไม่มีการค้นหา แสดงข้อมูลทั้งหมด
        }
    };
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
                        <View style={styles.TextInput}>
                        <Icon name="search" size={24} color="#888" style={styles.iconsearh} />
                            <TextInput
                                style={styles.searchBar}
                                placeholder="Search"
                                value={searchQuery}
                                onChangeText={handleSearch} // เมื่อผู้ใช้พิมพ์จะทำการค้นหา
                            />
                        </View>
                       
                        </ImageBackground>
                </View>
                <View style={styles.ViewMytravellist}>
                    <Text style={styles.TextMytravellist}>My travel List</Text>
                </View>

               
                    <View style={styles.ViewFlatlist}>
                    <FlatList style={styles.Flatlist}
                    data={filteredData}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Mytravel_2', item)} > 
                      
                        <View style={styles.item}>
                            <View style={styles.ViweImage}>
                                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                            </View>

                            <View style={styles.Text}>
                                <Text style={styles.Textprovince} >{item.label}</Text>
                                <Text style={styles.Textdetail}>{item.description}</Text>
                                <View style={styles.ViewProgress}>
                                <Progress.Bar progress={item.ProgressPercent} width={120} style={styles.ProgressBar} color={'black'}/>
                                <Text style={styles.Textdetail}>{item.Percent}</Text>

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
}


const styles = StyleSheet.create({
    HeaderPic:{
        height:180,
        width:'100%',
        

    },
  
    ViewMytravellist: {
        padding: 10, //ให้มีขอบ
        alignItems: 'center',
    },
    TextMytravellist:{
        fontWeight:'bold'
    },

    Flatlist: {
        height:500,
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
        
        width: 300,
        height: 100,
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

export default Mytravel_1;