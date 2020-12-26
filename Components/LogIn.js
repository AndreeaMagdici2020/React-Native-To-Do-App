import React, { useState } from 'react';
import {TextInput, View, StyleSheet, Text, TouchableOpacity, Alert, Image, Button} from "react-native";
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Login=(props)=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 console.log("!!!here:", useNavigation.routes);

  return (
        <View style={styles.container}>
            <Text style={styles.welcometext}>Welcome back!</Text>
            <Image style={styles.logo} source={require("./../assets/logoDoto.png")}/>
            <TextInput placeholder={"Email"} value={email} onChangeText={email=>setEmail(email)} style={styles.inputstyle} />
            <TextInput placeholder={"Password"} secureTextEntry={true} value={password} onChangeText={password=>setPassword(password)} style={styles.inputstyle}/>
            <TouchableOpacity style={styles.buttonstyle}><Text style={styles.textstyle}>Login</Text></TouchableOpacity>
        <   Text>Don't have an account?</Text><TouchableOpacity><Text>SignUp</Text></TouchableOpacity>      
         </View>
  );

}
export default Login;


const styles=StyleSheet.create({

    inputstyle:{width:300, height:40, padding:10, borderWidth:1, borderColor:"#A9A9A9", marginBottom:10, borderRadius:10, backgroundColor:"#F0F0F0"},
    buttonstyle:{borderRadius:10, width:300, height:40, backgroundColor:"#123456",  justifyContent:"center"},
    textstyle:{color:"white", fontFamily:"Roboto", fontSize:18, fontWeight:"bold", textAlign:"center"},
    logo:{width:200, height:200, },
    welcometext:{textAlign:"center", paddingTop:30}, 
    container:{justifyContent:"center",  alignItems:"center"},

})