import { 
        StyleSheet, 
        Text, 
        View , 
        SafeAreaView , 
        StatusBar, 
        FlatList,
        Image,
        Pressable, 
        Modal
      } from 'react-native'
import React from 'react'
// {flexDirection:'row', borderWidth:1,borderColor:'red',flexShrink:1, flexWrap:'wrap'}


export default function Favourite({ favarr , 
                                    setFavarr, 
                        // THIS PASSING IS FOR CARTING ARRAY 
                                    cartarr,
                                    setCarR, testarr}) {

  React.useEffect(()=>{
    function checking(){
      console.log(favarr);
      console.log("Ok..")
    }
    checking();
  })

  // Deleting item for the user
  function detele(){
    setFavarr(favarr.filter((todo) => todo !== favarr));
  }


  // FUNCTION THAT IS USED FOR TO PASS THE DATA AND CHECK 
  // IF IT'S ALREADY ADDED TO CAARR THE I CAN TEST IT  
  // function sendtocar(){
  //   if (!cartarr.some(item => item.id === testarr.id)){
  //     setCarR([...cartarr , testarr ])
  //   }else{
  //       Popup();
  //   }
  // }
  const renderItem =({ item })=>{
    return(
      <View>
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardimg}/>
          <View style={{flexDirection:'column', marginHorizontal:10, flexShrink:1}}>
                <Text style={{fontSize:17,fontWeight:'800'}}>{item.about}</Text>
              <View style={styles.discountln}>
                <Text style={{padding:5, fontWeight:'800', fontSize:15}}>{item.price}</Text>
                <Text style={{color:"red"}}>{item.discount}</Text>
              </View>
            {/* THIS IS THE BUTTON SECTION */}
            <View style={{flexDirection:'row', alignSelf:'flex-end', bottom:5}}>
                <Pressable style={styles.buton} onPress={()=>detele()}>
                  <Text style={{color:'white'}}>
                    x
                  </Text>
                </Pressable>

                <Pressable style={styles.buton} onPress={()=>{sendtocar()}}>
                  <Text style={{color:'white'}}> 
                    ca
                  </Text>
                </Pressable>
            </View>
        </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.main}>
      <SafeAreaView>
        <FlatList 
          data={favarr}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1, 
    paddingTop:StatusBar.currentHeight,
    backgroundColor:'white',
  },
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
    backgroundColor:'black',
    borderWidth:1,
    height:40,
    width:80,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:5
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