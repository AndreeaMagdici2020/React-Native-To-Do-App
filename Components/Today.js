import React from "react";
import {View, Text, ScrollView, StyleSheet, Image, StatusBar, ImageBackground, TouchableOpacity} from "react-native";
import moment from "moment";
import ItemList from "../Components/ItemList.js";
import AsyncStorage from '@react-native-community/async-storage';

const Today =(props)=>{
    let storedData;
      const getInformation = async ()=>{
          try{
            const jsonValue = await AsyncStorage.getItem('@NewItemsList');
            const data=JSON.parse(jsonValue) ;
            return data;
          } catch(e){};
       };

      

      //store new data
      (async function(){
          storedData = await getInformation();
         console.log('Woo done- storedData!', storedData);
         //props.route.params.items=storedData;
         console.log("state:",  props.route.params.items);
        })();
//useEffect
React.useEffect(() => {
    if (props.route) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log("props.route:", props.route);
   
    }
  }, [props.route.params.items]);


 
        return (  <View style={{margin:0, height:645}}>
            <ImageBackground source={require("../assets/beach.png")} style={{ flex: 1,resizeMode: "cover", justifyContent: "center"}}>
                <View style={{flex: 1, flexDirection: 'row', height:200}}>
                        <Text style={{color:"#001a66", fontSize:30, fontWeight:"bold", marginLeft:"7%",  marginTop:"20%"}}>Today</Text> 
                        <Text style={styles.textSecondary}>{moment().format('llll')}</Text>
               </View>
              
         <ItemList items={props.route.params.items} storedData={storedData}/>
                 {/* {props.route.params.items.map(item=><Text key={item.id}>{item.name}</Text>)}  */}
                 {/* {props.route.params.items.map(item=><CardItem item={item} key={item.id}/>)} */}
                <TouchableOpacity onPress={() =>props.navigation.navigate("CreateNewTask",{items:props.route.params.items})}><Image source={require("../assets/addIcon.png")} style={styles.addButton}/></TouchableOpacity>
           </ImageBackground>
         
               </View>)
        
    
};

export default Today;

const styles= StyleSheet.create({
 

    textSecondary:{
        color:"#001a66", 
        fontSize:18, 
        fontWeight:"bold", 
        marginTop:"10%",
    },
    addButton:{
        height:50, 
        width:50,
        marginTop:'10%',
        marginLeft:'80%',
        marginBottom:'10%',
    }
})