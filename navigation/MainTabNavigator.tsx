import { Ionicons,Entypo,MaterialIcons,Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme() as string;

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ activeTintColor: Colors["light"].background,
      style: {
        background: Colors["light"].tint,
      },
      indicatorStyle:{
        backgroundColor: Colors["light"].background,
        height:4
      },
      labelStyle:{
      fontWeight:'bold'
      }
      
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ color }) => <Entypo size={18} name="camera" color={'white'}/>,
          
        
        }}
      />
       <MainTab.Screen
        name="Chats"
        component={TabTwoNavigator}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ color }) => <Entypo size={18} name="chat" color={'white'}/>,
          
        
        }}
       
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoNavigator}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ color }) => <MaterialIcons size={18} name="emoji-emotions" color={'white'}/>,
          
        
        }}
      
      />
       <MainTab.Screen
        name="Calls"
        component={TabTwoNavigator}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ color }) => <Feather size={18} name="phone-call" color={'white'}/>,
          
        
        }}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} name="add-circle"  color={props.color}/>;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
