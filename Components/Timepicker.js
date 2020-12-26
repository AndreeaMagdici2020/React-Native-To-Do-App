import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  View, Button, ViewBase
} from "react-native";
import moment from "moment";


const TimePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
// let currentDate=moment().format('YYYY');
//   let nextDay=moment(currentDate).add(1, 'day').format('LLL');
//   let prevDay=moment(currentDate).subtract(1, 'day').format('LLL');


  const [date, setDate]=useState(moment().calendar()); 
  const [count, setCount] = useState(1);
  const [month, setMonth]=useState(moment().format('MMMM'));
  const [countMonth, setCounMonth]= useState(1);
  const [day, setDay]=useState(moment().format('ll'));
  const [countDay, setCountDay]=useState(1);


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
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text>Year:{date}</Text>
            
            <TouchableOpacity onPress={()=>{setCount(count + 1);setDate(moment().add(count,'day').calendar())}}><Image source={require("../assets/next.png")} style={{width:50, height:50}}/></TouchableOpacity>
            </View>
            {/* <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text>Month:{month}</Text>
                <TouchableOpacity onPress={()=>{setCounMonth(countMonth + 1);setMonth(moment().add(countMonth,'month').format('MMMM'))}}><Image source={require("../assets/next.png")} style={{width:50, height:50}}/></TouchableOpacity>
            </View> */}
            {/* <View tyle={{flexDirection:'row', flexWrap:'wrap'}}>
            <Text>Day:{day}</Text>
                <TouchableOpacity onPress={()=>{setCountDay(countDay + 1);setDay(moment().add(countDay,'day').format('ll'))}}><Image source={require("../assets/next.png")} style={{width:50, height:50}}/></TouchableOpacity>
            </View> */}
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>OK, Date selected!</Text>
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
        <Text style={styles.textStyle}>Pick a Date</Text>
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    height:400,
    width:250,
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
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default TimePicker;