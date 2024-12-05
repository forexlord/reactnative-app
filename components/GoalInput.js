import { View, Button, StyleSheet, TextInput,Modal, Image } from "react-native";
import { useState } from "react";

const GoalInput = ({onAddGoal,visible,setModalVisible}) =>{
    const[enteredGoalText,setEnteredGoalText]=useState('');
    const goalInputHandler=(enteredText)=>{
        setEnteredGoalText(enteredText);
       } 
    return(
        <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
         <Image style={styles.imageStyle} source={ require('../assets/goal.png')}/>
        <TextInput style={styles.textInput} placeholder="Enter Goal" onChangeText={goalInputHandler} value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
        <Button title="Add Goal" onPress={()=>{
            onAddGoal(enteredGoalText)
            setEnteredGoalText('')
            setModalVisible(false)
        }} color='#b180f0'/>
        </View>
        <View style={styles.buttons}>
        <Button title="Cancel" onPress={()=>setModalVisible(false)}  color='f31282'/>
        </View>
        </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 16,
        backgroundColor:'#311b6b'
      },
      textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width:'100%',
        padding:5,
      },
      buttonContainer:{
        flexDirection: 'row'
      },
      buttons:{
        width:100,
        marginHorizontal:8,
        marginTop:16

      },
    imageStyle:{
        width:100,
        height:100,
        margin:20
    }
})
export default GoalInput;