import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {HEALTHY_LIST} from '../Data/HealthyData';
import {UI_COLORS} from './Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HealthyList = ({route, navigation}) => {
  const {itemId, headerTitlePass} = route.params;
  const [listData, setFilterData] = useState([]);

  navigation.setOptions({headerTitle: headerTitlePass});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', getDataArray);

    return unsubscribe;
  }, [navigation]);
  const getDataArray = async () => {
    let filterArray = [];
    let filterData = await AsyncStorage.getItem('filter');
    filterData = filterData ? JSON.parse(filterData) : [];
    console.log('filterData---->', filterData);
    if (filterData.length) {
      if (filterData.includes(1)) {
        HEALTHY_LIST.map((item) => {
          if (item.calories < 200) {
            filterArray.push(item);
          }
        });
      }
      if (filterData.includes(2)) {
        HEALTHY_LIST.map((item) => {
          if (item.calories > 200 && item.calories < 400) {
            filterArray.push(item);
          }
        });
      }
      if (filterData.includes(3)) {
        HEALTHY_LIST.map((item) => {
          if (item.calories > 400) {
            filterArray.push(item);
          }
        });
      }
    } else {
      filterArray = HEALTHY_LIST;
    }
    setFilterData(filterArray.filter((item) => item.id == itemId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        extraData={listData}
        // numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}
        ListEmptyComponent={
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              alignSelf: 'center',
            }}>
            {'No recipe found.'}
          </Text>
        }
        data={listData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('HealthyDetail', {Item: item})}
              style={styles.categoryContainer}>
              <Image
                style={{height: 250, width: '100%'}}
                source={{uri: item.image[0]}}
              />
              <View
                style={{
                  backgroundColor: UI_COLORS.background,
                  width: '100%',
                  padding: 5,
                }}>
                <Text style={[styles.title, {textAlign: 'center'}]}>
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
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 24,
    borderRadius: 12,
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
    color: UI_COLORS.primaryColor,
  },
};

export default HealthyList;
