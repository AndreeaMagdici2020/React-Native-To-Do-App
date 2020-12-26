import React from "react";
import {View, Text, ScrollView, StyleSheet, ImageBackground} from "react-native";
function keyGenerator(){
    const key=Math.round(Math.random*1000000);
    console.log("Key is:", key);
    return key;
};

const CarouselView =(props)=>{

    return (<View style={styles.container}>
            <ScrollView   horizontal={true}>
            {props.items.map(item=> <View  key={Math.round(Math.random()*1000000)} style={styles.cardItem}>
            <ImageBackground  source={require('../assets/bkg2.png')} style={{ flex: 1,resizeMode: "cover", justifyContent: "center"}}>
                <Text style={styles.text}  numberOfLines={2}>{item.title}</Text>
                <Text style={styles.secondarytext} numberOfLines={1}>{item.Date}</Text>
               </ImageBackground>
               
            </View>)}
            
            </ScrollView>
    </View>)
};

export default CarouselView;

const styles = StyleSheet.create({
    container:{height:170, marginTop:2,marginBottom:5, justifyContent: 'center',alignItems: 'center',},
    cardItem:{
        width:130,
        height:160,
        margin:6,
        backgroundColor:"#c6e4ee",
        borderTopLeftRadius:40,
      

    },
    text:{
        textAlign:"center",
        marginTop:3,
        color:"#295684",
        fontWeight:"bold",
    },
    secondarytext:{
        textAlign:"center",
        marginTop:3,
        color:"#295684",
        fontWeight:"normal",
    }
})