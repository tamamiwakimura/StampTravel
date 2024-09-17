import * as React from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import { List } from 'react-native-paper';

const Province_2 = () => (
  
  <View stylestyle={styles.container}>
    <List.AccordionGroup>
      <List.Accordion title="Accordion 3" id="1">
      <List.Item title="Item 2" />
      <List.Item title="Item 2" />
      <List.Item title="Item 2" />
      <List.Item title="Item 2" />
        <List.Accordion title="Bccordion 3" id="2">
      <List.Item title="Item 2" />
      </List.Accordion>
      </List.Accordion>
    <List.Accordion title="Cccordion 3" id="3">

    </List.Accordion>
    </List.AccordionGroup>
    
  </View>

);


const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 2,
    margin: 10,
    
  },
  

})
export default Province_2;