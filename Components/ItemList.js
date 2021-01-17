import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import { ListItem, Avatar } from 'react-native-elements'

import CardItem from "../Components/CardItem.js";


const ItemList = (props)=>{
console.log("stored data din ItemList:", props);
const list=props.items;

    return(<View style={styles.container}>
                <ScrollView>
                  {/* {props.items.map(item=><CardItem item={item} key={item.id}/>)}   */}
                  {list.map((item)=><CardItem item={item} key={item.id}/>)}  
                  {/* {list.map((l, i) => (
      <ListItem key={i} bottomDivider style={{width:300}}>
        <ListItem.Content>
          <ListItem.Title>{l.title}</ListItem.Title>
          <ListItem.Subtitle>{l.title}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))}  */}

                </ScrollView>
          </View>)
};
export default ItemList;

const styles=StyleSheet.create({
    container:{
        height:400,
        margin:8,
       alignItems:"center",

    }
})