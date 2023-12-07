function App(): React.JSX.Element {
  const [state,setState]=useState({width:"50%"})
  const styles=StyleSheet.create({
    
    // this width and height unit is dips density independent pixel
    box:{width:"50%",height:100,backgroundColor:"grey",marginBottom:10},
    firstbox:{marginTop:50}
  })
  const changeHandler=()=>{
    setState({width:"100%"})
  }
  return <ScrollView>
  <View style={[styles.box,styles.firstbox]}></View>
  <View style={{...styles.box,backgroundColor : "cyan", width:state.width}}></View>
  <View style={{...styles.box,backgroundColor : "yellow"}}></View>
  <Pressable onPress={changeHandler}>
    <View style={[styles.box,{backgroundColor : "magenta",}]}></View>
    <View style={{...styles.box, backgroundColor : "green" , width:state.width}}></View>
    </Pressable>
  
  
  </ScrollView>
  
}


export default App;