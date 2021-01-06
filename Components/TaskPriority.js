
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
let priority="";
const TaskPriority = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [highPriority, setHighPriority]= useState(false);
  const [mediumPriority, setMediumPriority]= useState(false);
  const [lowPriority, setLowPriority]= useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Task priority</Text>
            <View style={{flexDirection:"row"}}>
              <View style={{flexDirection:"column"}}>
                  <TouchableOpacity onPress={()=>{priority="high"; setHighPriority(!highPriority)}} style={highPriority===true?styles.StyleOnPress:styles.StyleonNotPressed}><Image source={require('./../assets/redStar.png')} style={styles.starStyle}/></TouchableOpacity>
                  <TouchableOpacity onPress={()=>{priority="medium"; setMediumPriority(!mediumPriority)}} style={mediumPriority===true?styles.StyleOnPressMedium:styles.StyleonNotPressed}><Image source={require('./../assets/yellowStar.png')} style={styles.starStyle}/></TouchableOpacity>
                  <TouchableOpacity onPress={()=>{priority="low"; setLowPriority(!lowPriority)}} style={lowPriority===true?styles.StyleOnPressLow:styles.StyleonNotPressed}><Image source={require('./../assets/greenStar.png')} style={styles.starStyle}/></TouchableOpacity>
                  {/* <Image source={require('./../assets/greyStar.png')} style={styles.starStyle}/> */}
                 
              </View>
              <View style={{flexDirection:"column"}}>
             
                  <Text style={{fontSize:16,marginLeft:25, marginTop:19}}>High</Text>
                  <Text style={{fontSize:16,marginLeft:25, marginTop:35}}>Medium</Text>
                  <Text style={{fontSize:16,marginLeft:25, marginTop:35}}>Low</Text>
                  {/* <Text style={styles.priorityNameStyle}>None</Text> */}
              </View>
              </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#5cdb5c" }}
              onPress={() => {
                setModalVisible(!modalVisible);
                props.newItem.TaskPriority=priority;
                console.log("newItem", props.newItem)
              }}
            >
              <Text style={styles.textStyle}>Save</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
       <Image source={require('./../assets/greyStar.png')} style={styles.starStyle}/>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  priorityNameStyle:{

    fontSize:16,
    marginLeft:25,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 12,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight:"bold",
    fontSize:18,
  },
  starStyle:{
    height:40,
    width:40,
},
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
});

export default TaskPriority;