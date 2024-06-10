import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './Home';
import SendMessage from './SendMessage';
import ReceiveMessage from './ReceiveMessage';
import JournalEntry from './JournalEntry';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Journal Entry" component={JournalEntry} />
      <Tab.Screen name="Send Message" component={SendMessage} />
      <Tab.Screen name="Receive Message" component={ReceiveMessage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

