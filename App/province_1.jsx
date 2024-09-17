import * as React from 'react';
import { Card, Text,Searchbar } from 'react-native-paper';
import { View,StyleSheet } from 'react-native';


const province_1 = () => (
  <View >
    <View style={styles.PicHeader}>
        
      <Card>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    
    </View>
    <View style={styles.container}>
      <Card style={styles.Card}>
        <Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Text variant="titleLarge">SongKhla</Text>
          <Text variant="bodyMedium">144 สถานที่ท่องเที่ยว</Text>  
        </Card.Content>
      </Card>

      <Card >
        <Card.Content>
          <Card.Cover source={{ uri: 'https://img.12go.com/0/fit/1024/0/ce/1/plain/s3://12go-web-static/static/images/upload-media/4184.jpeg' }} />
          <Text variant="titleLarge">Satun</Text>
          <Text variant="bodyMedium">159 สถานที่ท่องเที่ยว</Text>
        </Card.Content>
      </Card>

      <Card>
      <Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Text variant="titleLarge">Phuket</Text>
        <Text variant="bodyMedium">289 สถานที่ท่องเที่ยว</Text>
      </Card.Content>
    </Card>

    
    </View>
    
  </View>

  
);

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    padding: 2,
    margin: 10,
    
  },
  Card:{
  },
  PicHeader:{
    justifyContent: 'space-between',
    padding: 2,
    margin: 10,
  }


})

export default province_1;