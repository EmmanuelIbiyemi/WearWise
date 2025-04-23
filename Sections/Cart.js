
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  FlatList,
  Image,
  useWindowDimensions,
  Alert,
  StatusBar,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome.js';

import { StripeContainer } from '@stripe/stripe-react-native';

import { useNavigation } from '@react-navigation/native';
export default function Cart({ cartarr }) {

  const navigation = useNavigation();

  const [num , setNum]  = useState(0);
  const [reff, setref] = useState(false);
  
  // if (num < 0) {
  //   return(
  //     <View style={
  //       {
  //         flex:1,
  //         justifyContent:'center',
  //         alignItems:'center'
  //       }
  //     }>
  //     <ActivityIndicator 
  //       size={60}
  //       color={'green' || 'blue' || 'red'}
  //     />
  //       <Text 
  //       style={
  //         {
  //           fontSize:20,
  //           fontWeight:'700',
  //         }
  //       }>
  //         Sorry Go Back
  //       </Text>
  //     </View>
  //   )
  // }
  // else{
  //   console.log("Keep On Working")
  // }
  const totalPrice = cartarr.reduce((sum , item) => sum + item.price , 0);
  const loop = cartarr.map((item)=> item.price);
  const total = totalPrice * 5/100;
  const totally = totalPrice - total
    React.useEffect(()=>{
      console.log(cartarr);
      console.log(totalPrice);
      console.log(loop);
      console.log(totally)
    })

  function notify() {
    ToastAndroid.showWithGravity(
      "Payment Successfull",
      300,
      30,
      ToastAndroid.TOP = 200
    )
  }

  // LOOPING THROUGH ALL THE DATA AND THEN DESIGNING IT
  const renderItem= ({item})=>{
    return(
      <View>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardimg}/>
          <View style={{flexDirection:'column', marginHorizontal:10, flexShrink:1}}>
                <Text style={{fontSize:17,fontWeight:'800'}}>{item.about}</Text>
              <View style={styles.discountln}>
                <Text style={{padding:5, fontWeight:'800', fontSize:15}}>{item.price}</Text>
                <Text style={{color:"red", fontWeight:'bold'}}>{item.discount}</Text>
              </View>
            {/* THIS IS THE BUTTON SECTION */}
            <View style={{flexDirection:'row', alignSelf:'flex-end', bottom:5, borderWidth:1, borderRadius:50, borderColor:'lightgray'}}>
                <Pressable style={styles.buton} onPress={()=>{setNum(num-1)}}>
                  <Text style={{color:'black', fontWeight:'900', fontSize:15}}>
                    {/* {item.id} */}
                    -
                  </Text>
                </Pressable>
                  {
                    <Text style={{alignSelf:'center', paddingHorizontal:6, fontWeight:'bold'}}>
                      {num}
                    </Text>
                  }
                <Pressable style={[styles.buton, {paddingLeft:2}]} onPress={()=>{setNum(num+1)}}>
                  <Text style={{color:'black', fontWeight:'900', fontSize:15}}> 
                    {/* {item.id} */}
                    +
                  </Text>
                </Pressable>
            </View>
        </View>
        </View>
      </View>
    );
  }

  // FUNCTION FOR THE USE OF THE PRODUCT DISPLAY SECTION
  const ProductDis = () => {
    return(
      <SafeAreaView style={{flexGrow:1, flexShrink:1, height:'70%', paddingTop:13}}>
        <FlatList 
            data={cartarr}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    )
  };

  // THE FUNCTION FOR WHERE THE PAYMENT SECTION BEEN DESIGNED
  const PaymentSec = () => {
    return (
      <>
        {/* THE CODE BELOW IS FOR THE MODAL PAYMENT SECTION */}
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <View style={styles.innerModal}>

          <View style={{flexDirection:'row'}}>
          <View style={{ paddingHorizontal:20, paddingTop:10}}>
            <View>
              <Text style={styles.firstPaytxt}>
                Price 
              </Text>
            </View>
            <View >
              <Text style={[styles.firstPaytxt,{paddingTop:5}]}>
                Fee Delivary 
              </Text>
            </View>
            <View >
              <Text style={[styles.firstPaytxt,{paddingTop:5}]}>
                Discount
              </Text>
            </View>

            <View style={{ flexDirection: 'row', borderTopColor: 'white', borderTopWidth: 1, marginTop: 20 , marginHorizontal:20}}>
              <Text style={styles.firstPaytxt}>
                Total 
              </Text>
            </View>
          </View>
          <View style={{ flexGrow:1, paddingHorizontal:20, paddingTop:10}}>
              <Text style={[styles.secPayTxt, {color:'green'}]}>
                ${totalPrice}
              </Text>
              <Text style={[styles.secPayTxt, {color:'red'}]}>
                $10
              </Text>

              <Text style={[styles.secPayTxt, {color:'green'}]}>
                {" -5%"}
              </Text>
              <Text style={[styles.secPayTxt, {color:'green', borderTopWidth:1}]}>
                ${totally}
              </Text>
          </View>

          </View>

          {/* THIS IS FOR THE PAYMENT BUTTON FOR STRIPE */}
          <Pressable style={styles.payButton} onPress={() => { notify() , navigation.navigate("Purchase")}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              Payment
            </Text>
          </Pressable>
        </View>
      </>
    )
  };


  return (
    <View style={styles.main}>
      <SafeAreaView>
        <ProductDis />
        <PaymentSec />
      </SafeAreaView>
    </View>
  )
}


// THE STYLING SECTION
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
  innerModal: {
    height: '30%',
    width: '100%',
    backgroundColor: 'lightgray',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    flexGrow:1,
    flexShrink:1
  },
  payButton: {
    backgroundColor: "orange",
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flexShrink: 1,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center'
  },
  firstPaytxt: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
    justifyContent: 'space-between',
    alignSelf: 'flex-start'
  },
  secPayTxt: {
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'flex-end',
    // paddingLeft: 150
  },
  // ---------THE STYLING BELOW IF FOR THE ITEM IN CARTING -------- //
  card:{
    flexDirection:'row',
    marginTop:15,
    borderColor:'lightgray',
    borderWidth:1,
    borderRadius:20,
    margin:15
  },

  cardimg:{
    // flexShrink:1,
    height:120,
    width:100,
    borderRadius:20,
    margin:10,
    flexShrink:1
  },
  buton:{
    // backgroundColor:'black',
    borderColor:'lightgray',
    borderWidth:1,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  discountln:{
    flexDirection:'row' ,
    borderWidth:1 , 
    borderColor:'red',
    padding:3 ,
    borderRadius:20,
    alignSelf:'flex-start',
    paddingHorizontal:10,
    margin:9
  }
})