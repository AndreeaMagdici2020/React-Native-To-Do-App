import React from "react";
import {Text, View, TouchableOpacity, StyleSheet, Image} from "react-native";

const AddCategory = ()=>{
    return(<View style={styles.container}>
          
            <View style={styles.categoriesContainer}>
                <Text style={{fontSize:15.6, marginLeft:5, marginTop:10, fontWeight:"bold", color:"navy"}}>Category:</Text>
                <TouchableOpacity style={styles.buttonHouse}><Text style={styles.text}>House</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonWork}><Text style={styles.text}>Work</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonOther}><Text style={styles.text}>Other</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addbutton}><Image source={require("./../assets/plusIc.png")} style={styles.image}/><Text>Add category</Text></TouchableOpacity>
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
    buttonHouse:{
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
        backgroundColor:"#b87fed",
        shadowColor: "#000066",
        shadowOffset:{
        width: 2,
        height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 13,
        elevation: 15,
        
    },
    buttonWork:{
        height:40,
        width:80,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#285ED5",
        borderRadius:15,
        marginTop:5,
        marginLeft:10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#629DDA",
        shadowColor: "#000066",
        shadowOffset:{
        width: 2,
        height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 13,
        elevation: 15,
        
    },
    buttonOther:{
        height:40,
        width:80,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#e65b00",
        borderRadius:15,
        marginTop:5,
        marginLeft:10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#ff6500",
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