import React from 'react';
import {Image} from 'react-native';
import {UI_COLORS} from './Theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HealthyCollection from './HealthyCollection';
import HealthyCategory from './HealthyCategory';
import HealthyFilter from './HealthyFilter';

const Tab = createBottomTabNavigator();

const Dashboard = ({params}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: UI_COLORS.primaryColor,
        inactiveTintColor: UI_COLORS.black,
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="HealthyCategory"
        component={HealthyCategory}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/house-outline.png')}
              style={{height: focused ? 30 : 20, width: focused ? 30 : 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HealthyFilter"
        component={HealthyFilter}
        options={{
          tabBarLabel: 'Recipe Filter',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/air-filter.png')}
              style={{height: focused ? 30 : 20, width: focused ? 30 : 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HealthyCollection"
        component={HealthyCollection}
        options={{
          tabBarLabel: 'Collection',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../assets/database-configuration.png')}
              style={{height: focused ? 30 : 20, width: focused ? 30 : 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
