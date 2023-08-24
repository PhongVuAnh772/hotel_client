import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';
import TabsScreen from './src/screens/TabsScreen';
import LoginScreen from './src/auth/log/login/LoginScreen';
import SignUpScreen from './src/auth/log/signUp/SignUpScreen';
import {useAppDispatch, useAppSelector} from './app/hooks/hooks';
import HotelInfo from './src/screens/Layout/HotelInfo';


const AuthScreen = createNativeStackNavigator();

export default function App() {
  const loginState = useAppSelector(state => state.login.LOGGEDIN_STATUS);

  return (
    <>
      <NavigationContainer>
        <AuthScreen.Navigator screenOptions={{headerShown: false}}>
          {loginState ? (
            <>
              <AuthScreen.Screen name="TabScreen" component={TabsScreen} />
              <AuthScreen.Screen
                name="HotelInfo"
                component={HotelInfo}
                options={{
                  presentation: 'modal',
                  animationTypeForReplace: 'pop',
                  animation: 'slide_from_right',
                }}
              />
              
            </>
          ) : (
            <>
              <AuthScreen.Screen name="Login" component={LoginScreen} />
              <AuthScreen.Screen name="SignUp" component={SignUpScreen} />
              
            </>
          )}
        </AuthScreen.Navigator>
      </NavigationContainer>
    </>
  );
}
