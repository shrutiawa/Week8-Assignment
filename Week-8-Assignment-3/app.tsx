
import axios from 'axios';
import { SafeAreaView,Platform, StatusBar, StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import {useEffect,useState} from "react"
 

 

function App(): React.JSX.Element {
  let [user,setUsers]=useState([])
useEffect(()=>{
  axios.get("https://reqres.in/api/users?page=1")
  .then(res => {setUsers(res.data.data);console.log(user)} )
  .catch(err => console.log("Error ", err))
},[]);

  return <SafeAreaView>
    <ScrollView>
            {user.map((val)=>
            <View style={{margin:10,width:300,height:180,backgroundColor:"grey",borderBottomWidth:20,borderBottomLeftRadius:15,borderBottomRightRadius:20}} key={val.id}>
              <Text style={{fontSize:20}}>{val.first_name+" "+val.last_name}</Text>
              <Image style={{width:100,height:100}}source={{uri:val.avatar}}/>
              <Text style={{fontSize:20}}>{val.email}</Text>
            </View>
            )}
            </ScrollView>
         </SafeAreaView>;
}
export default App;