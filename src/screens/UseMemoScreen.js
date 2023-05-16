import { useTheme } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const slowFunction = (num) => {
  console.log("Calling slow function")
  for (let i = 0; i <= 100000000; i++) { }
  return num * 2
}

const UseMemoScreen = () => {

  // const { colors } = useTheme()

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // const doubleNumber = slowFunction(number)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  // const themeStyle = {
  //   backgroundColor: dark ? "black" : "white",
  //   color: dark ? "white" : "black",
  //   marginTop: 10,
  //   fontSize: 16
  // }

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      marginTop: 10,
      fontSize: 16
    }
  }, [dark])

  useEffect(() => {
    console.log("Theme Changed")
  }, [themeStyle])

  // console.log("NUMBER:", number)

  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 20 }}>

      <View style={{ backgroundColor: "white", flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.inputField}
          value={number.toString()}
          keyboardType="number-pad"
          onChangeText={setNumber}
        />

        <View style={{ marginLeft: 20 }}>
          <AntDesign
            name="upsquare"
            size={30}
            color={"black"}
            onPress={() => setNumber(number + 1)}
          />
          <AntDesign
            name="downsquare"
            size={30}
            style={{ marginTop: 10 }}
            color={"black"}
            onPress={() => setNumber(number - 1)}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => setDark(!dark)}>
        <Text style={{ color: "black", fontSize: 18, fontWeight: "600" }}>Change Theme</Text>
      </TouchableOpacity>

      <Text style={themeStyle}>{doubleNumber}</Text>

    </View>
  )
}



const styles = StyleSheet.create({
  inputField: {
    backgroundColor: "gray",
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10
  }
});


export default UseMemoScreen;


//REFERENTIAL EQUALITY:
//new theme style object created whenever we run/render our application and the
//new theme style object is not the same as the old theme style object even though they
//have the same values in the object but the reference different places in memory