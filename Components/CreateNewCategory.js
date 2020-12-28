import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react";


let showColors=true;

const CreateNewCategory =(props)=>{

    const [text, setText]=useState("");
    const [isSelected, setisSelected]=useState([{id:1, name:"Color", selected:true},{id:2, name:"Image", selected:false}]);
  
    
    const onSelectButon = (item) => {
        let updatedState = isSelected.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        
        );
        setisSelected(updatedState);
        item.name==="Color"?showColors=true:showColors=false;
        console.log("showColors", showColors);
      
        console.log("updatedstate:", updatedState)
        console.log("isSelected", isSelected);
        // updatedState.map(item=>{item.selected===true?props.newItem.Notification=item.value+"  "+item.reminder:""});
      
      };


    return(<View style={styles.container}>
            <LinearGradient
        colors={[ '#0099CC', '#87CEEB', '#BFEFFF']}
        style={styles.gradientDesign}>
            <View style={styles.designCategory}>
                <Text style={styles.textstyle}>New Category</Text>
                <TextInput value={text} onChangeText={text=>setText(text)} style={styles.textInputStyle} placeholder="Category name"/>
                <View style={{flexDirection:"row"}}>
                     {isSelected.map(item=><TouchableOpacity style={item.selected===true?[styles.buttonstyle,{marginLeft:"14%", backgroundColor:"navy"}]:[styles.buttonstyle,{marginLeft:"14%", backgroundColor:"white"}]} onPress={()=>{onSelectButon(item)}}><Text style={item.selected===true?[styles.btnNameStyle,{color:"white"}]:[styles.btnNameStyle,{color:"navy"}]}>{item.name}</Text></TouchableOpacity>)}
                     
                </View>
               
               <View>
                   {showColors===true?
               <View style={{flexDirection:"row"}}>
               <View style={[styles.selectedColorStyle,{backgroundColor:"#2ab7ca"}]}/>
               <View style={[styles.selectedColorStyle,{backgroundColor:"#fe4a49"}]}/>
               <View style={[styles.selectedColorStyle,{backgroundColor:"#005b96"}]}/>
               <View style={[styles.selectedColorStyle,{backgroundColor:"#fe8a71"}]}/>
               <View style={[styles.selectedColorStyle,{backgroundColor:"purple"}]}/>
               <View style={[styles.selectedColorStyle,{backgroundColor:"#f6abb6"}]}/>
                </View>
               
               :<View style={{flexDirection:"row"}}>
                   <Image source={require("./../assets/Landscapes/landscape1.jpg")} style={{height:30, width:30, borderRadius:50}}/>
                   <Image source={require("./../assets/Landscapes/landscape1.jpg")} style={{height:30, width:30, borderRadius:50}}/>
                
                </View>}
               
               </View>
               
                     
              
            </View>
      </LinearGradient>
        </View>)
}

export default CreateNewCategory;

const styles = StyleSheet.create({
    container:{
        height:645,

    },
    designCategory:{
        height:300,
        width:300,
        backgroundColor:"white",
        borderRadius:10,
    },
    gradientDesign:{
        height:645,        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputStyle:{
        height:30,
        width:220,
        borderStyle:"solid",
        borderBottomWidth:1,
        borderBottomColor:"black",
        marginTop:"5%",
        marginLeft:"14%",
    },
    textstyle:{
        fontSize:18,
        fontWeight:"bold",
        color:"navy",
        marginLeft:"14%",
        marginTop:"6%",
    },
    buttonstyle:{
        height:35,
        width:80,
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:1,
        borderRadius:20,
        marginTop:"6%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNameStyle:{
        color:"white",
    },
    selectedColorStyle:{
        height:30,
        width:30,
        borderRadius:50,
        backgroundColor:"red",
        marginLeft:"5%",
        marginTop:"10%",
    },
});