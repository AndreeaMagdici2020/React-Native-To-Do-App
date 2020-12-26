import * as React from 'react';
import {useState} from 'react';
import { Button, View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity, Platform, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


const  SignUp=()=> {
    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [passconfirmed, setPassconfirmed]=useState("");
    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue);
        
        } catch (e) {
          // saving error
        }
      }
    return (
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center',  }}>
        
        <View style={{width:"100%", height:150, backgroundColor:"#4FB9E7"}}><Text style={{color:"white", fontSize:18, fontWeight:"bold", textAlign:"center",}}>SignUp</Text>
        <View style={{width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 275,
          borderRightWidth: 90,
          borderBottomWidth: 50,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: '#F0F0F0', position:"absolute", top:100, left:0, 
        }}></View>
        </View>
        <Image style={styles.signupimg} source={require("./../assets/logoDoto.png")}/>
        <Text style={{fontSize:20, fontWeight:"bold", color:"#123456", textAlign:"left", position:"absolute", top:200, left:40}}>Create your Account</Text>
        <View style={{marginTop:100}}>
          <TextInput placeholder={"Your username"} style={styles.inputstyle} value={username} onChangeText={username=>setUsername(username)}/>
          <TextInput placeholder={"Your email"} style={styles.inputstyle} value={email} onChangeText={email=>setEmail(email)}/>
          <TextInput placeholder={"Your password"} style={styles.inputstyle} value={password} onChangeText={password=>setPassword(password)}/>
          <TextInput placeholder={"Confirm your password"} style={styles.inputstyle} value={passconfirmed} onChangeText={passconfirmed=>setPassconfirmed(passconfirmed)}/>
          <TouchableOpacity style={styles.buttonstyle} onPress={()=>{const userData={username:username, email:email, password:password, passconfirmed:passconfirmed };storeData(userData)}}><Text style={styles.textstyle}>SignUp</Text></TouchableOpacity>
  
        </View>
        <View/>
      </View></ScrollView>
    );
  }


export default SignUp;
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS==="android"?StatusBar.currentHeight:0,
      },
    logo:{width:200, height:200, },
    dotoText:{fontWeight:"bold",fontSize:25, color:"#123456", marginTop:100, textAlign:"center"},
    inputstyle:{width:300, height:40, padding:10, borderWidth:1, borderColor:"#A9A9A9", marginBottom:10, borderRadius:10, backgroundColor:"#F0F0F0", marginBottom:20},
    textstyle:{color:"white", fontFamily:"Roboto", fontSize:18, fontWeight:"bold", textAlign:"center"},
    buttonstyle:{borderRadius:10, width:300, height:40, backgroundColor:"#123456",  justifyContent:"center"},
    signupbtn:{fontWeight:"bold", color:"#123456", fontSize:15, marginLeft:10},
    topview:{width:300, height:300, backgroundColor:"blue"},
    signupimg:{width:150, height:150, position:"absolute", left:180, top:40,}
      
    });