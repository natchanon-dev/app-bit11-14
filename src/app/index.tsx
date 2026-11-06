//นำเข้า  วิว  ข้อความ   ชื่อไลบรารี่
import { View, Text, StyleSheet, Image } from 'react-native';

//ส่งออก เริ่มต้น   ตรงตัว     ชื่อfunc
export default function App(){
  return(
    <View style={homeStyle.container} >

      <Text style={homeStyle.title}>Natchanon</Text>
    
    <Image 
      source={require("@/assets/nut.jpeg")}
      style={{
        width: 200,
        height: 200,
        borderRadius: 100, //มุมโค้ง
        borderWidth: 5,
        borderColor: "lightblue",
      
      }}
    
    />
    
    <Image 
      source={{uri:"data:image/jpeg;base64,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"}}
      style={{
        width: 200,
        height: 200,
        borderRadius: 100, //มุมโค้ง
        borderWidth: 5,
        borderColor: "lightblue",
      
      }}
      />

      <View style={{flexDirection: "row"}}>
        <Text>🫶🏻</Text>
        <Text> 👉🏻👈🏻</Text>
      </View>
    </View>


  )
}

const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "lightgreen",
    flex:1, //ขยายเต็มพื้นที่
    alignItems: "center"
  },

  title:{
    color: "white", //สีตัวอักษร
    fontSize: 32, //ขนาดตัวอักษร
    fontWeight:700, //ความหน้าตัวอักษร 100-900
    fontStyle: "italic", //เอียง
    textAlign: "center",

  } 

})