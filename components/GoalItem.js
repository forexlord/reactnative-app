import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({item, deleteGoalHandler})=>{
 return(

    <View style={styles.goalItem}>
    <Pressable android_ripple={{color:'#210644'}}
    style={({pressed})=>{
      pressed && styles.pressedStyle
    }}
    onPress={deleteGoalHandler.bind(this,item.item)}>
    <Text style={styles.goalText}>{item.item.text}</Text>
    </Pressable>
    </View>
 
 )
}

const styles = StyleSheet.create({
    goalItem:{
        marginBottom:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',

      },
    goalText:{
        color:'#ffffff',
        padding:8,
        
      },
    pressedStyle:{
      opacity:0.5,
    }
})
export default GoalItem;