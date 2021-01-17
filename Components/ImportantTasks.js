import React from "react";
import {Text, View, Image, StyleSheet} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ImportantTasksList from "./ImportantTasksList.js";

const ImportantTasks =(props)=>{
    return (<View>
                <LinearGradient
                // Background Linear Gradient
                colors={['#fb9692', 'transparent',]}
                style={styles.background}
                />  
                <ImportantTasksList items={props.route.params.items}/>
   
        </View>)
}

export default ImportantTasks;

const styles = StyleSheet.create({

background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    minHeight: 600,
  },

})
