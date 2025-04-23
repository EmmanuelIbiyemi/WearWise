import {  FlatList, 
          StyleSheet, 
          Text, 
          View ,  
          Image,
          Pressable,
          Alert,
          SafeAreaView
       } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Female({ setnumshw }) {
  const navigation = useNavigation();
  
  // FOR THE DISPLAYING METHOD
  const eye = require("../Sections/Fashioncloth/eye.png");


  //  INFO ON THE FEMALE CLOTHES
  const female =[
    {
        fid:"2r",
        about:"This is a simple clothe for female",
        price: 358,
        discount:"-21%",
        disprice:"$282.82",
        fimage:require('../Sections/Clothes/FemaleClothei.jpeg')
    },
    {
        fid:"3r",
        about:"This is a simple clothe for female",
        price: 120,
        discount:"-20%",
        disprice:"$100",
        fimage:require('../Sections/Clothes/FemaleClotheii.jpeg')
    },
    {
        fid:"7r",
        about:"This is a simple clothe for female",
        price: 120,
        discount:"-20%",
        disprice:"$198",
        fimage:require('../Sections/Clothes/FemaleClotheiii.jpeg')
    },
    {
        fid:"5r",
        about:"This is a simple clothe for female",
        price: 600,
        discount:"-30%",
        disprice:"$420",
        fimage:require('../Sections/Clothes/FemaleClotheiv.jpeg')
    },
    {
        fid:"6r",
        about:"This is a simple clothe for female",
        price: 300,
        discount:"-20%",
        disprice:"$280",
        fimage:require('../Sections/Clothes/FemaleClothev.jpeg')
    }
  ]
  
  const totalPrice = female.reduce((sum , item)=> sum + item.price , 0)
  const loop = female.map((item)=> item.price)
  React.useEffect(()=>{
    console.log(loop)
    console.log(totalPrice)
  })

  const renderItem = ({item})=>{
    return(
      <View 
      style={styles.simDesign}
      >
          <View style={{alignContent:'space-evenly'}}>
              <Image source={item.fimage} style={styles.imgClothe}/>
              {/* <View style={styles.imgClothe}>
              </View> */}
              <Text 
              style={{
                  margin:20,
                  fontSize:11,
                  fontWeight:'300',
                  marginTop:1
              }}>
                  {item.about}
              </Text>

{/* ------------------KEPT THE SHOW BUTTON HERE CAUSE I CAN BE ABLE TO PRESS IT AND IT WILL POP SOMETHING------------------------- */}
               <Pressable onPress={()=>{navigation.navigate("Display", {
                                              id:item.fid,
                                              about:item.about,
                                              price:item.price,
                                              discount:item.discount,
                                              dispric:item.disprice,
                                              image:item.fimage,
                                              setnumshw:setnumshw
               })}} activeOpacity={0}>
                      <View style={styles.purchasebut}>
                          {/* <Text>
                              eye {item.id}
                          </Text> */}
                          <Image source={eye} style={{
                                  height:20,
                                  width:20
                          }}/>
                      </View>
                  </Pressable>
              <View style={{
                      width:80, 
                      marginTop:-48 , 
                      // backgroundColor:'lightblue', 
                      left:10, 
                      height:30, 
                      borderRadius:5,
                      borderColor:"red",
                      borderWidth:0.5}}>
                  <Text style={styles.discounti}>
                      {item.discount}
                  </Text>
                  <Text style={{
                      // margin:20,
                      fontSize:12,
                      marginTop:-18,
                      marginLeft:10
                  }}>
                      {"$"+item.price}
              </Text>
              </View>
                  
              <Text style={{
                      fontSize:20,
                      color:"orange",
                      marginTop:-3,
                      left:15,
                      fontWeight:"bold",
                  }}>
                  {item.disprice}
              </Text> 
          </View>
      </View>
     
  );
  }
  
    //    THIS IS THE REFRESHING SECITON BUT LET ME CHECK IT 
  const [refs , setRefs] = useState(false);
  const rerfs =()=>{
   setRefs(true)
   setRefs(false)
   return(
       <View style={{flex:1}}>
           <FlatList
               data={male}
               renderItem={renderItem}
               numColumns={2}
               showsVerticalScrollIndicator={false}
               keyExtractor={(item)=>item.id}
               scrollsToTop={true}
               style={{
                   // margin:10,
                   marginTop: -10,
                   // flex:1
               }}
               contentContainerStyle={styles.flatListContent}
               onRefresh={rerfs}
               refreshing={refs}
           />
       </View>
   )
  }

  const Ranshow = ()=>{
    return(
        <View>
            <FlatList
            data={randomi}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=>item.id}
            scrollsToTop={true}
            style={{
                // margin:10,
                marginTop: -10,
                // flex:1
            }}
            contentContainerStyle={styles.flatListContent}
            onRefresh={rerfs}
            refreshing={refs}
           />
        </View>
    )
  }

   //    IN CASE WHAT THE USER SEARCH FOR DOES NOT EXIST
  const NotFound = ()=>{
      return(
          <View style={
              {
                  height:'100%',
                  width:'100%',
                  justifyContent:'center',
                  alignItems:'center',
                  // backgroundColor:'black'
              }
          }>
              <Text style={
                  {
                      fontSize:20,
                      fontWeight:'bold'
                  }
              }>
                  Can't Find Item You Searched For
              </Text>
          </View>
      )
  }

   //    THE CONDITION TO SHOW IF THE ITEM BEEN SEARCHED CAN BE FOUND
  const Condition = ()=>{
  if(mappchk.length >0){
      return(
          <View>
              <Ranshow />
          </View>
      )
  } else {
      return(
          <View>
              <NotFound />
          </View>
      )
  }
  }

  // CODE BELOW WORKS FOR THE USE OF THE WHOLE DISPLAY SECTION
  return (
    <SafeAreaView style={styles.main}>
        <StatusBar />
        <Condition />
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    main:{
      height:'100%',
      width:'100%',
      alignItems:'center'
    },
    flatListContent:{
      paddingBottom: 20, // Add some bottom padding
    },
    // For the clothe designs
    simDesign:{
        borderWidth:1,
        margin:2,
        borderRadius:20,
        height:270,
        width:174,
        borderColor:'lightgray'
    },
    imgClothe:{
        height:173,
        width:170,
        margin:1, 
        borderRadius:20,
        justifyContent:'center',
        alignSelf:'center',
    },
    purchasebut:{
        borderRadius:20,
        borderWidth:0.5,
        width:60,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        marginTop:-8,
        left:-10,
    },
    discounti:{
      color:"red",
      alignSelf:"flex-end",
      marginTop:5,
      left:-3
    },
  })