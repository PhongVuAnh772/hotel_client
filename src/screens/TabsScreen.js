import {StyleSheet, Text, View, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, {useRef, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './main/HomeScreen';
import FavoriteScreen from './main/FavoriteScreen';
import RoadMap from './main/RoadMap';
import SettingScreen from './main/SettingScreen';

const Tab = createBottomTabNavigator();

const TabsScreen = () => {
  const viewRef = useRef(0);

  return (
    <>
    
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',
          bottom:10,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 70,
        },
        tabBarActiveTintColor: '#e32f45',
        tabBarIcon: ({focused}) => {
          let iconName;
          let iconColor = focused ? '#e32f45' : '#748c94';

          if (route.name === 'Home') {
            iconName = require('../assets/main/home.png');
          } else if (route.name === 'FavoriteScreen') {
            iconName = require('../assets/main/location.png');
          } else if (route.name === 'RoadMap') {
            iconName = require('../assets/main/airbnb.png');
          } else if (route.name === 'SettingScreen') {
            iconName = require('../assets/main/profile.png');
          }

          return (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Animatable.View
                ref={viewRef}
                animation={focused ? 'bounceIn' : null}
                iterationCount={'infinite'}
                direction={focused ? 'alternate' : 'normal'}
                easing="ease-out">
                <Image
                  source={iconName}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: iconColor,
                  }}
                />
              </Animatable.View>

              {focused ? (
                <Animatable.View
                  ref={viewRef}
                  animation={focused ? 'jello' : null}
                  iterationCount={'infinite'}
                  easing="ease-out"
                  direction={focused ? 'alternate' : 'normal'}>
                  <Text style={{color: iconColor}}>
                    {route.name === 'Home'
                      ? 'Trang chủ'
                      : route.name === 'FavoriteScreen'
                      ? 'Địa điểm'
                      : route.name === 'RoadMap'
                      ? 'Chuyến đi'
                      : route.name === 'SettingScreen'
                      ? 'Hồ sơ'
                      : route.name}
                  </Text>
                </Animatable.View>
              ) : (
                ''
              )}
            </View>
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RoadMap"
        component={RoadMap}
        options={{
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: '',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
    </>
  );
};

export default TabsScreen;

const styles = StyleSheet.create({});
