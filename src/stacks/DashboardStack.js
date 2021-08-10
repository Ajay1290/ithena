import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FIcon from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

import useGlobalStyle from '../styles';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

export default function DashboardStack() {
  const t = useTheme();
  const s = useGlobalStyle();

  const defaultOptions = name => ({
    headerShown: false,
    title: '',
    tabBarIcon: ({color}) => (
      <FIcon
        name={name}
        color={color}
        style={{...s.mt('1%')}}
        size={s.wp('6%')}
      />
    ),
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      color={t.colors.primary}
      backBehavior="initialRoute"
      allowFontScaling={false}
      screenOptions={{
        activeTintColor: t.colors.primary,
        activeBackgroundColor: 'transparent',
        inactiveTintColor: '#7c7c7c',
        style: {
          paddingBottom: Platform.OS === 'ios' ? s.hp('3%') : s.hp('0.5%'),
          height: Platform.OS === 'ios' ? s.hp('9%') : s.hp('6.5%'),
          backgroundColor: 'red',
        },
        tabBarStyle: {
          backgroundColor: '#444',
          opacity: 0.99,
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        options={{...defaultOptions('tag')}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{...defaultOptions('home')}}
        name="shop"
        component={CartScreen}
      />
      <Tab.Screen
        options={{...defaultOptions('clock')}}
        name="clock"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{...defaultOptions('shopping-bag')}}
        name="request"
        component={CartScreen}
      />
    </Tab.Navigator>
  );
}
