import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import VideoScreen from '../screens/VideoScreen'; // Import other screens as needed
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

type PlaceholderScreenProps = {
  title: string;
};

const PlaceholderScreen: React.FC<PlaceholderScreenProps> = ({ title }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{title}</Text>
  </View>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="Option3" component={() => <PlaceholderScreen title="Option 3" />} />
      <Tab.Screen name="Option4" component={() => <PlaceholderScreen title="Option 4" />} />
      <Tab.Screen name="Option5" component={() => <PlaceholderScreen title="Option 5" />} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;