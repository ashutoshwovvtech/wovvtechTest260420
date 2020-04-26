import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

const DetailsScreen = ({route}) => {
  let {
    details: {name, nasa_jpl_url, is_potentially_hazardous_asteroid},
  } = route.params;

  const Row = ({label, value}) => (
    <View style={{height: 10}}>
      <View style={{width: '30%'}}>
        <TExt>{label}</TExt>
      </View>
      <View style={{width: '70%'}}>
        <TExt>{value}</TExt>
      </View>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'orange',
        padding: 15,
      }}>
      <View
        style={{
          width: '100%',
          padding: 8,
          elevation: 8,
          borderWidth: 0.1,
          borderRadius: 8,
          backgroundColor: 'white',
        }}>
        <Text>
          <Text style={{fontWeight: '400'}}>Name: </Text>
          {name}
        </Text>
        <Text>
          <Text style={{fontWeight: '400'}}>NASA URL: </Text> {nasa_jpl_url}
        </Text>
        <Text>
          <Text style={{fontWeight: '400'}}>
            Is Asteriod Potentially Hazardous:
          </Text>{' '}
          {is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
        </Text>
      </View>
    </View>
  );
};

export default DetailsScreen;
