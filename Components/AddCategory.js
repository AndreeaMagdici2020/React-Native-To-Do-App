import React, { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, Image, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';
//navigation prop is not passed in to all components; only screen components receive this prop automatically!I need to use useNavigation() hook!!!

const AddCategory = (props)=>{
    const navigation = useNavigation();
    const [selectedCategory,setSelectedCategory]=useState(props.categories);
 
    const onSelectCategory = (item) => {
        let updatedState = selectedCategory.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        
        );
        setSelectedCategory(updatedState);
      
        console.log("selectedCategory", selectedCategory);
        console.log("updatedstate:", updatedState);
      
      
      };


    return(<View style={styles.container}>
          
            <View style={styles.categoriesContainer}>
                <Text style={{fontSize:15.6, marginLeft:5, marginTop:10, fontWeight:"bold", color:"navy"}}>Category:</Text>
            
            <ScrollView horizontal={true}> 
           {/* {selectedCategory.map(item=><TouchableOpacity key={item.id}style={item.selected===true?[styles.categoryButton,{backgroundColor:item.backgroundColor,borderStyle:"solid", borderWidth:2,borderColor:"navy"}]:[styles.categoryButton,{backgroundColor:item.backgroundColor}]}onPress={()=>{onSelectCategory(item);props.newItem.Category=item.name; console.log("props.newItem.Category", props.newItem.Category)}}><Text style={styles.text}>{item.name}</Text></TouchableOpacity>)} */}
            {props.categories.map(item=><TouchableOpacity key={item.id} style={styles.categoryButton} onPress={()=>{onSelectCategory(item);props.newItem.Category=item.categoryName; console.log("props.newItem.Category", props.newItem.Category)}}><Text style={{color:"black"}}>{item.categoryName}</Text></TouchableOpacity>)}
            </ScrollView></View>
            
            <TouchableOpacity style={styles.addbutton} onPress={()=>navigation.navigate('CreateNewCategory',{newItem:props.newItem})}><Image source={require("./../assets/plusIc.png")} style={styles.image}/><Text>Add category</Text></TouchableOpacity>
          </View>)
}
export default AddCategory;


const styles=StyleSheet.create({
    container:{
        height:130,
        backgroundColor:"white",
    },
    categoriesContainer:{
        flexDirection:"row",
    },
    button:{
        height:40,
        width:80,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"blue",
        borderRadius:15,
        marginTop:5,
        marginLeft:15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    categoryButton:{
        height:40,
        width:80,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#9370DB",
        borderRadius:15,
        marginTop:5,
        marginLeft:10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000066",
        shadowOffset:{
        width: 2,
        height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 13,
        elevation: 15,
        
    },
    
   
    addbutton:{  
        height:40,
        width:160,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"orange",
        borderRadius:15,
        marginTop:17,
        marginLeft:130,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#FFFFE5",
        shadowColor: "#000066",
        shadowOffset:{
        width: 2,
        height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 13,
        elevation: 15,
    },
    image:{
        height:30,
        width:30,
        marginRight:5,
    },
    text:{
        color:"white", 
        fontWeight:"bold", 
        fontSize:16,
    },
        
})