import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const Calendar = (props) => {
  let initDate=new Date();
  let stringInitDate=initDate.toISOString();
  console.log("tipul lui stringInitDate in ISOString:", typeof stringInitDate);
  console.log("stringInitDate este:", stringInitDate);
  console.log("Sliced data din stringInitDate:", stringInitDate.slice(0,stringInitDate.indexOf("T")));
  // console.log("initDate:", initDate.toISOString());

  const Months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function getTheMonth(someDate){
      let theMonth=someDate.getMonth();
      for(let i=0;i<Months.length;i++){
        if(i===theMonth){
          theMonth=Months[i];
          console.log("Luna2  este:", theMonth);
          console.log("am apelat functia");
        }};
        return theMonth;
    };
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
 
  let hours= initDate.toLocaleTimeString();
  let initTime = hours.slice(0,5);
  console.log("inittime este:", initTime);

  console.log("initTime:", initTime);
  const [date, setDate] = useState(initDate);
  console.log("date este", date);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(initDate);
  console.log("time este",time);

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      let currentDate = selectedValue || "no date selected";
      console.log("current data:", currentDate);
  let strcurrentDate=currentDate.toISOString();
      // props.newItem.Date=currentDate.getFullYear()+"-"+getTheMonth(currentDate)+"-"+currentDate.getDate();
      props.newItem.Date=strcurrentDate.slice(0, strcurrentDate.indexOf("T"));
      setDate(currentDate);
      console.log("date este", date);
    
      setMode('time');
      setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
    } else {
      const currentTime = selectedValue ||  "no value salected";
      console.log("selectedTime", currentTime);
      let strCurrentTime=currentTime.toLocaleTimeString();
      // props.newItem.Begin=currentTime.getHours()+":"+addZero(currentTime.getMinutes());
      props.newItem.Begin=strCurrentTime.slice(0,5);
      setTime(currentTime);
      setShow(Platform.OS === 'ios');
      setMode('date');
    }
    
  
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Pick a date" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Pick an hour" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Calendar;
