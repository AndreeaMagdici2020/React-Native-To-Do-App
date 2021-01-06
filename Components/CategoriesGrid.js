import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {useState} from "react";
import { useNavigation } from '@react-navigation/native';
 
 const CategoriesGrid=(props)=> {
  const [items, setItems] = useState(props.items);
  const navigation = useNavigation();

  console.log("din categ grid:", props.items.map(item=>item.image));
  return (
<View>
    <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={()=>{navigation.navigate("CreateNewCategory",{categories:props.items})}} style={styles.addBtn}>
                <Image style={{height:25, width:25, marginLeft:30, marginTop:10}} source={require("./../assets/plus.png")}/>
          </TouchableOpacity>
          <Text style={{fontSize:18, marginTop:17, marginLeft: 50}}>Add new category</Text>
    </View>
    <FlatGrid
    itemDimension={130}
    data={items}
    style={styles.gridView}
    // staticDimension={300}
    // fixed
    spacing={10}
    renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.backgroundColor }]}>
       
        <ImageBackground style={styles.imagestyle} source={item.image}>
         <Text style={item.image?{color:"black", fontSize:18, fontWeight:"bold"}:{color:"white", fontSize:18, fontWeight:"bold"}}>{item.categoryName}</Text>
        </ImageBackground>
      
            </View>
             )}/></View>
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
  imagestyle:{
  flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding:10,
    borderRadius:15,
},
addBtn:{
  height:50, width:50, padding:10,
}
});