import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const DetailsScreen = ({route}) => {
  let {
    details: {name, nasa_jpl_url, is_potentially_hazardous_asteroid},
  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.cardLays}>
        <Text>
          <Text style={styles.fontStyle}>Name: </Text>
          {name}
        </Text>
        <Text>
          <Text style={styles.fontStyle}>NASA URL: </Text> {nasa_jpl_url}
        </Text>
        <Text>
          <Text style={styles.fontStyle}>
            Is Asteriod Potentially Hazardous:
          </Text>{' '}
          {is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 15,
  },
  cardLay: {
    width: '100%',
    padding: 8,
    elevation: 8,
    borderWidth: 0.1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  fontStyle: {fontWeight: '400'},
});

export default DetailsScreen;
