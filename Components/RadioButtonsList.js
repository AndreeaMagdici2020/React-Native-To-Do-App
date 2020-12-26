import React from "react";
import {useState} from "react";
import {Text,View, StyleSheet, TouchableOpacity} from "react-native";


const RadioButtonsList = (props)=>{
    const [isSelected, setisSelected]=useState([{id:1, value:15, reminder: "minutes", selected:false},{id:2, value:30,reminder:"minutes", selected:false},{id:3, value:1, reminder:"hour", selected:false}]);
    
    const onRadioBtnClick = (item) => {
        let updatedState = isSelected.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        );
        setisSelected(updatedState);
        console.log("updatedstate:", updatedState)
        console.log("isSelected", isSelected);
        updatedState.map(item=>{item.selected===true?props.newItem.Notification=item.value+"  "+item.reminder:""});
        console.log("Reminderul este:",props.newItem.Notification );
      
      };
    return (<View>
        
        {isSelected.map(item=> <View style={{flexDirection:"row"}} key={item.id}><TouchableOpacity style={styles.radioButtonStyle} onPress={()=>{onRadioBtnClick(item)}}>{item.selected===true?<View style={styles.selectedItemStyle}/>:null}</TouchableOpacity><Text style={styles.textStyle}>{item.value} {item.reminder}</Text></View>)}
            </View>)
};

export default RadioButtonsList;
const styles = StyleSheet.create({
radioListStyle:{
    flexDirection:"column",
    backgroundColor:"#e5fbe5",
},
radioButtonStyle:{
    height:20,
    width:20,
    margin:7,
    borderRadius:50,
    backgroundColor:"blue",
    alignItems: "center",
    justifyContent: "center",
},
selectedItemStyle:{
    height:10,
    width:10,
    borderRadius:50,
    backgroundColor:"white",
},
notSelectedItemStyle:{
    height:10,
    width:10,
    borderRadius:50,
    backgroundColor:"blue",
},
notSelectedItemStyle:{
    height:10,
    width:10,
    borderRadius:50,
    backgroundColor:"white",
},
textStyle:{
    fontSize:16,
    color:"navy",
    marginTop:5,

},
});