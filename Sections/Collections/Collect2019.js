import { 
          StyleSheet, 
          Text,
          View,
          SafeAreaView,
          FlatList,
          Image,
          Pressable,
          Alert,
          StatusBar
       } from 'react-native'

import React , { useState } from 'react'


export default function Collect2019({ navigation , route}) {
  const {
    setnumshw ,
    numshw
  } = route.params

  navigation.setOptions
    // For the eye image 
    const eye = require('../Fashioncloth/eye.png');

    // This is the array for the Collection of 2019
    const colxxxi = ([
          {
            id:"1ci", 
            about:"2019 Outing Drip for flexing",
            price: 220,
            discount:"-10%",
            disprice:"$198",
            image:require('../Collection2019/Collection2019i.jpg')
        },
        {
            id:"2ci",
            about:"2019 Female Dressing for Fashion Outting",
            price: 120,
            discount:"-20%",
            disprice:"$96",
            image:require('../Collection2019/Collection2019iv.jpg')
        },
        {
            id:"3ci",
            about:"Swagy baggy for Cool Female Outing 2019",
            price: 310,
            discount:"-15%",
            disprice:"$263.5",
            image:require('../Collection2019/Collection2019vi.jpg')
        },
        {
            id:"4ci",
            about:"Black Men Full drip 2019 Balanciaga",
            price: 130,
            discount:"-30%",
            disprice:"$91",
            image:require('../Collection2019/Collection2019ii.jpg')
        },
        {
            id:"5ci",
            about:"Short Wear with Baggy Trousers for Female 2019",
            price: 140,
            discount:"-25%",
            disprice:"$105",
            image:require('../Collection2019/Collection2019v.jpg')
        },
        {
            id:"6ci",
            about:"Simple Student Drip 2019 for school case",
            price: 150,
            discount:"-20%",
            disprice:"$120",
            image:require('../Collection2019/Collection2019iii.jpg')
        }
    ]);

    React.useEffect(()=>{
      console.log("This is the number "+numshw);
      function run(){
        setnumshw(numshw + 1);
      }
      run();
    })

    // This is for the looping displaying of iTems
    const renderItem =({ item })=>{
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
                <Pressable onPress={()=>{navigation.navigate("Display", {
                                      id:item.id,
                                      about:item.about,
                                      price:item.price,
                                      discount:item.discount,
                                      dispric:item.disprice,
                                      image:item.image,
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
    };

    // Header for the collection
    const Header =()=>{
      return(
        <View style={styles.header}>
          <Pressable onPress={()=>{Alert.alert("This is the back button")}}>
            <Image  source={require('../Fashioncloth/backi.png')} style={styles.back}/>
          </Pressable>
          <Text style={styles.headerTxt}>
              Collection 2019
          </Text>
        </View>
      );
    };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar animated={true}/>
        {/* <Header/> */}

        {/* THIS IS FOR THE WHOLE LOOPING OF THE ARR */}
        <View style={styles.flatlist}>
          <FlatList 
          data={colxxxi}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item)=>item.id}
          contentContainerStyle={styles.flatListContent}

          // FOR THE SCROLLING PURPOSE
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          />
        </View>
    </SafeAreaView>
  )
}


//  THIS IS THE STYLING SECTION
  const styles = StyleSheet.create({
        main:{
          height:'100%',
          width:'100%',
          backgroundColor:'white',
        },
        back:{
          height:50,
          width:50,
          alignSelf:'flex-start',
          flexShrink:1,
        },
        header:{
          flexGrow:1,
          flexShrink:1,
          flexBasis:'auto',
          backgroundColor:'gray',
          justifyContent:'space-between',
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
          flexDirection:'row',
          paddingHorizontal:10
        },
        headerTxt:{
          fontSize:20,
          fontWeight:'600',
          color:'white',
          alignSelf:'flex-end',
          position:'relative',
          top:-12
        },

        // STYLING FOR THE FLAT-LIST
        flatlist:{
          height:'100%',
          width:'100%',
          paddingTop:50,
          flexGrow:1,
          flexShrink:1,
          alignItems:'center'
        },
        flatListContent:{
          paddingBottom: 20,
        },

        // STYLING FOR THE CLOTHE DESIGNS
        simDesign:{
          flexGrow:1,
          flexShrink:1,
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