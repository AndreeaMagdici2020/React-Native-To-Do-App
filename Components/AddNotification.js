
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

import RadioButtonsList from "./RadioButtonsList.js";


const AddNotification = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
 
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add notification</Text>
            <View style={{flexDirection:"row"}}>
            <RadioButtonsList newItem={props.newItem}/>
              <View style={{flexDirection:"column"}}>
              </View>
              <View style={{flexDirection:"column"}}>
                  {/* <Text style={styles.priorityNameStyle}>None</Text> */}
              </View>
              </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#5cdb5c" }}
              onPress={() => {
                setModalVisible(!modalVisible);
                // props.newItem.TaskPriority=priority;
                // console.log("newItem", props.newItem)
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
       <Image source={require('./../assets/notification.png')} style={styles.starStyle}/>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  priorityNameStyle:{
    margin:16,
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
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginLeft:5,
    marginRight:20
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
    height:50,
    width:50,
},

});

export default AddNotification;