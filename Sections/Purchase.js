import { 
        StyleSheet, 
        Text, 
        View,
        SafeAreaView,
        StatusBar,
        Pressable
       } from 'react-native'
import React from 'react'

export default function Purchase() {
  return (
    <SafeAreaView style={styles.main}>
        <View style={{flexShrink:1 , borderWidth:1}}>
            <Text style={{fontFamily:'PT Serif'}}>
                This is the purchase system section
            </Text>
            <View style={{justifyContent:'flex-end', alignItems:'flex-end',paddingHorizontal:30}}>
            <Pressable style={styles.test}>
                <View >
                    <Text>
                        U
                    </Text>
                </View>
            </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white',
        paddingTop: StatusBar.currentHeight,
        position:'relative',
        borderWidth:1
    },
    test:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightblue',
        height:80,
        width:80,
        borderRadius:50,
        borderWidth:1,
        top:500,
        flexShrink:1,
    }
})