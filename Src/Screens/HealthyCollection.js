import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {UI_COLORS} from './Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HealthyCollection = ({navigation}) => {
  const getDataArray = async () => {
    let dataOfCollection = await AsyncStorage.getItem('favData');
    dataOfCollection = dataOfCollection ? JSON.parse(dataOfCollection) : [];

    dataSet(dataOfCollection);
    setIndex(index + 1);
  };
  const [data, dataSet] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', getDataArray);

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
     
        <FlatList
          extraData={index}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={data}
          ListEmptyComponent={
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                alignSelf: 'center',
                color: UI_COLORS.black,
              }}>
              {'No Collections Found'}
            </Text>
          }
          renderItem={({item}) => {
            console.log('item--->', item);
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('HealthyDetail', {Item: item})
                }
                style={styles.categoryContainer}>
                <Image
                  style={{height: 250, width: '100%'}}
                  source={{uri: item.image[0]}}
                />
                <View
                  style={{
                    backgroundColor: UI_COLORS.primaryColor,
                    width: '100%',
                    padding: 5,
                  }}>
                  <Text
                    numberOfLines={1}
                    style={[styles.title, {textAlign: 'center'}]}>
                    {item.name}
                  </Text>
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
    backgroundColor: UI_COLORS.background,
    flex: 1,
    padding: 10,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
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
    color: UI_COLORS.black,
  },
};

export default HealthyCollection;
