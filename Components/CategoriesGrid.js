import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {useState} from "react";
 
 const CategoriesGrid=(props)=> {
  const [items, setItems] = useState(props.items)
  return (

    <FlatGrid
    itemDimension={130}
    data={items}
    style={styles.gridView}
    // staticDimension={300}
    // fixed
    spacing={10}
    renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.backgroundColor }]}>
        <Text>{item.categoryName}</Text>
      
            </View>
             )}/>
  );
}
 
export default CategoriesGrid;

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});