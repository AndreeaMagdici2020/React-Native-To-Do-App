import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";

import CardItem from "../Components/CardItem.js";


const ItemList = (props)=>{
console.log("stored data din ItemList:", props);
let today=new Date();

console.log("***Today",today);
console.log(today.toISOString());
console.log("here!!",today.toISOString().slice(0,10));


const list=props.items;

    return(<View style={styles.container}>
                <ScrollView>
                  {/* {props.items.map(item=><CardItem item={item} key={item.id}/>)}   */}
                  {list.filter(item=>item.Date===today.toISOString().slice(0,10))
                  .map((item)=><CardItem item={item} key={item.id}/>)}  

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