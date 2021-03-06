import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react";
import { useNavigation } from '@react-navigation/native';

//  class Category {
//     constructor(name) {
//          this.id = Math.random().toString(36).substr(2,9);
//          this.categoryName = name;
//          this.backgroundColor = "black";
//     }
//     setColor(categColor){
//         this.backgroundColor=categColor;
//     };
//     setBKGImg(categBKGImage){
//         this.backgroundColor=categBKGImage;
//     };
// };

const getImage=(img_name)=> {
    switch(img_name) {
      case "landscape1.jpg": return require("./../assets/Landscapes/landscape1.jpg");
      case "landscape2.jpg": return require("./../assets/Landscapes/landscape2.jpg");
      case "landscape3.jpg": return require("./../assets/Landscapes/landscape3.jpg");
      case "landscape4.jpg": return require("./../assets/Landscapes/landscape4.jpg");
      case "landscape5.jpg": return require("./../assets/Landscapes/landscape5.jpg");
      case "landscape6.jpg": return require("./../assets/Landscapes/landscape6.jpg");
    }
  }

// const getImage=(img_name)=> {
//     let source="";
//     if(img_name==="landscape1.jpg")
//     {
//        source=`require("./../assets/Landscapes/landscape1.jpg")`;
//        console.log("sursa este:",source);
//        let str=require("./../assets/Landscapes/landscape1.jpg");
//        console.log("str este:", str);       
//     }
   
//   };
 let NewCategory = class {
  
     constructor(name, preferences) {
        this.id = Math.random().toString(36).substr(2,9);
        this.categoryName = name;
        this.backgroundColor=preferences==="Color"?categColor:"";
        // this.image=preferences==="Image"?{uri:imgName}:"";
       
        console.log("this.image****!!", this.image);
        let sli = imgName.substr(0,10);
        console.log("sli este", sli);
        this.image=preferences==="Image"?(getImage(imgName)):"";
    }
};



let showColors=true;
let categName=""; let categColor=""; let imgName=""; let preferences="";
const CreateNewCategory =(props)=>{
    const navigation = useNavigation();

    const [text, setText]=useState("");
    const [isSelected, setisSelected]=useState([{id:1, name:"Color", selected:true},{id:2, name:"Image", selected:false}]);
    const [isSelectedColor, setisSelectedColor]=useState([{id:1, name:"#2ab7ca", selected:true},{id:2, name:"#fe4a49", selected:false},{id:3, name:"#005b96", selected:false},{id:4, name:"#fe8a71", selected:false}, {id:5, name:"purple", selected:false},{id:6, name:"#f6abb6", selected:false}]);
    const [isSelectedImage, setisSelectedImage]=useState([{id:1, name:"landscape1.jpg", source:require("./../assets/Landscapes/landscape1.jpg"), selected:true},
                                                        {id:2, name:"landscape2.jpg", source:require("./../assets/Landscapes/landscape2.jpg"), selected:false},
                                                        {id:3, name:"landscape3.jpg", source:require("./../assets/Landscapes/landscape3.jpg"), selected:false},
                                                        {id:4, name:"landscape4.jpg", source:require("./../assets/Landscapes/landscape4.jpg"), selected:false}, 
                                                        {id:5, name:"landscape5.jpg", source:require("./../assets/Landscapes/landscape5.jpg"), selected:false},
                                                        {id:6, name:"landscape6.jpg", source:require("./../assets/Landscapes/landscape6.jpg"), selected:false},
                                                    ]);
    
    const onSelectButon = (item) => {
        let updatedState = isSelected.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        
        );
        setisSelected(updatedState);
        item.name==="Color"?showColors=true:showColors=false;
        item.name==="Color"?preferences="Color":preferences="Image";
        console.log("preferences", preferences);
        console.log("showColors", showColors);
      
        console.log("updatedstate:", updatedState)
        console.log("isSelected", isSelected);
      
      
      };

      const onSelectColor = (item) => {
        let updatedState = isSelectedColor.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        
        );
        setisSelectedColor(updatedState);

        console.log("isSelectedColor", isSelectedColor);
        console.log("updatedstate:", updatedState)
        
   
      };

      const onSelectImage = (item) => {
        let updatedState = isSelectedImage.map((clikedItem) =>
        clikedItem.id === item.id
            ? { ...clikedItem, selected: true }
            : { ...clikedItem, selected: false }
        
        );
        setisSelectedImage(updatedState);

        console.log("isSelectedImage", isSelectedImage);
        console.log("updatedstate:", updatedState)
      };





    return(<View style={styles.container}>
            <LinearGradient
        colors={[ '#0099CC', '#87CEEB', '#BFEFFF']}
        style={styles.gradientDesign}>
            <View style={styles.designCategory}>
                <Text style={styles.textstyle}>New Category</Text>
                <TextInput value={text} onChangeText={text=>{setText(text); console.log("text:", text);categName=text; }} style={styles.textInputStyle} placeholder="Category name"/>
                <View style={{flexDirection:"row"}}>
                     {isSelected.map(item=><TouchableOpacity key={item.id} style={item.selected===true?[styles.buttonstyle,{marginLeft:"14%", backgroundColor:"navy"}]:[styles.buttonstyle,{marginLeft:"14%", backgroundColor:"white"}]} onPress={()=>{onSelectButon(item)}}><Text style={item.selected===true?[styles.btnNameStyle,{color:"white"}]:[styles.btnNameStyle,{color:"navy"}]}>{item.name}</Text></TouchableOpacity>)}
                     
                </View>
               
               <View>
                   {showColors===true?
               <View style={{flexDirection:"row"}}>
                      {isSelectedColor.map(item=><TouchableOpacity key={item.id} style={item.selected===true?[styles.selectedColorStyle,{backgroundColor:item.name,borderStyle:"solid", borderWidth:2.5, borderColor:"red"}]:[styles.selectedColorStyle,{backgroundColor:item.name}]} onPress={()=>{onSelectColor(item);categColor=item.name;console.log("categColor", categColor)}}></TouchableOpacity>)}
                </View>
               
               :<View style={{flexDirection:"row"}}>
                     {isSelectedImage.map(item=>
                                <TouchableOpacity key={item.id} onPress={()=>{onSelectImage(item); imgName=item.name;console.log("imgName", imgName)}} style={item.selected===true?{borderRadius:50, borderColor:"red",borderWidth:2.5, borderStyle:"solid", marginLeft:10, marginTop:25 }:{borderRadius:50, marginTop:25, marginLeft:10, borderColor:"white",borderWidth:2.5, borderStyle:"solid"}}>
                                    <Image source={item.source} style={styles.imagestyle}/>
                             </TouchableOpacity>)}
                
                </View>}
               <View style={{flexDirection:"row"}}>
                   <TouchableOpacity style={[styles.btn,{marginLeft:"30%"}]} onPress={()=>{
                       //let NewCategory = new Category(categName);

                       //props.route.params.categories.push(categColor?NewCategory.setColor(categColor):NewCategory.setBKGImg(categImage));
                     
                       props.route.params.categories.push(new NewCategory(categName,preferences));
                       console.log("updated categories",props.route.params.categories);
                       navigation.navigate("Categories",{categories:props.route.params.categories}) }}
                       ><Text>Create Category</Text></TouchableOpacity>
                   <TouchableOpacity style={[styles.btn,{marginLeft:"10%"}]}><Text>CANCEL</Text></TouchableOpacity>
               </View>
               </View>
               
                     
              
            </View>
      </LinearGradient>
        </View>)
}

export default CreateNewCategory;

const styles = StyleSheet.create({
    container:{
        height:645,

    },
    designCategory:{
        height:300,
        width:300,
        backgroundColor:"white",
        borderRadius:10,
    },
    gradientDesign:{
        height:645,        
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputStyle:{
        height:30,
        width:220,
        borderStyle:"solid",
        borderBottomWidth:1,
        borderBottomColor:"black",
        marginTop:"5%",
        marginLeft:"14%",
    },
    textstyle:{
        fontSize:18,
        fontWeight:"bold",
        color:"navy",
        marginLeft:"14%",
        marginTop:"6%",
    },
    buttonstyle:{
        height:35,
        width:80,
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:1,
        borderRadius:20,
        marginTop:"6%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNameStyle:{
        color:"white",
    },
    selectedColorStyle:{
        height:30,
        width:30,
        borderRadius:50,
        backgroundColor:"red",
        marginLeft:"5%",
        marginTop:"10%",
    },
    imagestyle:{
        height:30, 
        width:30, 
        borderRadius:50,

    },
    btn:{
        height:40,
        width:100,
        marginTop:"10%",

    },
});