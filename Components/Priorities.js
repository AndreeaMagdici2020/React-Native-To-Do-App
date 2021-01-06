import React from "react";
import {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, Button} from "react-native";
let priority="";
const Priorities=(props)=>{
  const [highPriority, setHighPriority]= useState(false);
  const [mediumPriority, setMediumPriority]= useState(false);
  const [lowPriority, setLowPriority]= useState(false);
  const [priorities, setPriorities]= useState([{id:1, name:"High", source:require("./../assets/redStar.png"), selected:true},{id:2, name:"Medium",source:require("./../assets/yellowStar.png"), selected:false},{id:3, name:"Low",source:require("./../assets/greenStar.png"), selected:false}]);


    const onSelectCategory = (item) => {
        let updatedState = priorities.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        
        );
       console.log("priority is", priority);
        setPriorities(updatedState);
      
        console.log("categories", priorities);
        console.log("updatedstate:", updatedState);
        updatedState.map(item=>item.selected===true?priority=item.name:"");
        console.log("new priority is", priority);
      
      
      };



return(     <View>
                <View style={{flexDirection:"row"}}>
              <View style={{flexDirection:"column"}}>
                  {/* <TouchableOpacity onPress={()=>{priority="high"; setHighPriority(!highPriority); props.route.params.newTask.TaskPriority=priority;console.log("props.newItem.TaskPriority",props.route.params.newTask.TaskPriority)}} style={highPriority===true?styles.StyleOnPress:styles.StyleonNotPressed}><Image source={require('./../assets/redStar.png')} style={styles.starStyle}/></TouchableOpacity>
                  <TouchableOpacity onPress={()=>{priority="medium"; setMediumPriority(!mediumPriority); props.route.params.newTask.TaskPriority=priority;console.log("props.newItem.TaskPriority",props.route.params.newTask.TaskPriority)}} style={mediumPriority===true?styles.StyleOnPressMedium:styles.StyleonNotPressed}><Image source={require('./../assets/yellowStar.png')} style={styles.starStyle}/></TouchableOpacity>
                  <TouchableOpacity onPress={()=>{priority="low"; setLowPriority(!lowPriority); props.route.params.newTask.TaskPriorityy=priority;console.log("props.newItem.TaskPriority",props.route.params.newTask.TaskPriority)}} style={lowPriority===true?styles.StyleOnPressLow:styles.StyleonNotPressed}><Image source={require('./../assets/greenStar.png')} style={styles.starStyle}/></TouchableOpacity> */}
                    {priorities.map(item=>
                    <TouchableOpacity  key={item.id} onPress={()=>{onSelectCategory(item); props.route.params.newTask.TaskPriority=priority; console.log("props.route.params.newTask.TaskPriority",props.route.params.newTask.TaskPriority)}} style={highPriority===true?styles.StyleOnPress:styles.StyleonNotPressed}>
                            <Image source={item.source}  style={styles.starStyle}/>
                    </TouchableOpacity>)}

                 
              </View>
              <View style={{flexDirection:"column"}}>
             
                  <Text style={{fontSize:16,marginLeft:25, marginTop:19}}>High</Text>
                  <Text style={{fontSize:16,marginLeft:25, marginTop:35}}>Medium</Text>
                  <Text style={{fontSize:16,marginLeft:25, marginTop:35}}>Low</Text>
                  {/* <Text style={styles.priorityNameStyle}>None</Text> */}
              </View>
              
              </View>
              <Button onPress={()=>{props.navigation.navigate("CreateNewTask")}} title="SAVE" color="blue" accessibilityLabel="Learn more about this purple button"/>
              </View>)
}
export default Priorities;

const styles= StyleSheet.create({
    StyleOnPress:{
  borderColor:"#ff6a80",
  borderWidth:1,
  borderStyle:"solid",
  borderRadius:5,
  backgroundColor:"#ffe9ec",
  marginBottom:5,
  padding:5,
},
StyleonNotPressed:{
  borderWidth:1,
  borderColor:"#ade6e6",
  borderRadius:5,
  marginBottom:6,
  padding:5,
},
StyleOnPressMedium:{
  borderColor:"#ffdf00",
  borderWidth:1.5,
  borderStyle:"solid",
  borderRadius:5,
  backgroundColor:"#ffffe0",
  marginBottom:5,
  padding:5,
},
StyleOnPressLow:{
  borderColor:"#4ee44e",
  borderWidth:1.5,
  borderStyle:"solid",
  borderRadius:5,
  backgroundColor:"#d2f8d2",
  marginBottom:5,
  padding:5,
},
  starStyle:{
    height:40,
    width:40,
},

})