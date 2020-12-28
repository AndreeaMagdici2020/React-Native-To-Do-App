import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react";


let showColors=true;

const CreateNewCategory =(props)=>{

    const [text, setText]=useState("");
    const [isSelected, setisSelected]=useState([{id:1, name:"Color", selected:true},{id:2, name:"Image", selected:false}]);
    const [isSelectedColor, setisSelectedColor]=useState([{id:1, name:"#2ab7ca", selected:true},{id:2, name:"#fe4a49", selected:false},{id:3, name:"#005b96", selected:false},{id:4, name:"#fe8a71", selected:false}, {id:5, name:"purple", selected:false}],{id:6, name:"#f6abb6", selected:false});
    const [isSelectedImage, setisSelectedImage]=useState([{id:1, source:"landscape1.jpg", selected:true},{id:2, source:"landscape2.jpg", selected:false},{id:3, source:"landscape3.jpg", selected:false},{id:4, source:"landscape4.jpg", selected:false}, {id:5, source:"landscape5.jpg", selected:false}],{id:6, source:"landscape6.jpg", selected:false});
    
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

      const onSelectColor = (item) => {
        let updatedState = isSelectedColor.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        
        );
        setisSelectedColor(updatedState);

        console.log("isSelectedColor", isSelectedColor);
        console.log("updatedstate:", updatedState)
        
        // updatedState.map(item=>{item.selected===true?props.newItem.Notification=item.value+"  "+item.reminder:""});
      
      };

      const onSelectImage = (item) => {
        let updatedState = isSelectedImage.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        
        );
        setisSelectedImage(updatedState);

        console.log("isSelectedImage", isSelectedImage);
        console.log("updatedstate:", updatedState)
        
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
                     {isSelected.map(item=><TouchableOpacity key={item.id} style={item.selected===true?[styles.buttonstyle,{marginLeft:"14%", backgroundColor:"navy"}]:[styles.buttonstyle,{marginLeft:"14%", backgroundColor:"white"}]} onPress={()=>{onSelectButon(item)}}><Text style={item.selected===true?[styles.btnNameStyle,{color:"white"}]:[styles.btnNameStyle,{color:"navy"}]}>{item.name}</Text></TouchableOpacity>)}
                     
                </View>
               
               <View>
                   {showColors===true?
               <View style={{flexDirection:"row"}}>
                      {isSelectedColor.map(item=><TouchableOpacity key={item.id} style={item.selected===true?[styles.selectedColorStyle,{backgroundColor:item.name,borderStyle:"solid", borderWidth:2.5, borderColor:"red"}]:[styles.selectedColorStyle,{backgroundColor:item.name}]} onPress={()=>{onSelectColor(item)}}></TouchableOpacity>)}
                </View>
               
               :<View style={{flexDirection:"row"}}>
                     {isSelectedImage.map(item=>
                                <TouchableOpacity key={item.id} onPress={()=>{onSelectImage(item)}} style={item.selected===true?{borderRadius:50, borderColor:"red",borderWidth:3, borderStyle:"solid", marginLeft:20, marginTop:25 }:{borderRadius:50, marginTop:25, marginLeft:20, borderColor:"white",borderWidth:1, borderStyle:"solid"}}>
                                    <Image source={require("./../assets/Landscapes/landscape2.jpg")} style={styles.imagestyle}/>
                             </TouchableOpacity>)}
                
                </View>}
               <View style={{flexDirection:"row"}}>
                   <TouchableOpacity style={[styles.btn,{marginLeft:"30%"}]}><Text>Create Category</Text></TouchableOpacity>
                   <TouchableOpacity style={[styles.btn,{marginLeft:"10%"}]}><Text>CANCEL</Text></TouchableOpacity>
               </View>
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
        marginLeft:"8%",
        marginTop:"10%",
    },
    imagestyle:{
        height:30, 
        width:30, 
        borderRadius:50,

    },
    btn:{
        height:40,
        width:100,
        marginTop:"10%",

    },
});