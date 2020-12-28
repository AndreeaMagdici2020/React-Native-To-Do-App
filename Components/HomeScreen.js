import * as React from 'react';
import {useState} from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({ navigation })=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getData = async (mail, pass) => {
        var succesfullLogin;
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key');
          const data=JSON.parse(jsonValue) ;
          console.log("data este:", data);
          console.log("emailul  din storage este:", data.email);
          console.log("mailul introdus de utilizator este:", mail);
          console.log("parola din storage este:", data.password);
          console.log("parola introdusa de utilizor este:", pass);
        
         if(data.email===mail && data.password===pass)
         { console.log("true");
          succesfullLogin=true;
          console.log("succesfulllogin:", succesfullLogin);
          Alert.alert("Successfull Login!")
     
        }else{
           console.log("false");
           succesfullLogin=false;
           console.log("successfulllogin:", succesfullLogin);
           Alert.alert("Wrong email or password. Please try again!")
         }
       
          return data;
        } catch(e) {
          // error reading value
        }
       
      }
    function loginFunction(){
      const userInput={mail:email,password:password }; 
      console.log("user imput:", userInput);
      const data=getData(userInput.mail, userInput.password);
      console.log("Promisul este:", data);
      (async function(){
         var result = await getInformation();
        console.log('Woo done!', result);
        console.log("email din local storage:", result.email);
        if(result.email===email && result.password===password){
          const navi=()=>{navigation.navigate("MainScreen")};
          navi();
        }else{
          alert("The email or the password you entered were wrong. Please try again!");
        }
       })();
  
    
    };

    
 const getInformation = async (mail, pass)=>{
    try{
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      const data=JSON.parse(jsonValue) ;
      return data;
    } catch(e){};
  };
   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20, color:"navy"}}>Welcome back</Text>
        <Image  style={styles.logo} source={require("./../assets/logoDoto.png")}/>
        <TextInput placeholder={"Email"} value={email} onChangeText={email=>setEmail(email)} style={styles.inputstyle} />
        <TextInput placeholder={"Password"} secureTextEntry={true} value={password} onChangeText={password=>setPassword(password)} style={styles.inputstyle}/>
        <TouchableOpacity style={styles.buttonstyle} onPress={()=>{loginFunction()}}><Text style={styles.textstyle}>Login</Text></TouchableOpacity>
       
        <View style={{flexDirection:'row', justifyContent:"center", textAlign:"center", marginTop:30,}}><Text>Don't have an account?</Text>
     
       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={styles.signupbtn}>SignUp</Text></TouchableOpacity></View>
      </View>
   );
  }
 
 export default HomeScreen;
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