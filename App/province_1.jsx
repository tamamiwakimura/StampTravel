import { View, Text, StyleSheet, FlatList, SafeAreaView,Image ,TouchableOpacity } from 'react-native';
import DATA from './province_data';
import * as Progress from 'react-native-progress';
import { shadow } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Mytravel_1 = ({ navigation }) => {
    return (
    <View>
        
        <SafeAreaView>
            
            <View style={styles.container}>
                <View >
                    <Image
                            source={{
                                uri: "https://www.charnveeresortkhaoyai.com/wp-content/uploads/2023/12/Rancho-Dec-1-%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88-%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%83%E0%B8%99%E0%B9%84%E0%B8%97%E0%B8%A2-06-scaled.jpg",
                            }}
                            style={styles.HeaderPic}
                        />
                </View>
                <View style={styles.ViewMytravellist}>
                    <Text style={styles.TextMytravellist}>My travel List</Text>
                </View>
                <FlatList style={styles.Flatlist}
                    data={DATA}
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
                                    <Progress.Bar progress={item.ProgressPercent} width={120} style={styles.ProgressBar} color={'#000000'} height={8} borderRadius={10} />
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
        </SafeAreaView>
        </View>
        
    );
}


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
        height:500,
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
        
        
        
    }
});

export default Mytravel_1;