import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from "react-native";


const ImportantTasksList = (props)=>{
let duplicate=props.items;
console.log("duplicate este", duplicate);

 const onDelete=(items, item)=>{
   let index=items.indexOf(item);
   console.log("index este", index);
   console.log("lista veche este:", items);
   items=items.splice(index,1);
   console.log("noua lista este:", items);
 };

    return (<View style={styles.container}>
        <ScrollView>
        {duplicate.map(item=>item.TaskPriority==="high"||item.TaskPriority==="High"? <View key={item.id} style={styles.item}>

                                                            <TouchableOpacity onPress={()=>{console.log("edit")}}><Image source={require("./../assets/icons8edit.png")} style={styles.editIcon}/></TouchableOpacity>
                                                            <Text style={styles.text}>{item.title}</Text>
                                                             <TouchableOpacity onPress={()=>{console.log("indexul lui item", duplicate.indexOf(item));duplicate.splice(duplicate.indexOf(item),1)}}><Image source={require("./../assets/icons8trash.png")} style={styles.trashIcon}/></TouchableOpacity>
                                                            </View>
                                                            
                                                         :<Text></Text>)}
     </ScrollView>  
     </View>)
}

export default ImportantTasksList;

const styles=StyleSheet.create({

    container:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems: 'center',
    },
    item:{
        height:80,
        width:300,
        backgroundColor:"#F8EFEF",
        borderRadius:5,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems: 'center',
        margin:5,
    },
    editIcon:{
        width:35,
        height:35,
    },
       trashIcon:{
        width:30,
        height:30,
    },
    text:{
        fontSize:16,
        color:"#123456",
        
    },

})