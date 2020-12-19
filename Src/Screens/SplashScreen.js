import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {UI_COLORS} from './Theme';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Dashboard');
    }, 1000);
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: UI_COLORS.background,
      }}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../assets/diet.png')}></Image>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        {'Healthy Recipes'}
      </Text>
    </View>
  );
};

export default SplashScreen;
