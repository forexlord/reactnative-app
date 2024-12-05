import { StyleSheet,  View,Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const[userGoal,setUserGoal]=useState([]);
  const[modalVisible,setModalVisible]=useState(false);

const addGoalHandler=(enteredGoalText)=>{
  if(enteredGoalText.length===0){
    return;
  }
  else{
    setUserGoal([...userGoal,{text:enteredGoalText, id: Math.random().toString()}])
    // setModalVisible(false)
  }
}
const deleteGoalHandler=(item)=>{  
 setUserGoal(userGoal.filter(goal=>goal.id!==item.id))
}

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <View style={{marginBottom:8}}>
      <Button title='Add New Goal' color='#a065ec' onPress={()=> setModalVisible(true)}/>
      </View>
      <GoalInput visible={modalVisible} onAddGoal={addGoalHandler} setModalVisible={setModalVisible} />
      <View style={styles.goalContainer}>
      <FlatList data={userGoal} renderItem={item =>{
        return(
          <GoalItem item={item} deleteGoalHandler={deleteGoalHandler}/>
          )
      }}
      keyExtractor={(item, index)=>{
        return item.id
      }}
      />
      </View>
     </View>
     </>
  );
}
const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:'#1e085a'
  },

  goalContainer:{
    flex:6,
  },
});
