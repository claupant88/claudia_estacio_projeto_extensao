import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import {ModalPassword} from '../../components/modal'

let charset = "abcdefghijklmnopqrstuwvxyz123456789"

export function Home(){

  const [size, setSize] = useState(10)
  const [passwordValue, setPassordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let password = "";
    for(let i = 0, n=charset.length; i<size; i++){
      password += charset.charAt(Math.floor(Math.random()*n))
    }
    setPassordValue(password)
    setModalVisible(true)
  }

  return(
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} unidades</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={1}
          maximumValue={100}
          maximumTrackTintColor={"red"}
          minimumTrackTintColor={"black"}
          value={size}
          onValueChange={ (e) => 
            {
              setSize(parseInt(e.toFixed(0))) 
            }
          }
        />
      </View>

    <TouchableOpacity style={styles.button} onPress={generatePassword}>
      <Text style={styles.buttonText}>Salvar</Text>
    </TouchableOpacity>

    <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <ModalPassword password={passwordValue} handleClose = { () => setModalVisible(false)} />
    </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
 container:{
 flex:1,
 backgroundColor: "green",
 justifyContent: "center",
 alignItems: "center"   
 },
 logo:{
  marginBottom:60
 },
 area:{
  marginTop: 14,
  marginBottom: 14,
  width: "80%",
  backgroundColor: "white", 
  borderRadius: 8,
  padding: 8
 },
 button:{
  backgroundColor: "blue",
  width: "80%",
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  marginBottom: 18
},
buttonText:{
  color: "white", 
  fontSize: 20
},
title:{
  fontSize: 30,
  fontWeight: "bold"

}

})
