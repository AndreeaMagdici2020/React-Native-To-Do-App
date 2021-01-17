import React,{useState} from "react";
import {Text, View, ScrollView, TouchableOpacity, Image} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import { CheckBox } from 'react-native-elements'

const ExpandedList =(props)=>{
const [checked, setChecked]=useState(true);


function ContentCategories(id, categoryName,) {
  this.id = id;
  this.categoryName = categoryName;
  this.subCategory=[]};

  let content=[];
  props.categories.map(item=>{let itemCateg=new ContentCategories(item.id,item.categoryName);content.push(itemCateg)});
  console.log("content este din expandedList", content);

 
  
content.map(itemCategory=>props.items.map(itemTask=>itemCategory.categoryName===itemTask.Category?itemCategory.subCategory.push({id:itemTask.id, name:itemTask.title}):console.log("Am comparat",itemTask.Category,"cu",itemCategory.categoryName)))
console.log("content este:", content);
    return (
        <View>
        <Text>Expanded list</Text>
                <ScrollView>
        {content.map(item=>     
                                  
                                    <Collapse key={item.id} style={{marginBottom:10,}}>
                                    <CollapseHeader style={{flexDirection:"row", backgroundColor:"#39B7CD", marginTop:10, height:50, width:"80%", marginLeft:"10%", justifyContent:"space-between", padding:5, borderRadius:5}}>
                                        <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>{item.categoryName}</Text>
                                        <Image source={require("./../assets/icons8expand.png")} style={{height:30, width:30, }}/>
                                    </CollapseHeader>
                                    <CollapseBody style={{marginRight:"10%", marginTop:10}}>
                                      {item.subCategory.map(item=><View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                                                                        <Text style={{fontSize:16, marginTop:12}}>{item.name}</Text>
                                                                        <CheckBox
                                                                                
                                                                                checkedIcon={<Image source={require('./../assets/icons8checked.png')} style={{height:20, width:20}}/>}
                                                                                uncheckedIcon={<Image source={require('./../assets/icons8unchecked.png')} style={{height:20, width:20}} />}
                                                                                checked={!checked}
                                                                                onPress={() =>{setChecked(!checked);console.log("checked is", checked);}}/>
                                                                        
                                                                  </View>)}
                                    </CollapseBody>
                                    </Collapse>
                                )}
                 </ScrollView>
        </View>
    )
}

export default ExpandedList;