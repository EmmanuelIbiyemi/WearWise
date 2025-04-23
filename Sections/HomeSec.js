import { StyleSheet, 
          Text, 
          View, 
          SafeAreaView,
          FlatList,
          Image,
          TouchableOpacity,
          Animated,
          StatusBar,
          useWindowDimensions
        } from 'react-native'
import {  memo, React, useEffect , useRef , useState  } from 'react'


export default function HomeSec({ navigation }) {
  const width = useWindowDimensions().width;


  // FOR THE AUTO SCROLL AMOUNG THE IMAGES 
  const flatlistRef = useRef();

  // Getting the dimension of the code 
  const [activeindex , setActiveindex] = useState(0);
  useEffect(()=>{
    // if activeindex === last index --> jump back to the first index 
    // else activeindex + 1

   let interval = setInterval(() => {
      if (activeindex === images.length - 1){
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      }
      else{
        flatlistRef.current.scrollToIndex({
          index: activeindex + 1,
          animation: true,
      });
      }
    }, 2000);

    return ()=>clearInterval(interval);
  });

    const getItemLayout = (data , index)=> ({
      length:width,
      offset:width * index, // for first image - 300 * 0 =0pixels, 300 * 1= 300
      index: index
    });
  // Handle Scroll 
  const handle = (event)=>{
    // Get the Scroll position
      const position  = event.nativeEvent.contentOffset.x;
      console.log({position})
    // Get the index of current active item
    const index = position / width;

    // Screen Width for vivoY03 = 384 + 384
    // Scroll position for vivoY03 = 384 = 786 \\ (when we go from index 1 toindex 2 )
    // 786/384 
    // index = 1 ;
    // This is just saying helps in the division of the width and the position which is also have same value as the width to get the index
    console.log({index});

    // Update the index
    setActiveindex(index);

  }

  // The images
  const images =[{
          id:1,
          images:require("../Sections/Fashioncloth/Stylei.jpg")
        },
        {
          id:2,
          images:require("../Sections/Fashioncloth/Styleii.jpg")
        },
        {
          id:3,
          images:require("../Sections/Fashioncloth/Styleiii.jpg")
  }]

//  To Make an animated text in the Your Personal Section

  // Create an animated value for the X position
const slideAnim = useRef(new Animated.Value(-200)).current;  // Start offscreen to the left
      useEffect(() => {
        // Start the animation
        Animated.timing(slideAnim, {
          toValue: 0, // Move to the original position (X: 0)
          duration: 1500, // Animation duration in milliseconds
          useNativeDriver: true, // Use native driver for better performance
        }).start();
      }, [slideAnim]);


      const renderDot =()=>
        {
          return images.map((dot, index)=>{
            // if the active index === to the index we looping on eg 1,2,3
    
    
            if(activeindex == index){
              return(
                <View
                  style={{
                      height:8,
                      width:8,
                      borderRadius:5,
                      marginHorizontal:5
                    }}
                     key={index}> 
                  </View>
                );
            }
            else{
              return(
                <View
                  style={{
                      backgroundColor:"black",
                      height:10,
                      width:10,
                      borderRadius:5,
                      marginHorizontal:5
                    }}
                     key={index}> 
                  </View>
                );
            }
          })
        };


  // This is code for where the Images in the first Splash shows
  const HomeShow = ()=>{
    return(
      <View>
        <View style={styles.flatList}>
          <FlatList
              data={images}
              renderItem={ ({item}) => {
                return(
                    <Image 
                      source={item.images} 
                      style={
                          {height:550,width:300, flexShrink:1}
                      } />
                );
              }}
              horizontal={true}
              keyExtractor={(item) => item.id}
              style={{borderRadius:20}}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              onScroll={handle}
              ref = {flatlistRef}
              getItemLayout={getItemLayout}
          />
         <View  style={{ flexDirection:'row' , justifyContent:'center', margin:7}}>{renderDot()}</View>
        </View>

        <View style={styles.txtCon}>
          {/* This the animated text in the for You personal Stylist */}
          <Animated.Text style={[styles.texti, 
              {
                transform: [{ translateX: slideAnim }], // Bind translateX to the animated value
              }
          ]}>
            Your Personal 
          </Animated.Text>
          <Text style={styles.textii}>
            STYLIST
          </Text>
        </View>


              {/* THIS IS THE BUTTON FOR THE NEXT */}
      <View style={styles.muwwvuu}>
        <TouchableOpacity style={styles.button} activeOpacity={1} onPress={()=>{navigation.replace('Market')}}>
          <View>
            <Text style={styles.butText}>
                →
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <Swti /> */}
      </View>
      
    );
  }


  // This is like the main method that means it's it the main return method
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <HomeShow />
      </View>
    </SafeAreaView>
  )
}


// Styles for the Whole app homepage
const styles = StyleSheet.create({

      // ** THIS IS THE STYLE FOR THE APP  **//
    main:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      paddingTop: StatusBar.currentHeight,
    },
    container:{
      height:'100%',
      width:'100%',
      flexShrink:1,
      flexGrow:1,
    },

      // STYLE FOR THE FLATLIST
      flatList:{
        width:'78%',
        alignSelf:'center',
        margin:1,
        borderRadius:50,
      },

      //* STYLE FOR THE FONT TEXT IN THE APP *//
      txtCon:{
        paddingHorizontal:15,
        flexShrink:1,
        flexGrow:1,
        flexBasis:'auto'
      },
    texti:{
      fontSize:40,
      fontWeight:'500'
    },
    textii:{
      fontSize:70,
      fontWeight:'bold',
      // marginLeft:10,
      paddingHorizontal:15,
    },



    //* STYLE CODE FOR THE BUTTON *//
    button:{
      backgroundColor:"black",
      height:60,
      width:60,
      alignItems:'center',
      borderRadius:20,
    },
    muwwvuu:{
      justifyContent:'flex-end',
      alignItems:'flex-end',
      paddingHorizontal:30,
      flexShrink:1
    },
    butText:{
      color:'white',
      fontSize:50,
      fontWeight:'bold',
      marginTop:-15,
    }
})
