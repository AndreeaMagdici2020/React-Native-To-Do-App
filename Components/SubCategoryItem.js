import React,{useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

const SubCategoryItem = (props)=>{
    const [checked, setChecked]=useState(false);
    return(  <View style={styles.container}>
                   <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:16, marginTop:12}}>{props.item.name}</Text>
                            <TouchableOpacity style={styles.checkbox} onPress={()=>{setChecked(!checked)}}>{checked===true?<Image style={{height:20, width:20, marginLeft:2, marginTop:2}} source={require("./../assets/icons8checkmark.png")}></Image>:<Text></Text>}</TouchableOpacity>
                  </View>
            </View>)
};

export default SubCategoryItem;
const styles=StyleSheet.create({
    container:{
        flexDirection:"row", 
        justifyContent:"flex-end"
    },
    checkbox:{
            height:25, 
            width:25, 
            marginLeft:10, 
            marginTop:10, 
            borderStyle:"solid", 
            borderColor:"black", 
            borderWidth:1, 
            borderRadius:5
  },
});