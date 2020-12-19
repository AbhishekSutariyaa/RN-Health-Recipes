import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import SplashScreen from './Src/Screens/SplashScreen';
import Dashboard from './Src/Screens/Dashboard';
import HealthyList from './Src/Screens/HealthyList';
import DownloadImage from './Src/Screens/DownloadImage';
import HealthyDetail from './Src/Screens/HealthyDetail';

const Stack = createStackNavigator();

const App = ({params}) => {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName={'SplashScreen'}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HealthyList"
            component={HealthyList}
            // options={{headerTitle: 'Category List'}}
          />
          <Stack.Screen
            name="HealthyDetail"
            component={HealthyDetail}
            options={{headerTitle: 'Details'}}
          />
          <Stack.Screen
            name="DownloadImage"
            component={DownloadImage}
            options={{headerTitle: 'Recipes Image'}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
