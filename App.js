import * as React from 'react';
import {useState} from 'react';
import { Button, View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity, Platform, Alert, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import MainScreen from './Components/MainScreen';
import Today from "./Components/Today.js";
import CreateNewTask from "./Components/CreateNewTask.js";
import TimePicker from "./Components/Timepicker.js";





 function HomeScreen({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
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
  
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Login</Text>
       <Text >Welcome back!</Text>
       <Image  style={styles.logo} source={require("./assets/logoDoto.png")}/>
       <TextInput placeholder={"Email"} value={email} onChangeText={email=>setEmail(email)} style={styles.inputstyle} />
       <TextInput placeholder={"Password"} secureTextEntry={true} value={password} onChangeText={password=>setPassword(password)} style={styles.inputstyle}/>
       <TouchableOpacity style={styles.buttonstyle} onPress={()=>{loginFunction()}}><Text style={styles.textstyle}>Login</Text></TouchableOpacity>
      
       <View style={{flexDirection:'row', justifyContent:"center", textAlign:"center", marginTop:30,}}><Text>Don't have an account?</Text>
    
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={styles.signupbtn}>SignUp</Text></TouchableOpacity></View>
     </View>
  );
 }

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  
  } catch (e) {
    // saving error
  }
}

 const getInformation = async (mail, pass)=>{
   try{
     const jsonValue = await AsyncStorage.getItem('@storage_Key');
     const data=JSON.parse(jsonValue) ;
     return data;
   } catch(e){};
 };
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


function SignUp() {
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [passconfirmed, setPassconfirmed]=useState("");
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
      <Image style={styles.signupimg} source={require("./assets/logoDoto.png")}/>
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

const Stack = createStackNavigator();


class App extends React.Component {


  render(){
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainScreen" >
        {props => <MainScreen {...props}  />}
        </Stack.Screen>
        {/* <Stack.Screen name="Today" component={Today}/> */}
        <Stack.Screen name="Today">
          {props=><Today {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CreateNewTask">
          {props=><CreateNewTask {...props} />}
        </Stack.Screen>
        <Stack.Screen name="TimePicker">
          {props=><TimePicker {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default App;
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