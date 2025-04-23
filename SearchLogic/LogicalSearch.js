import { Pressable, StyleSheet, Text, TextInput, View, FlatList , Image, StatusBar} from 'react-native'
import React from 'react'

export default function LogicalSearch() {

    const female = [
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
    ]
    const [inp , setInp] = React.useState("")
    const [temparr , setTemp] = React.useState([])

    const query = inp.toLowerCase()

    // THIS FOR FILTERING THE INP FROM THE USER AND STUFF 
    const filteredData = female.filter(item => 
        item.about.toLowerCase().includes(inp.toLowerCase()))
    
    // THIS IS TO SHOW THE DISPLAY IT IN HTML FILE BUT THIS IS FOR REACT NATIVE
    // resultsContainer.innerHTML = filteredData.map(item => <p>${item.about}</p>).join("");

    const show =()=>{
        // console.log(filteredData);
        setTemp([...temparr , ...filteredData]);
        console.log(temparr);
        console.log(typeof temparr)
        // console.log(temparr.map((item)=>(item.about)));
    }
    const mappchk = filteredData.map((item)=>(item.about));
    React.useEffect(
        ()=>{
            const checking =()=>{
                console.log(filteredData.map((item)=>(item.about)))
                // console.log(filteredData);
                if (mappchk.length === 0){
                    console.log('Item not found');
                }else {
                    {console.log("Item found!")};
                }
            }
            checking()
        },[]
    )
    
    function renderItem({item}){
        return(
        <View>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
            <Image 
                source={item.image}
                style={
                    {
                        width:50,
                        height:50
                    }
                }
            />
            <Text>
                {item.about}
            </Text>
        </View>
        )
    }
    
    const Loopin =()=>{
        return(
         <FlatList 
            data={filteredData}
            renderItem={renderItem}
            ItemSeparatorComponent={<View style={{margin:5}}></View>}
            // numColumns={4}
            />
        )
    }

    const ItemNotFound = ()=>{
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
                    Sorry Item Not Found
                </Text>
            </View>
        )
    }

    const a = mappchk.length ; 
    const Condition = () =>{
        if (a > 0 ){
            return(
                <View style={
                    {
                        height:'100%',
                        width:'100%'
                    }
                }>
                    <Loopin />

                    {console.log("Item found!")}   
                </View>
            )
        }
        else{
            return(
                <View style={
                    {
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                    }
                }>
                    <ItemNotFound />
                </View>
            )
        }
    }
  return (
    <View style={styles.main}>
      {/* {filteredData.map(item => <Text>${item.about}</Text>).join("")} */}
        <Text style={{fontSize:17,fontWeight:'bold'}}>
            Checking if the Search Inp works
        </Text>
        <View style={{flexDirection:'row'}}>
            <TextInput 
                placeholder='Input Here'
                returnKeyType='search'
                value={inp}
                onChangeText={setInp}
                style={styles.txtInp}
            />
            <Pressable style={{backgroundColor:"lightblue", borderRadius:30, width:39, justifyContent:'center'}}
                onPress={()=>show()}>
                <Text style={{alignSelf:'center'}}>
                    O/
                </Text>
            </Pressable>
        </View>
        <View style={{flex:1}}>
            <Condition />
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
    },
    txtInp:{
        width:'80%',
        maxHeight:60,
        borderWidth:1,
        borderColor:'black',
        borderRadius:30,
        paddingLeft:30
    }
})