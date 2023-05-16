import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import screens from '../constants/screens'
import UseMemoScreen from '../screens/UseMemoScreen'

const { Screen, Navigator } = createNativeStackNavigator()

const AppNavigation = () => {

  const scheme = useColorScheme()

  const darkTheme = {
    ...DarkTheme,
    colors: {
      background: "#1a237e",
      text: "white",
      border: "rgb(39, 39, 41)",
      card: "rgb(18, 18, 18)",
      notification: "rgb(255, 69, 58)",
      primary: "rgb(10, 132, 255)",
    }
  }

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      background: "white",
      text: "black",
      primary: 'rgb(255, 45, 85)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)'
    }
  }

  return (
    <NavigationContainer
      theme={scheme === "dark" ? darkTheme : lightTheme}
    >
      <Navigator>
        <Screen name={screens.UseMemoScreen} component={UseMemoScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;

const styles = StyleSheet.create({})