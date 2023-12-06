// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */





// import { View } from "react-native"

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// import { Text, View } from "react-native"
// function App(): JSX.Element {
//   return <View>
// {/* <Text selectable={true} selectionColor={"red"} style={{margin:20,fontSize:0,fontWeight:'bold',color:"silver"}}>Welcome to ur l<Text style={{color:"crimson"}}>i</Text>fe!!!
// </Text> */}
// <Text style={{margin:20,fontSize:15,fontWeight:'bold',color:"silver",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam eveniet quas necessitatibus, ducimus porro hic repellendus ipsam amet recusandae inventore odit impedit aliquam quo vitae rerum libero in animi?
//     In optio labore repellendus neque hic aut aliquid, numquam incidunt perspiciatis. Architecto sed quasi eum eligendi deleniti dolores! Placeat ut sit labore mollitia aperiam, praesentium suscipit? Possimus magni dolor temporibus.
//     Perferendis nam, aliquid ullam autem iusto ex cumque vitae iste unde dolore quisquam odio eveniet sequi deleniti atque. Perspiciatis necessitatibus cumque ducimus autem aperiam ea, ratione fugit expedita excepturi maxime?
//     Laboriosam quos quidem magnam debitis ducimus natus iure enim. Natus necessitatibus vel, quidem minus perspiciatis iure, officiis quia rerum omnis sequi voluptates, impedit dolorum molestiae quibusdam adipisci nostrum. Numquam, veritatis.</Text>
//   </View>
// }
// export default App;
// import { Dimensions, SafeAreaView, Text, View } from "react-native"
// let Header=()=>{
//   return <View style={{height:100,backgroundColor:"orange"}}>
//     <Text style={{textAlign:"center"}}>I am a Header</Text>
//   </View>
// }
// let Footer=()=>{
//   return <View style={{height:50,backgroundColor:"yellow"}}>
//     <Text style={{textAlign:"center"}}>I am a Footer</Text>
//   </View>
// }
// function App(): JSX.Element {
//   let mobHeight=Dimensions.get("screen").height;
//   console.log(mobHeight)
//   return<SafeAreaView> 
//     <View style={{height:mobHeight-20,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
//       <Header/>
//       <Footer/>
//     </View>
//     </SafeAreaView>
// }
// export default App;


// function App(): JSX.Element {
//   let antman=require("./images/heroes/antman.jpg")
//   // let bg6=require("https://i.ibb.co/SV04x23/11.png")
//   return<SafeAreaView> 
//     <View>
//       <Image style={{width:100, height:100}}source={antman}/>
//       <Image style={{width:300, height:300}} source={
//         {uri: "https://i.ibb.co/58K146z/13.jpg"}}/>
//       <ImageBackground style={{opacity:2}}source={{uri:"https://i.ibb.co/SV04x23/11.png"}}>
//         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam eveniet quas necessitatibus, ducimus porro hic repellendus ipsam amet recusandae inventore odit impedit aliquam quo vitae rerum libero in animi?
//     In optio labore repellendus neque hic aut aliquid, numquam incidunt perspiciatis. Architecto sed quasi eum eligendi deleniti dolores! Placeat ut sit labore mollitia aperiam, praesentium suscipit? Possimus magni dolor temporibus.
//     Perferendis nam, aliquid ullam autem iusto ex cumque vitae iste unde dolore quisquam odio eveniet sequi deleniti atque. Perspiciatis necessitatibus cumque ducimus autem aperiam ea, ratione fugit expedita excepturi maxime?
//     Laboriosam quos quidem magnam debitis ducimus natus iure enim. Natus necessitatibus vel, quidem minus perspiciatis iure, officiis quia rerum omnis sequi voluptates, impedit dolorum molestiae quibusdam adipisci nostrum. Numquam, veritatis.</Text>

//       </ImageBackground>
//     </View>
//     </SafeAreaView>
// }
// export default App;
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "./component/header";
import Main from "./component/main";
// function App(): JSX.Element {
//   const heroeslist=
//   [
//     {
//     title:"Ironman",
//     poster:require("./images/heroes/ironman.jpg")
//   },
//     {
//     title:"Batman",
//     poster:require("./images/heroes/batman.jpg"),
//   },
//     {
//     title:"Superman",
//     poster:require("./images/heroes/superman.jpg")
//   },
//     {
//     title:"Antman",
//     poster:require("./images/heroes/antman.jpg")
//   },
//     {
//     title:"Spiderman",
//     poster:require("./images/heroes/spiderman.jpg")
//   },
//     {
//     title:"Rajani",
//     poster:require("./images/heroes/antman.jpg")
//   },
//     {
//     title:"Hulk",
//     poster:require("./images/heroes/hulk.jpg")
//   }
// ]
//     return <SafeAreaView>
//       <ScrollView horizontal={true}>
//         {heroeslist.map((val,idx)=>
//         <View key={idx}><Text>{val.title}</Text>
//         <Image source={val.poster}/>
//         </View>)}
//       </ScrollView>
//     </SafeAreaView>
//   }
//   export default App;
function App(): JSX.Element {
    return <SafeAreaView>
      <ScrollView>
        <Header/>
        <Main/>
      </ScrollView>
    </SafeAreaView>
  }
  export default App;