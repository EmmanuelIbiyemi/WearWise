import {    
            FlatList, 
            StyleSheet, 
            Text, 
            View,
            Image,
            Pressable,
            StatusBar
       } from 'react-native'
import {React , useEffect, useRef, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

    export const random =[
        {
            id:"1r", 
            about:"Baggy Jeans Good For flexing",
            price: 220,
            discount:"-10%",
            disprice:"$198",
            rimage:require('../Sections/Clothes/MaleClothei.jpeg')
        },
        {
            id:"2r",
            about:"This is a simple clothe for female",
            price: 358,
            discount:"-21%",
            disprice:"$282.82",
            rimage:require('../Sections/Clothes/FemaleClothei.jpeg')
        },
        {
            id:"3r",
            about:"This is a simple clothe for female",
            price: 120,
            discount:"-20%",
            disprice:"$100",
            rimage:require('../Sections/Clothes/FemaleClotheii.jpeg')
        },
        {
            id:"4r",
            about:"Beach Outfit for Summer Outting",
            price: 120,
            discount:"-20%",
            disprice:"$96",
            rimage:require('../Sections/Clothes/MaleClotheii.jpeg')
        },
        {
            id:"5r",
            about:"This is a simple clothe for female",
            price: 600,
            discount:"-30%",
            disprice:"$420",
            rimage:require('../Sections/Clothes/FemaleClotheiv.jpeg')
        },
        {
            id:"6r",
            about:"This is a simple clothe for female",
            price: 300,
            discount:"-20%",
            disprice:"$280",
            rimage:require('../Sections/Clothes/FemaleClothev.jpeg')
        },
        {
            id:"7r",
            about:"Swagy baggy for cool teen outting",
            price: 310,
            discount:"-15%",
            disprice:"$263.5",
            rimage:require('../Sections/Clothes/MaleClotheiii.jpeg')
        },
        {
            id:"8r",
            about:"Short baggy for Fashion show walk",
            price: 130,
            discount:"-30%",
            disprice:"$91",
            rimage:require('../Sections/Clothes/MaleClotheiv.jpeg')
        },
        {
            id:"9r",
            about:"Shorts for out walking for summer",
            price: 140,
            discount:"-25%",
            disprice:"$105",
            rimage:require('../Sections/Clothes/MaleClothev.jpeg')
        },
        {
            id:"10r",
            about:"Short Drip for Dates and Beach",
            price: 150,
            discount:"-20%",
            disprice:"$120",
            rimage:require('../Sections/Clothes/MaleClothevi.jpeg')
        }
        // ARRAY FOR USER OTHER PROGRAMMER TO UNDERSTAND
    ]

export default function Random({  numshw  , setnumshw , gloinp}) {
    const navigation = useNavigation();
  // FOR THE DISPLAYING METHOD
  const eye = require("../Sections/Fashioncloth/eye.png");
    const scrolling = useRef({});
    const [ratemp , setRa] = useState([]);
  // ARRAY FOR THE DATA 
//   export const random =[
//     {
//         id:"1r", 
//         about:"Baggy Jeans Good For flexing",
//         price: 220,
//         discount:"-10%",
//         disprice:"$198",
//         rimage:require('../Sections/Clothes/MaleClothei.jpeg')
//     },
//     {
//         id:"2r",
//         about:"This is a simple clothe for female",
//         price: 358,
//         discount:"-21%",
//         disprice:"$282.82",
//         rimage:require('../Sections/Clothes/FemaleClothei.jpeg')
//     },
//     {
//         id:"3r",
//         about:"This is a simple clothe for female",
//         price: 120,
//         discount:"-20%",
//         disprice:"$100",
//         rimage:require('../Sections/Clothes/FemaleClotheii.jpeg')
//     },
//     {
//         id:"4r",
//         about:"Beach Outfit for Summer Outting",
//         price: 120,
//         discount:"-20%",
//         disprice:"$96",
//         rimage:require('../Sections/Clothes/MaleClotheii.jpeg')
//     },
//     {
//         id:"5r",
//         about:"This is a simple clothe for female",
//         price: 600,
//         discount:"-30%",
//         disprice:"$420",
//         rimage:require('../Sections/Clothes/FemaleClotheiv.jpeg')
//     },
//     {
//         id:"6r",
//         about:"This is a simple clothe for female",
//         price: 300,
//         discount:"-20%",
//         disprice:"$280",
//         rimage:require('../Sections/Clothes/FemaleClothev.jpeg')
//     },
//     {
//         id:"7r",
//         about:"Swagy baggy for cool teen outting",
//         price: 310,
//         discount:"-15%",
//         disprice:"$263.5",
//         rimage:require('../Sections/Clothes/MaleClotheiii.jpeg')
//     },
//     {
//         id:"8r",
//         about:"Short baggy for Fashion show walk",
//         price: 130,
//         discount:"-30%",
//         disprice:"$91",
//         rimage:require('../Sections/Clothes/MaleClotheiv.jpeg')
//     },
//     {
//         id:"9r",
//         about:"Shorts for out walking for summer",
//         price: 140,
//         discount:"-25%",
//         disprice:"$105",
//         rimage:require('../Sections/Clothes/MaleClothev.jpeg')
//     },
//     {
//         id:"10r",
//         about:"Short Drip for Dates and Beach",
//         price: 150,
//         discount:"-20%",
//         disprice:"$120",
//         rimage:require('../Sections/Clothes/MaleClothevi.jpeg')
//     }
//       // ARRAY FOR USER OTHER PROGRAMMER TO UNDERSTAND
//   ]
    useEffect(()=>{
        console.log("!!!! I was able to pass it "+ numshw);
        // setnumshw(1);
        console.log(gloinp);
    })

    // THIS FOR FILTERING THE INP FROM THE USER AND STUFF 
    const randomi = random.filter(item => item.about.toLowerCase().includes(gloinp.toLowerCase()))
    
    const ranShow = ()=>{
        setRa([...ratemp , ...randomi]);
    }
    const pushin = (id)=>{
       const element = scrolling.current[id];
       if (element){
        scrolling.scrollIntoView({behavior:'smooth'});
       }
    }

    // LOOPING OF DATA SO THAT I CAN KNOW IF IT'S EMPTY ARRAY
    const mappchk = randomi.map((item)=>(item.about)); 

   const renderItem= ({ item })=>{
        return(
            <View 
            style={styles.simDesign}
            >
                <View style={{alignContent:'space-evenly'}}>
                    <Image source={item.rimage} style={styles.imgClothe}/>
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

    {/* --------------------  IT CAN MOVE THE VALUES TO THE DISPLAY SECTION  ----------------------- */}
                        <Pressable onPress={()=>{navigation.navigate("Display",
                                                    {
                                                        id:item.id,
                                                        about:item.about,
                                                        price:item.price,
                                                        discount:item.discount,
                                                        dispric:item.disprice,
                                                        image:item.rimage,
                                                        numshw:numshw,
                                                        setnumshw:setnumshw
                                                    })
                                                }
                                           }
                        >
                            <View style={styles.purchasebut}>
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
                data={random}
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

//    THE FUNCITON FOR THE LOOPING OF THE SEARCH SECTION
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
//  CODE FOR EASY UNDERSTANDING FOR USER TO GET
  return (
    <View style={styles.main}>
        <StatusBar />
       <Condition />
    </View>
  )
}



const styles = StyleSheet.create({
  main:{
   height:'100%',
   width:'100%',
   alignItems:'center',
   flexGrow:1,
   flexShrink:1
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
    borderColor:'lightgray',
    flexShrink:1
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