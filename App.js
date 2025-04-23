import { View, Text, SafeAreaView, StyleSheet, StatusBar, Pressable, Alert } from 'react-native'
import React, { useState } from 'react';
//  FOR THE NAVIGATION BAR THE IN THE ANROID PHONE
import * as NavigationBar from 'expo-navigation-bar'

//  FILES THAT ARE BEEN IMPORT FOR THE USE
import HomeSec from './Sections/HomeSec';
import Clothedisplay from './Sections/Clothedisplay';
import DisItem from './Sections/DisItem';
import Data from './Sections/Data';
import Cart from './Sections/Cart';

//  SOON TO REMOVE THE COLLECTION ISSUES
import Collect2019 from './Sections/Collections/Collect2019';
import Collect2021 from './Sections/Collections/Collect2021';
import Collect2024 from './Sections/Collections/Collect2024';

//  SOON TO REMOVE ALSO LET ME CHECK THE NAVIGATION DUMMY PART I DID 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Purchase from './Sections/Purchase';
import Female from './Sections/Female';
import Male from './Sections/Male';

// THIS IS FOR THE SIMPLE ICON

import Icon from 'react-native-vector-icons/FontAwesome.js';
import Favourite from './Sections/Favourite';
import LogicalSearch from './SearchLogic/LogicalSearch';


export default function App() {
  // Create a stack navigator
  const Stack = createNativeStackNavigator();
  const visibilty = NavigationBar.useVisibility();

  
  React.useEffect(() => {
  
    
    async function navbar() {
      // const color = await NavigationBar.getBackgroundColorAsync();

      // THIS IS FOR THE NAVIGATION TO BE ABLE TO TURN WHITE
      NavigationBar.setBackgroundColorAsync("white");

      // THIS IS FOR THE BAR ITEM TO BE ABLE TO TURN BLACK
      NavigationBar.setButtonStyleAsync("dark");

      // FOR POSITIONING LITTLE ICON IN THE NAVIGATION BAR
      NavigationBar.setPositionAsync("relative")
    }

    navbar();
  }, [])

  // THE USESTATE IS FOR GLOBAL FOR THE CARTING ICON IT THE
  // CLOTHEDISPLAY SECTION 
  const [numshw, setnumshw] = useState(0);
  // THE GLOBAL ARRAY FOR THE FAV SECTION WHEN ADDCART BEING
  // CLICKED
  const [cartarr, setCarR] = useState([]);

  // THE ARRAY BELOW IS FOR THE FAVOURITE SECTION
  const [favarr, setFavarr] = useState([])
  const [favnum , setFavnum] = useState(0);

    // THE ARRAY FOR TESTING 
    const [data , setDa] = useState([])
 
  // HEART HEADER CODE BELOW
  const HeartHeaderit =()=>{

     // THE CALLING IS FOR THE NAVIGATION BUTTONS BELOW
  const navigation = useNavigation();
    return (
      <View style={{flexDirection:'row', paddingHorizontal:1}}>
        <Pressable style={styl.headerForRight} onPress={() => navigation.navigate("Favourite")}>
          <Icon color={'red'} name='heart' size={20} />
        </Pressable>
        {
          favnum > 0 && 
          <View style={styl.heartNotification}>
                <Text style={{ color: "white", alignSelf: "center", fontWeight: "bold" }}>
                    {favnum}
                </Text>
          </View>
        }
      </View>
    )
  }

  // TO CLEAR ALL THE ARRAY IN THE CARTING SECTION
    const ClearCartArr =()=>{
      return(
        <View>
          <Pressable onPress={()=>{cartarr.splice(0 , 100),setnumshw(0) }}>
            <Text style={{color:'red', fontWeight:'600', fontSize:18 }}>
              Clear All
            </Text>
          </Pressable>
        </View>
      )
    }

    // TO CLEAR ALL THE ARRAY IN THE CARTING SECTION
    const ClearFavArr =()=>{
      return(
        <View>
          <Pressable onPress={()=>{ favarr.splice(0, 100), setFavnum(0)}}>
            <Text style={{color:'red', fontWeight:'600', fontSize:18 }}>
              Clear All
            </Text>
          </Pressable>
        </View>
      )
    }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={
            {
              statusBarStyle: 'dark',
              statusBarBackgroundColor: 'white',
              headerTransparent:true
            }
          }
          >

            {/* THIS IS THE PLACE THE SCREEN STARTS FROM */}
          <Stack.Screen
            name='Home'
            component={HomeSec}
            options={{
              headerTitle: "",
              // headerTransparent: true,
            }}
          />

          <Stack.Screen
            name='Market'
            component={() => {
              return (
                <Clothedisplay
                  numshw={numshw}
                  setnumshw={setnumshw}
                />
              )
            }}
            options={
              {
                headerTitleStyle: {
                  fontSize: 25,
                  fontWeight: 'bold'
                },
                headerTransparent: true,
                headerRight: () => {
                  return(
                  <HeartHeaderit />
                  )
                }
              }
            }
          />

          <Stack.Screen
            name='Collection 2019'
            component={Collect2019}
            options={
              {
                headerTransparent: true,
                animation: 'fade'
              }
            }
          />

          <Stack.Screen
            name='Collection 2021'
            component={Collect2021}
            options={
              {
                headerTransparent: true,
                animation: 'fade',
              }
            }
          />

          <Stack.Screen
            name='Collection 2024'
            component={Collect2024}
            options={
              {
                headerTransparent: true,
                animation: 'fade'
              }
            }
          />

          <Stack.Screen
            name='Display'
            component={
              () => {
                return (
                  <DisItem

                    // THIS PASSING IS TO SHOW HOW MANY ITEM HAVE BEEN ADDED FOR CARTING
                    numshw={numshw}
                    setnumshw={setnumshw}

                    // THIS PASSING IS FOR CARTING ARRAY 
                    cartarr={cartarr}
                    setCarR={setCarR}

                    // THE PASSING BELOW IS FOR THE USE FAVOURITE BUTTON
                    favnum={favnum}
                    setFavnum={setFavnum}

                    // THE PASSING BELOW IS FOR THE ARRAY 
                    favarr={favarr}
                    setFavarr={setFavarr}
                  />
                )
              }
            }
            options={
              {
               headerTransparent: true,
                title: 'About',
                animation: 'fade_from_bottom',
                animationDuration: 1000
              }
            }
          />

          <Stack.Screen
            name='Carting'
            component={
              () => {
                return (
                  <Cart
                    numshw={numshw}
                    setnumshw={setnumshw}
                    cartarr={cartarr}
                  />
                )
              }
            }

            options={
              {
                headerTransparent: true,
                title: 'Cart',
                headerRight: () => {
                  return(
                  <ClearCartArr />
                  )
                }
              }
            }
          />
          <Stack.Screen
            name='Purchase'
            component={Purchase}
          />
          <Stack.Screen
            name='Data'
            component={Data}
          />

          <Stack.Screen 
            name='Favourite'
            component={
              ()=>{return (
              <Favourite 
                favarr={favarr}
                setFavarr={setFavarr}

                // THIS PASSING IS FOR CARTING ARRAY 
                cartarr={cartarr}
                setCarR={setCarR}
              />)}}
            options={
              {
                headerTransparent: true,
                headerRight: () => {
                  return(
                  <ClearFavArr />
                  )
                }
              }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );


}

const styl = StyleSheet.create({
  headerForRight: {
    backgroundColor: 'lightgray',
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heartNotification:{
    backgroundColor: "red",
    height: 20,
    borderRadius: 50,
    width: 20,
    bottom:-7,
    position:'absolute'
  }
})