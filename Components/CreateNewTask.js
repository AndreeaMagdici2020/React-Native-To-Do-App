import React from "react";
import {View, ScrollView, StyleSheet,  TextInput, Button, Image, TouchableOpacity, Text} from "react-native";
import {useState} from "react";
// import TimePicker from "../Components/Timepicker.js";
import Calendar from "../Components/Calendar.js";
import AsyncStorage from '@react-native-community/async-storage';
import TaskPriority from "./TaskPriority.js";
import AddNotification from "./AddNotification.js";
import TaskDescription from "./TaskDescription.js";
import AddCategory from "./AddCategory.js";


const  CreateNewTask =(props)=>{
    let initialDate=new Date();
    let initialDateStr=initialDate.toISOString()
    const [text, setText] = useState('Insert the Title');//hook for text input
    let newTask={id:Math.random().toString(36).substr(2, 9),title:text, Date:initialDateStr.slice(0,initialDateStr.indexOf("T")), Begin:"", End:"", Notification:"", Description:"", Category:"", TaskPriority:"none" };
    //template object for the new tasks

     const storeData = async (value) => {
        try {
           const jsonValue = JSON.stringify(value)
           console.log(jsonValue);
           await AsyncStorage.setItem('@NewItemsList', jsonValue);
        
         } catch (e) {
           // saving error
         }
       }

        //clear local storage
        const removeItemValue = async()=> {
            try {
                await AsyncStorage.removeItem('@NewItemsList');
                return true;
            }
            catch(exception) {
                return false;
            }
        }
    
        // (async function(){
        //        await removeItemValue('@NewItemsList');
        //      })();
const addNewTask=(newTask)=>{
       
 props.route.params.items.push(newTask);
 storeData(props.route.params.items);

    }

    React.useEffect(() => {
         console.log(props.route.params.items); 
      }, []);
      const onPress = () => {console.log("Button presed")};

return(<ScrollView style={{backgroundColor:"white"}}>
        <View>

            <View style={styles.taskDetailes}> 
           <View style={{flexDirection:'row', flexWrap:'wrap'}}> 
            <TextInput
            style={{ height: 40, borderColor: '#123456', borderBottomWidth: 1, fontSize:20, backgroundColor:"white",borderTopLeftRadius:15, width:300,marginTop:5, marginLeft:5, marginBottom:5 }}
            onChangeText={text => {setText(text); console.log("text:", text);}}
            value={text}/>
           </View>
            <View><Calendar newItem={newTask}/></View>

            <View style={{height:100, justifyContent:"flex-start", flexDirection:"row"}}>
                <AddNotification newItem={newTask}/>
                <Text style={{marginRight:130, fontSize:18, marginTop:50}}>Add notification</Text>
            </View>
            <View style={styles.taskImportance}>
                <Text style={{color:"navy", fontWeight:"bold", fontSize:15.7, marginTop:30, marginLeft:5, marginRight:120}}>Select task priority</Text>
               
                <TaskPriority newItem={newTask}/>
            </View>
            <TaskDescription newItem={newTask}/>
            <AddCategory/>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={styles.saveButton} onPress={() =>{  (async function(){
               await removeItemValue('@NewItemsList');
             })();addNewTask(newTask); console.log(props.route.params.items);props.navigation.navigate("Today", {items:props.route.params.items});console.log("hello"); }}><Text style={{color:"white", fontSize:20}}>Save</Text></TouchableOpacity>
           
           <TouchableOpacity style={styles.cancelButton} onPress={()=>{props.navigation.navigate("Today")}}><Text style={{color:"#123456", fontSize:20,}}>Cancel</Text></TouchableOpacity>
           </View>

             </View>
    
             </View> 
        </ScrollView>)
    
};

export default CreateNewTask;

const styles=StyleSheet.create({
    taskDetailes:{
        backgroundColor:"white",
        height:645,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:5,
    },
    taskImportance:{
        backgroundColor:"white",
        height:80,
        flexDirection:'row', flexWrap:'wrap',
        justifyContent:'flex-end',
    }, 
    button:{
        width:100,
        color:"white",
    },
    starStyle:{
        height:50,
        width:50,
    },
    saveButton:{
        height:40, 
        width:"49%",
        backgroundColor:"#123456",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        marginLeft:"0.7%",
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"black",
        borderRadius:5,
    },
    cancelButton:{
        height:40, 
        width:"49%",
        backgroundColor:"white",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
        marginLeft:"0.5%",
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#123456",
        borderRadius:5,
    },
  
});