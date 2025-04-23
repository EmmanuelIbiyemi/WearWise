import { View, Text, StyleSheet , Pressable, SafeAreaView, Alert} from 'react-native'
import React, { useEffect } from 'react'


//  FOR TESTING IF DATA CAN BE PASSED TO THE NEXT COMPONENT
import Disitem from './DisItem';

export default function Data() {

    const name ="Joe John";
    const age = 189 
    const callin=(name)=>{
        let a = name;
        console.log("The clicking Works "+a);
        return(
            <Disitem name={name}/>
        )
    }

  return (
    // <SafeAreaView>
    //     <View style={styles.main}>
    //         <Pressable onPress={()=>{callin(name)}}>
    //             <View style={styles.butNext}>
    //                 <Text style={{fontSize:10}}>
    //                     Click Me
    //                 </Text>
    //             </View>
    //         </Pressable>
    //     </View>
    // </SafeAreaView>
    <Disitem name={name}/>
  )
};

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    butNext:{
        backgroundColor:'lightblue',
        height:70,
        width:70,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        margin:49,
    }
})