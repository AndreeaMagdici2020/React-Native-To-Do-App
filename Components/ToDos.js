import React from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import ExpandedList from "./ExpandedList.js";


const ToDos = (props)=>{

    // const categories=props.route.params.categories;
    // console.log("categories",categories);
    // categories.map(item=>CONTENT.push(new ContentItem(item.id,item.categoryName)));

    return (
        <View style={styles.container}>
            
                
                <ExpandedList categories={props.route.params.categories} items={props.route.params.items}/>
               
        </View>
    )
}

export default ToDos;
const styles=StyleSheet.create({
    container:{
        height:650,
        backgroundColor:"#e5f8ff",
    }
})