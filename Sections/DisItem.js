import { 
            StyleSheet, 
            Text, 
            View ,
            SafeAreaView, 
            TouchableOpacity,
            Pressable,
            Image,
            Alert,
            ScrollView,
            StatusBar,
            ToastAndroid
            
       } from 'react-native'
import React, { useEffect, useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome.js';
import Clothedisplay from './Clothedisplay';
import { useRoute , useNavigation} from '@react-navigation/native';
import Toast, { ErrorToast } from 'react-native-toast-message';
import { confirmPayment } from '@stripe/stripe-react-native';
import Favourite from './Favourite';
// import { Toast } from 'react-native-toast-message';
export default function DisItem({
                        // THESE ARE PROPS NOT ANY USEFULL NAVIGAION OR STUFF
                                //THIS IS THE PROP FOR CART NUM
                                numshw ,
                                setnumshw ,

                                // THIS THE PROP ARR FOR CARTING
                                setCarR,
                                cartarr,
                                
                                // THIS TO SET THE FAVNUM
                                favnum,
                                setFavnum,

                                // THIS THE PROP ARR FOR FAV
                                favarr, 
                                setFavarr
                            }){
                            
    const route = useRoute();
    const navigation = useNavigation();
    // This is for getting the user info
    const { 
            id,
            image , 
            about , 
            price , 
            discount , 
            dispric ,
          } = route.params;

    //  heart color 
    const [hcolor , sethcolor] =useState("black")

    // State Varible for the passing for data
    const [quantity, setQuantity] = useState(1); 

    
    // THE STATE BELOW IS FOR THE SHOWING THE RED THING UP IN CART
    // ICON IN CLOTHEDISPLAY
    const [shwc , setshwc] = useState(false);
    // const [numshw , numsh]  = useState(1);

    const testarr = {
        id,
        image , 
        about , 
        price , 
        discount , 
        dispric ,
    }
    // useEffect(()=>{
    //     function run(){
    //         console.log(quantity);
    //         console.log("This is id "+id);
    //         console.log("The passing worked "+ numshw);
    //         console.log(cartarr)
    //         console.log(testarr)
    //     }
    //     run();
    // })

    // FOR THE MESSAGE POP UP TO SHOW INCASE THEIR ARE SOME ERROR
    const Popup =()=>{
        ToastAndroid.showWithGravity(
            id + " Already Added To Cart!",
            30,
            15,
        )
    }
    // THIS IS FUNCTION FOR THE ADDING TO FAV ARRAY
    const handleButtonClick = () => {

        // FOR FILTERING THE DATA WHEN IT'S BEEN ADDED
        if (!favarr.some(item => item.id === testarr.id)){
            setFavarr([...favarr , testarr ])
            setFavnum(favnum + 1)
        }else{
            Popup();
        }

    };

    // FUNCTION TO ADD TO ARRAY I MEAN FINALLY FOUND HOW
  const addToArray = () => {

    // FOR FILTERING THE DATA WHEN IT'S BEEN ADDED
    if (!cartarr.some(item => item.id === testarr.id)){
        setCarR([...cartarr , testarr ]);
        setnumshw(numshw + 1);
    }else{
        Popup();
    }
  };
      
    
  return (
    <SafeAreaView style={styles.main} >
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.dissec}>
            <View style={{ flexDirection:'row',}}>
                <Image source={image} style={styles.images}/> 
                <TouchableOpacity onPress={()=>{[ {redrun:sethcolor("red")}, {addig: handleButtonClick() }]}} activeOpacity={0.5}>

                                                {/* INCASE YOU DON'T WISH TO USE THE [] LIKES */}
                                                {/* 
                                                {{
                                                    sethcolor("red")
                                                    // handleButtonClick , 
                                                    setFavnum(favnum + 1)
                                                }}}
                                                */}
                    <View style={styles.hert}>
                        <Icon color={hcolor} name='heart' size={30}/>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.aboutText}>
                {about}
            </Text>
            <Text style={
                {
                    fontSize:25,
                    fontWeight:'500',
                    alignSelf:'flex-start',
                    paddingHorizontal:10
                }
            }>
                Discription
            </Text>
            <Text style={styles.simpabut}>
                Just a simple clothe Disign Clothe that can be used for outting and flexing any time the user wishes to do it 
            </Text>
            
        <View style={
            {
                flexWrap:'wrap',
                flexDirection:'column',
                alignItems:'baseline',
                // paddingTop:120
            }
        }>
            <View style={styles.dicountstyl}>
                <Text 
                    style={
                        {
                            fontSize:20,
                            fontWeight:'700'
                        }
                    }>Original Price: {"$"+price}</Text>
                <Text style={
                    {
                        color:'red',
                        fontSize:12,
                        fontWeight:'700'
                    }
                }>{discount}</Text>
            </View>
            <View style={styles.priceContainer}>
            <Text style={styles.priceText}> Price {dispric}</Text>
                                                             {/* Alert.alert("Payment on the wayx"), */}
               <Pressable style={styles.cartbut} onPress={()=>{ setshwc(true), addToArray()}}>
                    <Text style={styles.txtcartbut}>
                        Add Cart 
                    </Text>
                </Pressable> 
            </View>
        </View>
        </View>
        </ScrollView>
        <Toast />
    </SafeAreaView> 
  )
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        paddingTop: StatusBar.currentHeight && 43,
        flexGrow:1,
        flexShrink:1,
    },
    topi: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 33,
        paddingBottom: 10,
        flexShrink:1
    },
    dissec: {
        flex: 1, 
        alignItems: 'center',
        padding: 5,
        // borderWidth:1
    },
    images: {
        height: 530, 
        width: '100%', 
        borderRadius: 20,
    },
    hert:{
        backgroundColor:'lightgray',
        height:55,
        width:55,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:-70,
        margin:5
    },
    contentContainer: {
        width: '100%',
        marginBottom: 20,
    },
    aboutText: {
        fontSize: 23,
        fontWeight: '800',
        // fontStyle: 'italic',
        marginBottom: 1,
        alignSelf:'flex-start'
    },
    descriptionTitle: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 5,
    },
    descriptionText: {
        color: 'gray',
        fontSize: 15,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        paddingHorizontal:7,
    },
    priceText: {
        fontSize: 30,
        fontWeight: '700',
        color: 'orange'
    },
    cartbut: {
        backgroundColor: 'black',
        height: 50,
        width: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtcartbut: {
        color: 'white',
        fontWeight: '800',
        fontSize: 21
    },
    dicountstyl:{
        flexDirection:'row' , 
        justifyContent:'space-between', 
        borderWidth:1 , 
        borderColor:'red',
        padding:3 , 
        alignContent:'space-between', 
        borderRadius:20,
        alignSelf:'flex-start',
        paddingHorizontal:10
    },
    simpabut:{
        fontSize:14,
        color:'gray',
        fontWeight:'450'
    }
})