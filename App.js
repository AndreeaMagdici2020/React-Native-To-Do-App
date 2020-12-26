import * as React from 'react';
import {  StyleSheet, StatusBar, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './Components/MainScreen';
import Today from "./Components/Today.js";
import CreateNewTask from "./Components/CreateNewTask.js";
import TimePicker from "./Components/Timepicker.js";
import HomeScreen from "./Components/HomeScreen.js";
import SignUp from "./Components/SignUp.js";


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
    
  });