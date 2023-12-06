import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native";

let Main=()=> {
    const heroeslist=
      [
        {
        title:"Ironman",
        poster:require("./images/heroes/ironman.jpg")
      },
        {
        title:"Batman",
        poster:require("./images/heroes/batman.jpg"),
      },
        {
        title:"Superman",
        poster:require("./images/heroes/superman.jpg")
      },
        {
        title:"Antman",
        poster:require("./images/heroes/antman.jpg")
      },
        {
        title:"Spiderman",
        poster:require("./images/heroes/spiderman.jpg")
      },
        {
        title:"Rajani",
        poster:require("./images/heroes/antman.jpg")
      },
        {
        title:"Hulk",
        poster:require("./images/heroes/hulk.jpg")
      }
    ]
    return <SafeAreaView>
      <ScrollView >
        <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:10,left:"2%"}}>
      {heroeslist.map((val,idx)=>
        <View style={{display:"flex",flexWrap:"nowrap",gap:10}} key={idx}>
        <ImageBackground  style={{width:150,height:300}} source={val.poster}>
        <Text style={{backgroundColor:"white", height:50,opacity:0.8, color:"black",fontSize:20,left:"0%",top:"90%",fontWeight:"bold"}}>{val.title}</Text>
        </ImageBackground>
        </View>)}
        </View>

        
    
      </ScrollView>
    </SafeAreaView>
  }
  export default Main;