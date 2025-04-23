import {  StyleSheet, 
          Text, 
          View , 
          FlatList , 
          Image, 
          Pressable,
          Alert,
          StatusBar,
          SafeAreaView
       } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';


//---------ME USING THE PROP WITH DESTUCTING IT 
export default function Male({ setnumshw , gloinp}){
    const navigation = useNavigation();
  // FOR THE DISPLAYING METHOD
  const eye = require("../Sections/Fashioncloth/eye.png");
    
  const male=[
    {
        id:"1r", 
        about:"Baggy Jeans Good For flexing",
        price:220,
        discount:"-10%",
        disprice:"$198",
        image:require('../Sections/Clothes/MaleClothei.jpeg')
    },
    {
        id:"4r",
        about:"Beach Outfit for Summer Outting",
        price:120,
        discount:"-20%",
        disprice:"$96",
        image:require('../Sections/Clothes/MaleClotheii.jpeg')
    },
    {
        id:"7r",
        about:"Swagy baggy for cool teen outting",
        price: 310,
        discount:"-15%",
        disprice:"$263.5",
        image:require('../Sections/Clothes/MaleClotheiii.jpeg')
    },
    {
        id:"8r",
        about:"Short baggy for Fashion show walk",
        price: 130,
        discount:"-30%",
        disprice:"$91",
        image:require('../Sections/Clothes/MaleClotheiv.jpeg')
    },
    {
        id:"9r",
        about:"Shorts for out walking for summer",
        price: 140,
        discount:"-25%",
        disprice:"$105",
        image:require('../Sections/Clothes/MaleClothev.jpeg')
    },
    {
        id:"10r",
        about:"Short Drip for Dates and Beach",
        price: 150,
        discount:"-20%",
        disprice:"$120",
        image:require('../Sections/Clothes/MaleClothevi.jpeg')
    }
  ]

    // THIS FOR FILTERING THE INP FROM THE USER AND STUFF 
    const randomi = male.filter(item => item.about.toLowerCase().includes(gloinp.toLowerCase()));
    // LOOPING OF DATA SO THAT I CAN KNOW IF IT'S EMPTY ARRAY
    const mappchk = randomi.map((item)=>(item.about)); 
 useEffect(()=>{

    function loopincheck(){
        // console.log(male.map((item)=>item.id));
        // console.log(male.map((item)=>item.price))
    }
    loopincheck();
 })
  // FOR RENDERITEM OF FLATLIST MALE
  
  const renderItem = ({item, index})=>{
    return(
      <View 
      style={styles.simDesign}
      >
          <View style={{alignContent:'space-evenly'}}>
              <Image source={item.image} style={styles.imgClothe}/>
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
               <Pressable onPress={()=>{navigation.navigate("Display",
                                        {
                                            id:item.id,
                                            about:item.about,
                                            price:item.price,
                                            discount:item.discount,
                                            dispric:item.disprice,
                                            image:item.image,
                                            setnumshw:setnumshw
                                        }
               )}  } activeOpacity={0}>
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
};


// <<<<<<<<<<<<<<<<<<<<<<<<-----STYLING FOR THE COMPONENT----->>>>>>>>>>>>>>>>>  \\
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