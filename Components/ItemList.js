import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";

import CardItem from "../Components/CardItem.js";

const ItemList = (props)=>{
console.log("stored data din ItemList:", props);

    
    return(<View style={styles.container}>
                <ScrollView>
                  {props.items.map(item=><CardItem item={item} key={item.id}/>)}   
                 {/* {props.storedData.map(item=><CardItem item={item} key={item.id}/>)}   */}
                 {/* {parsedUpdatedList.map(item=><CardItem item={item} key={item.id}/>)}  */}
                </ScrollView>
          </View>)
};
export default ItemList;

const styles=StyleSheet.create({
    container:{
        height:380,
        margin:8,
       alignItems:"center",
    }
})