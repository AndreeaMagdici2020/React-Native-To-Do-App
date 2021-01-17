import React, { useState } from 'react';
import {View, Text, StyleSheet, ImageBackground, FlatList, Image} from "react-native";
import { ListItem, Avatar } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'


const CardItem =(props)=>{   
  
  const [checked, setChecked]=useState(true);
        return (<View >
           {/* <Text style={{ textAlign:"center"}}>{props.item.title}</Text>
           <Text style={{ textAlign:"center"}}>{props.item.Date}</Text>
           <Text style={{ textAlign:"center"}}>{props.item.Begin}</Text> */}
           <ListItem  bottomDivider style={{width:330,}}>
        <ListItem.Content style={{flexDirection:"row", justifyContent:"flex-start"}}>
        <View style={{maxWidth:"20%",marginRight:10 }}>
        <CheckBox
              checkedIcon={<Image source={require('./../assets/icons8checked.png')} style={styles.checkbox}/>}
              uncheckedIcon={<Image source={require('./../assets/icons8unchecked.png')} style={styles.checkbox} />}
              checked={!checked}
              onPress={() =>{setChecked(!checked);console.log("checked is", checked);props.item.checked=checked; console.log("props.item.checked", props.item)}}/>
          </View>
          <View style={{flexDirection:"column", maxWidth:"90%", }}>
          <ListItem.Title>{props.item.title}</ListItem.Title>
          <ListItem.Subtitle>{props.item.Date}</ListItem.Subtitle>
          </View>
        </ListItem.Content>
      </ListItem>
            </View>)
            
};

export default CardItem;
const styles= StyleSheet.create({

  checkbox:{
    height:30, 
    width:30
  },
})