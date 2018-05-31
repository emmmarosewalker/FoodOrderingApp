import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;
    this.state = {

    };
  }
  render() {

    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.largeText}>
          Thanks for your order!
          </Text>
          <Text style={styles.text}>
          Total Cost: ${this.props.text}.00
          </Text>
          <View style={{marginTop: 30}}>
            <Text style={styles.text}>
            Your order will be ready for pickup in 15 minutes.
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 18, margin: 10}}>
            App developed by Edward Wilshin (44990707) and Emma Walker (43254446)
        </Text>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  box: {
    margin: 10,
    borderWidth: 5,
    borderColor: '#000',
    backgroundColor: '#fff',
    padding: 40
  },
  text: {
    fontSize: 20,
    color: '#000'
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000'
  }
});
