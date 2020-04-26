import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const API_KEY = 'tCRUbWF0rgOYQetpoMMPdxVJ2pWIaNgIth529nbj';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      loader: false,
      textinput: '',
    };
  }

  fetchDetails = async (dataId) => {
    this.setState({loader: true});
    try {
      let response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${dataId}?api_key=${API_KEY}`,
      );

      if (response.data) {
        this.props.navigation.navigate('Details', {details: response.data});
      } else {
        throw Error('NO records to display');
      }
    } catch (e) {
      alert('NO records to display');
    }

    this.setState({loader: false});
  };

  fetchRandomAsteriods = async () => {
    this.setState({loader: true});
    try {
      let response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`,
      );

      if (response.data && response.data.near_earth_objects) {
        this.setState({dataList: response.data.near_earth_objects});
      } else {
        throw Error('NO records to display');
      }
    } catch (e) {
      alert('NO records to display');
    }
    this.setState({loader: false});
  };

  onSubmitHandler = () => {
    this.fetchDetails(this.state.textinput);
  };

  onRandomHandler = () => {
    this.fetchRandomAsteriods();
  };

  onItemPress = (dataId) => {
    this.fetchDetails(dataId);
  };

  remderOverLayIndicator = () => (
    <View style={styles.loaderStyle}>
      <ActivityIndicator color={'#000'} size={80} />
    </View>
  );

  render() {
    return (
      <React.Fragment>
        <View style={{flex: 1}}>
          <View style={styles.formContainer}>
            <TextInput
              placeholder={'Enter Asteriod ID'}
              value={this.state.textinput}
              keyboardType={'number-pad'}
              style={{backgroundColor: '#fff', borderRadius: 8, elevation: 8}}
              onChangeText={(text) => this.setState({textinput: text})}
            />

            <View style={{width: '100%'}}>
              <View marginTop={10}>
                <Button
                  title="Submit"
                  disabled={this.state.textinput == '' ? true : false}
                  onPress={this.onSubmitHandler}
                />
              </View>
              <View marginTop={10}>
                <Button
                  title="Random Asteriod"
                  onPress={this.onRandomHandler}
                />
              </View>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <FlatList
              data={this.state.dataList}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => this.onItemPress(item.id)}>
                  <View style={styles.itemlist}>
                    <Text>{item.id}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, idx) => item.id + idx.toString()}
            />
          </View>
        </View>
        {this.state.loader ? this.remderOverLayIndicator() : null}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    height: 200,
    width: '100%',
    padding: 10,
    elevation: 8,
    backgroundColor: 'beige',
  },
  loaderStyle: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    elevation: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    opacity: 0.4,
  },
  itemlist: {
    height: 30,
    borderBottomWidth: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
