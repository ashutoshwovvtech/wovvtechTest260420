import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import axios from 'axios';

const API_KEY = 'tCRUbWF0rgOYQetpoMMPdxVJ2pWIaNgIth529nbj';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loader: false,
      textinput: '',
    };
  }

  fetchDetails = async (dataId) => {
    try {
      let response = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${dataId}?api_key=${API_KEY}`,
      );
      this.props.navigation.navigate('Details', {details: response.data});
    } catch (e) {
      alert('NO records to display');
    }
  };

  onSubmitHandler = () => {
    this.fetchDetails(this.state.textinput);
  };

  onRandomHandler = () => {};

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 200,
            width: '100%',
            padding: 10,
            elevation: 8,
            backgroundColor: 'beige',
          }}>
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
              <Button title="Random Asteriod" onPress={this.onRandomHandler} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
