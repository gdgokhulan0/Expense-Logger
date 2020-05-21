import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NotificationPane from './Components/NotificationPane';
import HeadLine from './Components/HeadLine';

import Home from './Screens/Home';
import CreditLogger from './Screens/CreditLogger';
import DebitLogger from './Screens/DebitLogger';
import CreditLogs from './Screens/CreditLogs';
import DebitLogs from './Screens/DebitLogs';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ViewCrStack  = createStackNavigator();
const ViewDbStack  = createStackNavigator();

export default function App() {
  const LoggerStack = () =>
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='Log a Credit' component={CreditLogger} />
      <HomeStack.Screen name='Log a Debit' component={DebitLogger} />
    </HomeStack.Navigator>

const ViewCreditLogStack = () =>
  <ViewCrStack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <ViewCrStack.Screen name="Credit Logs" component={CreditLogs} />
  </ViewCrStack.Navigator>

const ViewDebitLogStack = () =>
<ViewDbStack.Navigator
screenOptions={{
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}}
>
  <ViewDbStack.Screen name="Debit Logs" component={DebitLogs} />
</ViewDbStack.Navigator>

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        drawerType={'slide'}
        drawerStyle={{ backgroundColor: '#121212' }}
        drawerContentOptions={{
          activeTintColor: 'black',
          activeBackgroundColor:'white',
          inactiveTintColor: 'white'
        }}>
        <Drawer.Screen name="Home" component={LoggerStack} />
        <Drawer.Screen name="Credit Logs" component={ViewCreditLogStack} />
        <Drawer.Screen name="Debit Logs" component={ViewDebitLogStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
