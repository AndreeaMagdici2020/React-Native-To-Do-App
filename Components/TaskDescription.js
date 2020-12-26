import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, ScrollView } from 'react-native';


const TaskDescription = (props) => {
  const [value, onChangeText] = useState('    Say more about your task');
  const [focused, setFocused]= useState(false);
  let txtdescription;

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor:"white",

        flexDirection:"row",
      }}>
          <Image source={require("./../assets/textico.png")} style={styles.imgStyle}/>
    <TextInput
        multiline={true}
        editable={true}
        maxLength={150}
        numberOfLines={4}
        onChangeText={text => {onChangeText(text); txtdescription=text;console.log("txtdescription", txtdescription);props.newItem.Description=txtdescription}}
        value={value}
        style={focused===true?styles.textInputStyleOnFocus:styles.textInputStyle}
        focusable
        onFocus={()=>{onChangeText("");setFocused(true)}}
      /> 
    </View>
  );
}

export default TaskDescription;
const styles=StyleSheet.create({
    textInputStyle:{
        borderStyle:"solid",
        borderWidth:2,
        borderColor:"#B8B8B8",
        backgroundColor:"white",
        borderRadius:15,
        marginBottom:10,
        marginLeft:60,
        width:235,
        height:100,
    },
    textInputStyleOnFocus:{
        borderWidth:1,
        borderColor:"grey",
        borderStyle:"solid",
        backgroundColor:"white",
        borderRadius:15,
        marginBottom:10,
        marginLeft:60,
        width:200,
        height:100,
        shadowColor: "#000066",
        shadowOffset:{
        width: 1,
        height: 7,
        },
        shadowOpacity: 0.9,
        shadowRadius: 9.51,
        elevation: 15,

    },
    imgStyle:{
        width:50,
        height:50,
    }
})