import { View,Text,ImageBackground ,StyleSheet,Button } from "react-native";
import { useState, useEffect } from 'react';
import { TextInput} from 'react-native';

const Profile = ({ navigation }) => {

    const [text, setText] = useState('แก้ไขข้อความนี้ได้');
    const [texts, setTexts] = useState({
        name: 'กรอกชื่อ',
        Tell: 'xxx-xxxxxxx',
        Email: 'skibidi@gmailcom'

      });
      
      const [isEditing, setIsEditing] = useState(false);

      const handleEditPress = () => {
        setIsEditing(true); // เมื่อกดปุ่มจะแสดง TextInput ให้แก้ไขได้
      };
    
      const handleSavePress = () => {
        setIsEditing(false); // เมื่อกดปุ่มจะบันทึกการแก้ไขและกลับไปแสดง Text
      };
    
      const handleChangeText = (key, newText) => {
        setTexts((prevTexts) => ({
          ...prevTexts,
          [key]: newText, // อัปเดตข้อความของแต่ละส่วน
        }));
      };
    return(
        <View>
      <View>
        <ImageBackground
          source={{
            uri: "https://www.govivigo.com/content/upload/images/1b_articles/Top%205%20highest%20mountains-1.jpg",
          }}
          style={styles.HeaderPic}
        />
      </View>

      <View style={styles.ViewText}>
        <Text style={styles.TextProfile}>My Profile</Text>
      </View>

      <View>
        <View style={styles.ViewInput}>
            <View style={styles.ViewText2}>
            <Text>Name : </Text>

            </View>
          <View style={styles.ViewTextInput2}>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={texts.name}
                onChangeText={(newText) => handleChangeText('name', newText)}
                autoFocus
              />
            ) : (
              <Text style={styles.text}>{texts.name}</Text>
            )}
          </View>
        </View>

        <View style={styles.ViewInput}>
            <View style={styles.ViewText2}>
            <Text>Tell : </Text>

            </View>
          <View style={styles.ViewTextInput2}>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={texts.Tell}
                onChangeText={(newText) => handleChangeText('Email', newText)}
              />
            ) : (
              <Text style={styles.text}>{texts.Tell}</Text>
            )}
          </View>
        </View>

        <View style={styles.ViewInput}>
            <View style={styles.ViewText2}>
            <Text>Email : </Text>

            </View>
          <View style={styles.ViewTextInput2}>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={texts.Email}
                onChangeText={(newText) => handleChangeText('email', newText)}
              />
            ) : (
              <Text style={styles.text}>{texts.Email}</Text>
            )}
          </View>
        </View>

        <View style={styles.ViewButton}>
          {isEditing ? (
            <Button title="บันทึก" onPress={handleSavePress} color="black" style={styles.Button} />
          ) : (
            <Button title="แก้ไข" onPress={handleEditPress} color="black" />
          )}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    HeaderPic:{
        height:180,
        width:'100%',
    },
    ViewText:{
        paddingVertical:20,
        alignItems:'center',

    },
    TextProfile:{
        fontWeight:'bold'
    },
    ViewInput:{
        marginHorizontal:20,
        flexDirection:'row',
        backgroundColor:'white',
        marginVertical:20,
        borderRadius: 10,
        width:320,
        height:40,
        paddingHorizontal:10

    },
    ViewText2:{
    justifyContent: 'center',

    },
    ViewTextInput2:{
    justifyContent: 'center',

    },
    ViewButton:{
        marginHorizontal:21,
        width:320

    },
    Button:{
    }

});
export default Profile;