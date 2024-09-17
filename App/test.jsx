import { View, Text, StyleSheet, FlatList, SafeAreaView,Image  } from 'react-native';
import DATA from './province_data';
import * as Progress from 'react-native-progress';


const AccountScreen = () => {
    return (
        <View>
            <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                    
                        <View style={styles.item}>
                            <View style={styles.ViweImage}>
                                <Image 
                                source={{ uri: item.imageUrl }} 
                                style={styles.image} />
                            </View>

                            <View style={styles.Text}>
                                <Text style={styles.Textprovince} >{item.label}</Text>
                                <Text style={styles.Textdetail}>{item.description}</Text>
                                <View style={styles.ViewProgress}>
                                    <Progress.Bar progress={item.ProgressPercent} width={120} style={styles.ProgressBar}/>
                                    <Text style={styles.Textdetail}>{item.Percent}</Text>
                                </View>
                            </View>
                            
                        </View>
                    
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
    container1: {
        
    },
    container: {
        padding: 16, //ความกว้างขอบบน
        
    },
    item: {
        marginVertical: 8, //ช่องว่างบนล่าง
        padding: 16,
        //marginHorizontal: 18,
        backgroundColor: '#fddd',
        borderRadius: 12,
        //alignItems: 'center',
        justifyContent: 'space-between:',
        width: 300,
        height: 100,
        flexDirection: 'row'
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
    },
    Textprovince: {
        fontSize: 16,
        fontWeight:'bold'
    },
    Textdetail: {
        fontSize: 10
    },
    ViewProgress: {
        alignItems: 'center',
        flexDirection: 'row',
        //margin:10
    },

    ProgressBar:{
        margin: 3
    }
});

export default AccountScreen