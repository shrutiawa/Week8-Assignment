import { Image, SafeAreaView, Text, View } from "react-native";

let Header =()=>{
    return <SafeAreaView >
      <View style={{display:"flex",flexDirection:"row" ,justifyContent:"space-between", padding:10}}>
        <Image style={{width:50,height:50}} source={require("./images/heroes/antman.jpg")}/>
        <Text style={{display:"flex",fontSize:30}} >Heroes</Text>
       
      </View>
    </SafeAreaView>
  }
  export default Header;