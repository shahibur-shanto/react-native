import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SectionList, FlatList, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl } from 'react-native';
import State from './components/State';
export default function App() {



const [Items, setItems] = useState([
  {key:1, item:"Item 1"},
  {key:2, item:"Item 2"},
  {key:3, item:"Item 3"},
  {key:4, item:"Item 4"},
  {key:5, item:"Item 5"},
  {key:6, item:"Item 6"},
  {key:7, item:"Item 7"},
  {key:8, item:"Item 8"},
  {key:9, item:"Item 9"},
  {key:10, item:"Item 10"},
  {key:11, item:"Item 11"},
  {key:12, item:"Item 12"},
  {key:13, item:"Item 13"},

]);

const [Refreshing, setRefreshing] = useState(false);
// const onRefresh = ()=>{
//   setRefreshing(true);
// }

  
// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64
// };
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// const [add,setAdd] = useState(0);
// const [count,setCount] = useState(0);
// const addHaldler =()=>{
//   let newAdd = add+5;
//   let newCount = count+1;
//   setCount(newCount);
//   setAdd(newAdd);

// };
  return (

<SafeAreaView>
    <ScrollView 
    refreshControl={
      <RefreshControl
      refreshing = {Refreshing} 
      // onRefresh={onRefresh}
      />

    }>
  {
    Items.map((item)=>{
      return(
        <View style={styles.container} key={Items.key}>
          <Text style={styles.text}>{item.item}</Text>
        </View>
      )
    })
  }
</ScrollView>
</SafeAreaView>
    
    //   <View style={styles.container}>
      
    //   <View style={styles.row}>
    //   <View style={styles.view1}><Text style={styles.text}>1</Text></View>
    //   <View style={styles.view2}><Text style={styles.text}>2</Text></View>
    //   <View style={styles.view3}><Text style={styles.text}>3</Text></View>
    //   </View>
    //   <View style={styles.row}>
    //   <View style={styles.view4}><Text style={styles.text}>4</Text></View>
    //   </View>
    //   <View style={styles.row}>
    //   <View style={styles.view5}><Text style={styles.text}>5</Text></View>
    //   </View>
    //   <View style={styles.big_row}>
    //   <View style={styles.view6}><Text style={styles.text}>6</Text></View>
    //   <View style={styles.view7}><Text style={styles.text}>7</Text></View>
    //   </View>


    //   {/* <Text>{add}</Text>
    //   <Button title='Add' onPress={addHaldler}></Button>
    //   <Text>You Clicked {count} Times</Text> */}
    // </View>
    
    
   
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'green',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin:10,
    borderRadius:10,

    
    
  },
  // row:{
  //   flexDirection:'row',
  //   alignItems:'center',
  //   justifyContent:'center',
  // },
  // big_row:{
  //   flex:1,
  //   flexDirection:'row',
  //   alignItems:'stretch',
  //   justifyContent:'center',
  // },
  // view1:{
  //   backgroundColor:'grey',
  //   flex:1, 
  //   justifyContent:'center',
  //   alignItems:'center',   
  // },
  // view2:{
  //   backgroundColor:'pink',
  //   flex:2,
  //   justifyContent:'center',
  //   alignItems:'center',   
  // },
  // view3:{
  //   backgroundColor:'yellow',
  //   flex:3, 
  //   justifyContent:'center',
  //   alignItems:'center',   
  // },
  // view4:{
  //   backgroundColor:'red',
  //   flex:1, 
  //   justifyContent:'flex-start',
  //   alignItems:'center',   
  // },
  // view5:{
  //   backgroundColor:'green',
  //   flex:1, 
  //   justifyContent:'flex-start',
  //   alignItems:'center',   
  // },
  // view6:{
  //   backgroundColor:'yellow',
  //   flex:1, 
  //   justifyContent:'center',
  //   alignItems:'center',
       
  // },
  // view7:{
  //   backgroundColor:'blue',
  //   flex:1, 
  //   justifyContent:'center',
  //   alignItems:'center',
       
  // },
  text:{
    
    fontSize:60,
    

  },
});
