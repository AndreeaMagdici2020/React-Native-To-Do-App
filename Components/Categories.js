import React from "react";
import {View, Text,StyleSheet, ScrollView} from "react-native";
import CategoriesGrid from "./CategoriesGrid.js";


const Categories = (props)=>{

    return (<View style={styles.container}>
                 <CategoriesGrid items={props.route.params.categories}/>
            </View>)
};

export default Categories;

const styles=StyleSheet.create({
    container:{
        minHeight:645,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    categoryBox:{
        height:100,
        width:100,
        margin:7,
        borderRadius:7,
        borderStyle:"solid",
        borderWidth:1.5,
        borderColor:"grey",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },
    gridView: {
        marginTop: 10,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
      },
})