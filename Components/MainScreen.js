import React from "react";
import {View, ScrollView, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ImageBackground, FlatList} from "react-native";
import moment from "moment";
import CarouselView from "../Components/CarouselView.js";




class MainScreen extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            items:  [{id:Math.random().toString(36).substr(2, 9),title:"Buy a present for mother", Date:"2020-11-11", Begin:"", End:"", Notification:"", Description:"", Category:"House", TaskPriority:"none" },
            {id:Math.random().toString(36).substr(2, 9),title:"Groom the cat", Date:"2020-11-13", Begin:"", End:"", Notification:"", Description:"", Category:"House", TaskPriority:"none" },
            {id:Math.random().toString(36).substr(2, 9),title:"Send the report", Date:"2020-11-11", Begin:"", End:"", Notification:"", Description:"", Category:"Other", TaskPriority:"high"},
        ],
            categories:[{id:Math.random().toString(36).substr(2,9), categoryName:"House", backgroundColor:"#b87fed",image:"", selected:true},
                        {id:Math.random().toString(36).substr(2,9), categoryName:"Work", backgroundColor:"#629DDA",image:"", selected:false},
                        {id:Math.random().toString(36).substr(2,9), categoryName:"Other", backgroundColor:"#ff6500",image:"", selected:false},  
                        {id:Math.random().toString(36).substr(2,9), categoryName:"Self development", backgroundColor:"green",image:"", selected:false},
                        {id:Math.random().toString(36).substr(2,9), categoryName:"Weding planning", backgroundColor:"pink",image:"",selected:false}, 
                        
        ],
        
    
    }

    }
 
    render(){
        const list =[
            {name:"Today", image_source:"../assets/calendarIcon.png"},
            {name:"Important", image_source:"../assets/startIcon.png"},
            {name:"Categories", image_source:"../assets/categoriesIcon.png"},
        ];
        console.log("state din Mainscreen", this.state.items);
        console.log("!!!STATE.CATEGORIES", this.state.categories);

//useEffect


        return(<ScrollView><View style={styles.container}>
            
            <View style={styles.header}>
            <TouchableOpacity>
                <Image style={{height:100, width:100, margin:5}} source={require('../assets/avataaars.png')}></Image>
            </TouchableOpacity>
            <Image/>
            <Text style={styles.date}> {moment().format('llll')} </Text>
            </View>

            <View>
            <Text style={{marginLeft:20, fontSize:18, color:"#17528D", fontFamily:"Roboto", fontWeight:"bold"}}>Upcoming next week</Text>
            <CarouselView items={this.state.items}/> 
       
            </View>

            <View style={styles.menu}>
                <View style={styles.listItem}>
                    <Image style={styles.image} source={require("../assets/calendarIcon.png")}/>
                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('Today', {items:this.state.items,})}><Text style={styles.categories}>Today</Text></TouchableOpacity>
                </View>

                <View  style={styles.listItem}> 
                <Image style={[styles.image,{height:45, width:45, marginLeft:22, marginTop:5}]} source={require("../assets/icons8list.png")}/>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ToDos",{items:this.state.items, categories:this.state.categories})}}><Text style={[styles.categories,{marginLeft:'35%'}]}>To Do</Text>
                </TouchableOpacity>
                </View>

                <View  style={styles.listItem}>
                    <Image style={styles.image} source={require("../assets/startIcon.png")}/>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ImportantTasks",{items:this.state.items,})}}><Text style={styles.categories}>Important</Text></TouchableOpacity>
                </View>
                <View  style={styles.listItem}> 
                <Image style={{height:45, width:45, marginLeft:22, marginTop:7}} source={require("../assets/categoriesIcon.png")}/>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Categories",{categories:this.state.categories})}}><Text style={styles.categories}>Categories</Text></TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate("CreateNewCategory",{categories:this.state.categories})}}><Image style={{height:25, width:25, marginLeft:30, marginTop:10}} source={require("../assets/plus.png")}/></TouchableOpacity> */}
                     <TouchableOpacity onPress={()=>{this.props.navigation.navigate("CreateNewTask",{items:this.state.items, categories:this.state.categories})}}><Image style={{height:25, width:25, marginLeft:30, marginTop:10}} source={require("../assets/plus.png")}/></TouchableOpacity>
                    <Text style={{fontSize:20, marginTop:10, marginLeft: 60}}> Add new task</Text>
                </View>
            </View>
            </View></ScrollView>)
    };
};

export default MainScreen;

const styles = StyleSheet.create({

    container:{
        //     alignItems: 'center',
        //     justifyContent: 'center',
    },
    avatar:{
        height:100,
        width:100,
        margin:30,
        marginTop:50,
    },
    date:{
        fontSize:15,
        fontWeight:"bold",
        color:"#123456",
        marginTop:50,
    },
    header:{
        flexDirection:"row",
    },
    categories:{
        fontSize:20,
        fontWeight:"bold",
        color:"#17528D",
        marginTop:12,
        marginLeft:50,

    },
   card:{
       width:150,
       height:150,
       borderColor:"#E0E0E0",
       borderStyle:"solid",
       borderRadius:10,
       backgroundColor:"white",
       borderWidth:2,
       margin:10,
      
   },
   menu:{
       height:350,
   },
   listItem:{
       backgroundColor:"white",
       height:60,
       borderColor:"#E0E0E0",
       borderWidth:1,
       paddingBottom:5,
       flexDirection:"row",
   },
   image:{
      height:60,
      width:60,
      marginLeft:15,
   },
   styleOnBtnPress:{
       borderColor:"blue",
       borderStyle:"solid",
       borderWidth:2.5,
       borderRadius:50,
   },
})