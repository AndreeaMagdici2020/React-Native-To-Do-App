import React from "react";
import {View, Text, StyleSheet, ImageBackground, FlatList} from "react-native";


const CardItem =(props)=>
{   
        return (<View style={styles.container}>
           <Text style={{ textAlign:"center"}}>{props.item.title}</Text>
           <Text style={{ textAlign:"center"}}>{props.item.Date}</Text>
           <Text style={{ textAlign:"center"}}>{props.item.Begin}</Text>
            </View>)
            
};

export default CardItem;
const styles= StyleSheet.create({

  container:{ 
    backgroundColor:"white",
    borderWidth:1,
    borderColor:"#D0D0D0",
    marginBottom:10,
    height:80,
    marginTop:10,
    borderRadius:10,
    width:300,
   shadowColor:"grey",
   shadowOffset: { width: 0, height: 5 },
   shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 4,
  }
})