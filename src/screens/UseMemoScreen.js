import { useTheme } from "@react-navigation/native";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const UseMemoScreen = () => {

  const { colors } = useTheme()

  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>UseMemoScreen</Text>
    </View>
  )
}



const styles = StyleSheet.create({});


export default UseMemoScreen;