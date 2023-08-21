import {StyleSheet, Image, Dimensions,View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SwiperComponent from './View/SwiperComponent';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import CountrySide from './View/tasks/CountrySide';
import PopularCity from './View/tasks/PopularCity';
import Camping from './View/tasks/Camping';
import SmallHouse from './View/tasks/SmallHouse';
import BeachWay from './View/tasks/BeachWay';
import ManyRooms from './View/tasks/ManyRooms';
import SwimmingPool from './View/tasks/SwimmingPool';
import field from '../../assets/main/tabIcon/field.png';
import HeaderTopTab from './View/HeaderTopTab';
import favoriteCity from '../../assets/main/tabIcon/leaning-tower-of-pisa.png';
import camping from '../../assets/main/tabIcon/tent.png';
import smallHouse from '../../assets/main/tabIcon/home.png';
import beachWay from '../../assets/main/tabIcon/beach-house.png';
import rooms from '../../assets/main/tabIcon/room.png';
import swimming from '../../assets/main/tabIcon/swimming-pool.png'

const HomeScreen = () => {
  return (
    <View style={{flex: 1,backgroundColor: 'white'}}>
    <HeaderTopTab />
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        swipeEnabled: false,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {backgroundColor: 'black'},
        tabBarItemStyle: {width: "auto", minWidth : 70},      
        tabBarLabelStyle: { textTransform:'none',fontWeight: '500' },
        tabBarActiveTintColor: 'black',
        animationEnabled: false,
        tabBarPressColor: "transparent"
      }} >

      <Tab.Screen
        name="CountrySide"
        component={CountrySide}
        options={{
          tabBarIcon: () => <Image source={field} style={styles.tabIcon} />,
          tabBarLabel: 'Nông thôn',
        }}
        
      />
      <Tab.Screen
        name="PopularCity"
        component={PopularCity}
        options={{
          tabBarIcon: () => <Image source={favoriteCity} style={styles.tabIcon} />,
          tabBarLabel: 'Các thành phố nổi tiếng',
        }}
      />
      <Tab.Screen
        name="Camping"
        component={Camping}
        options={{
          tabBarIcon: () => <Image source={camping} style={styles.tabIcon} />,
          tabBarLabel: 'Khu cắm trại',
        }}
      />
      <Tab.Screen
        name="SmallHouse"
        component={SmallHouse}
        options={{
          tabBarIcon: () => <Image source={smallHouse} style={styles.tabIcon} />,
          tabBarLabel: 'Nhà nhỏ',
        }}
      />
      <Tab.Screen
        name="BeachWay"
        component={BeachWay}
        options={{
          tabBarIcon: () => <Image source={beachWay} style={styles.tabIcon} />,
          tabBarLabel: 'Hướng ra biển',
        }}
      />
      <Tab.Screen
        name="ManyRooms"
        component={ManyRooms}
        options={{
          tabBarIcon: () => <Image source={rooms} style={styles.tabIcon} />,
          tabBarLabel: 'Phòng',
        }}
      />
      <Tab.Screen
        name="SwimmingPool"
        component={SwimmingPool}
        options={{
          tabBarIcon: () => <Image source={swimming} style={styles.tabIcon} />,
          tabBarLabel: 'Hồ bơi tuyệt vời',
        }}
      />
    </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tabIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});
