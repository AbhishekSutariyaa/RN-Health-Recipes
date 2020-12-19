import React from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {UI_COLORS} from './Theme';
import {HEALTHY_CATEGORY} from '../Data/HealthyData';

const HealthyCategory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 10,
          fontWeight: 'bold',
          fontSize: 20,
          color: UI_COLORS.black,
          textDecorationLine: 'underline',
        }}>
        {`Please Choose Your Category`}
      </Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
        data={HEALTHY_CATEGORY}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('HealthyList', {
                  itemId: item.id,
                  headerTitlePass: item.title,
                })
              }
              style={styles.categoryContainer}>
              <View
                style={{
                  shadowColor: UI_COLORS.black,
                  shadowOffset: {
                    width: 2,
                    height: 3,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 3.35,
                  elevation: 19,
                  height: 200,
                  backgroundColor: UI_COLORS.primaryColor,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10,
                  }}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 20, textAlign: 'center'}}>{'------->'}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    // backgroundColor: THEME_COLORS.background,
    flex: 1,
    // padding: 10,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: UI_COLORS.background,
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
};

export default HealthyCategory;
