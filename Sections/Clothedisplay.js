import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    FlatList,
    ScrollView,
    TextInput,
    Alert,
    Pressable,
    TouchableOpacity,
    useWindowDimensions,
    Keyboard,
    StatusBar,
    Platform,
    ActivityIndicator

} from 'react-native'
import React, { useEffect, useState, props } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import sIcon from '../Sections/Fashioncloth/searchicon.png';
import Icon from 'react-native-vector-icons/FontAwesome.js';

// FOR THE JS COMPONENTS TO BE INSTALLED
import Random from '../Sections/Random.js';
import Male from './Male.js';
import Female from './Female.js';
import DisItem from './DisItem.js';
import { useNavigation } from '@react-navigation/native';

import { random } from '../Sections/Random.js';

export default function Clothedisplay({ numshw, setnumshw }) {
    const navigation = useNavigation()
    // const [numshw, setnumshw] = useState(0);

    const height = useWindowDimensions().height;
    // FOR THE DISPLAYING METHOD
    const eye = require("../Sections/Fashioncloth/eye.png");

    // FOR THE CARTING IMAGE
    const carti = require("../Sections/Fashioncloth/cart.png")
    const [sortin, funsort] = useState([{
        idi: "Collection 2019",
        idii: "Collection 2021",
        idiii: "Collection 2024"
    }]);


    // FOR THE DROPDOWN ONLY 
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Random', value: 'Random' },
        { label: 'Female', value: 'Female' },
    ]);

    // FOR THE GLOBAL INPUT FOR THE VALUE THAT WAS INPUTED
    const [gloinp, setGloinp] = useState("");




    //  for the top container
    const Searchbar = () => {
        //  FOR THE INPUTATION OF THE CODE
        const [inpt, setInpt] = useState("");


        // FOR THE LOOPING OF ARRAY FOR THE SEARCH 
        // SECTION..
        const searchExactMatch = () => {
            // THIS FOR FILTERING THE INP FROM THE USER AND STUFF 
        const filteredData = random.filter(item => 
        item.about.toLowerCase().includes(gloinp.toLowerCase()))
        console.log(filteredData)
        };


        return (
            <View style={styles.topcon}>
                <TextInput
                    value={inpt}
                    onChangeText={setInpt}
                    style={styles.inputsec}
                    placeholder='Fahsion Type...'
                    cursorColor={'black'}
                    returnKeyType='search'
                    clearButtonMode='unless-editing'
                    inlineImageLeft={''}
                />



                {/* TO CLEAR THE INPUT THE USER INPUT FOR EASY CANCELATION */}

                {/* I USED THE AND FUNCTION TO DISPLAY THE CANCELING BUTTON WHEN EVER A TEXT IS BEEN INPUTED 
            SO IT WON'T JUST BE SHOWING WHEN EVER I POP UP THE APP 
            ON SHOWS WHEN EVER INPUT WORD */}


                {
                    inpt &&
                    <TouchableOpacity activeOpacity={1} onPress={() => setInpt('')} style={[styles.canCelIcon,
                    {
                        justifyContent: 'center',
                        borderWidth: 1,
                        alignItems: 'center',
                        backgroundColor: 'gray',
                        borderRadius: 50
                    }]}
                    >
                        <Icon
                            name="times"
                            size={16}
                            color="white"
                        />
                    </TouchableOpacity>
                }


                {/* THE SEARCH BUTTON FOR THE USER TO UNDERSTAND */}
                <Pressable onPress={() => { Keyboard.dismiss() , searchExactMatch(), setGloinp(inpt)}}>
                    <View style={{ width: 32, padding: '5' }}>
                        <Image source={sIcon} style={styles.sIcons} />
                    </View>
                </Pressable>


                {/*  TO NAVIGATE TO THE CARTING SECTION  */}
                <Pressable onPress={() => navigation.navigate("Carting", { name: "Emmanuel", numshw: numshw, setnumshw: setnumshw })}>
                    <View style={{ width: 32, padding: '5', flexDirection: "row" }}>
                        <Image source={carti} style={styles.sIcons} />
                        {
                            numshw > 0 &&
                            <View
                                style={
                                    {
                                        backgroundColor: "red",
                                        height: 20,
                                        borderRadius: 50,
                                        width: 20,
                                        left: -12,
                                        top: -8
                                    }
                                }>
                                <Text style={{ color: "white", alignSelf: "center", fontWeight: "bold" }}>
                                    {numshw}
                                </Text>
                            </View>

                        }

                    </View>
                </Pressable>

            </View>
        );
    }


    //-------------------- THE DROP PICKER FOR CLIENT TO CHOOSE CHILDREN/WOMEN/MEN ----------------//
    const Selcting = () => {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.dropdown}
                    dropDownContainerStyle={styles.dropdownContainer}
                    showArrowIcon={true}
                    showTickIcon={true}
                    disableLocalSearch // Disable search functionality (optional)
                    flatListProps={{
                        // Disable the active opacity effect for list items
                        ItemSeparatorComponent: () => <View style={styles.separator}
                        />
                    }}
                    onPress={() => console.log(value)}
                />



            </View>
        );
    };
    // ---------------- FOR THE SORTING OF PICKING THE COLLECTION OF THE FASHION ----------------- //
    const Sorting = () => {
        return (
            <View>
                <FlatList
                    data={sortin}
                    renderItem={({ item }) => {
                        return (
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                style={{
                                    marginBottom: 10,
                                    borderRadius: 100,
                                }}
                            >
                                <View style={{ flexDirection: 'row', marginLeft: '20', margin: 5 }}>
                                    <Pressable style={styles.pick} activeOpacity={1} onPress={() => navigation.navigate('Collection 2019', { numshw: numshw, setnumshw: setnumshw })}>
                                        <View>
                                            <Text style={styles.textshow}>
                                                {item.idi}
                                            </Text>
                                        </View>
                                    </Pressable>

                                    <Pressable style={[styles.pick, { marginLeft: 20 }]} activeOpacity={1} onPress={() => navigation.navigate('Collection 2021')}>
                                        <View>
                                            <Text style={styles.textshow}>
                                                {item.idii}
                                            </Text>
                                        </View>
                                    </Pressable>
                                    <Pressable style={[styles.pick, { marginLeft: 20 }]} activeOpacity={1} onPress={() => navigation.navigate('Collection 2024')}>
                                        <View>
                                            <Text style={styles.textshow}>
                                                {item.idiii}
                                            </Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </ScrollView>

                        );
                    }}
                />
            </View>
        );
    }

    //  THE CODITION FOR THE DROP-PICKER SO IT CAN BE \\
    //  FOR SELECTING THE USER \\

    const Condition = () => {
        //  To see if the condition would work
        let a = value;
        if (a == 1) {
            // JUST FOR DEBUGING OF ANY COMPONENT THAT 
            // DOES NOT COMPILE WITHT HIMSELF
            return (
                <Random />
            )
        }
        else if (a == "Male") {
            // THIS IS FOR THE MALE SECTION
            return (
                <SafeAreaView style={styles.main}>
                    <View style={styles.container}>
                        <Male
                            numshw={numshw}
                            setnumshw={setnumshw}
                            gloinp = {gloinp}
                        />
                    </View>
                </SafeAreaView>
            );
        }
        else if (a == "Female") {
            // THIS IS FOR THE FEMALE SECTION
            return (
                <SafeAreaView style={styles.main}>
                    <View style={styles.container}>
                        <Female
                            numshw={numshw}
                            setnumshw={setnumshw}
                            gloinp = {gloinp}
                        />
                    </View>
                </SafeAreaView>
            );
        }
        else{
            // THIS IS FOR THE RANDOM SECTION
            return (
                <SafeAreaView style={styles.main}>
                    <View style={styles.container}>
                        <Random
                            numshw={numshw}
                            setnumshw={setnumshw}
                            gloinp={gloinp}
                        />
                    </View>
                </SafeAreaView>
            );
        }


    }
    // ----------------- THE MAIN RETURN MEATHOD --------------------//
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.outerComponet}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={'white'}
                />
                <Selcting />
                <Searchbar />
                <Sorting />
            </View>

            {/* FOR CALLING THE COMPONENT FOR THE DROPDOWN THE CONDITION PART */}
            <View style={styles.container}>
                <Condition />
            </View>
        </SafeAreaView>
    )

}



// THIS IS THE STYLING OF THE APPLICATION ON THE CLOTHE DISPLAY //
const styles = StyleSheet.create({
    main: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    outerComponet: {
        marginTop: StatusBar.currentHeight,
        // flexGrow:1,
        flexShrink: 1,
    },
    container: {
        flex: 1, // This is crucial for the Random component to have proper height
        // width: '100%',
        flexGrow: 1,
        flexShrink: 1,
    },

    // Style for the input part section
    topcon: {
        justifyContent: 'center',
        // marginBottom:30,
        flexDirection: 'row',
        paddingHorizontal: 10,
        padding: 1,
        position: 'relative'
    },

    //  For the input Section
    inputsec: {
        backgroundColor: 'white',
        width: 280,
        height: 40,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 25,
        marginLeft: 10,
        justifyContent: 'center',
        flexShrink: 1,
        flexGrow: 1,
    },

    canCelIcon: {
        width: 20,
        height: 20,
        // marginLeft:'-35',
        position: 'absolute',
        left: 275,
        alignSelf: 'center'
    },

    //** Style for the Search Icon for me to run **//
    sIcons: {
        height: 25,
        width: 25
    },
    pickelabel: {
        fontSize: 40,
        fontWeight: 'black',
        padding: -20,
        width: 400,
        height: 300
    },
    picker: {
        width: 150,
        height: 60,
        top: -10,
        fontSize: 20
    },

    // ** STYLE FOR THE PICKING SECTION**//
    pick: {
        backgroundColor: 'white',
        width: 160,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10
    },

    // **  STYLE FOR THE TEXT IN THE SORTING BY **//
    textshow: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 14
    },

    // ***CLOTHE STYLING**//
    simDesign: {
        borderWidth: 1,
        margin: 2,
        borderRadius: 20,
        height: 270,
        width: 178,
        borderColor: 'lightgray'
    },

    //** THE ONLY DROP DOWN **//
    dropdown: {
        width: 150,
        alignSelf: 'center',
        borderWidth: 0,
        height: 50,
        marginBottom: 10,
    },
    dropdownContainer: {
        borderWidth: 1,
        width: 200,
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: 'lightgray'
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
    },
})
