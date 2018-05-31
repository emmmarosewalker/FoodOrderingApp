/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {
  constructor(props){
    super(props);

    this.state={
      outletChoice: '',
      firstChoice: '',
      firstQuantity: 0,
      secondChoice: '',
      secondQuantity: 0,
      warning: ''
    };
    this.outlets = [
    {
      value: "Sushi World"
    },
    {
      value: "Boost Juice"
    },
    {
      value: "Taste Baguettes"
    },
    {
      value: "Sambal"
    },
    {
      value: "Ubar"
    }];
    this.choices = [
      {
        value: "Ham/Cheese Toastie $10"
      },
      {
        value: "Chicken Baguette $12"
      },
      {
        value: "BLAT $10"
      },
      {
        value: "Vegetarian Roll $10"
      },
      {
        value: "Turkey Baguette $11"
      }
    ];
    this.quantity = [
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    },
    {
      value: 4
    },
    {
      value: 5
    },
  ]
  }

  priceFinder(str){
    return parseInt(str.substr(str.length-2, str.length));
  }

  checkChoiceMade(){
    lenOne = this.state.firstChoice.length;
    qtyOne = this.state.firstQuantity;
    if (lenOne > 0 && qtyOne > 0){
      return true;
    }
    return false;
  }

  onPressEvent(){
    if (this.checkChoiceMade()){
      let priceOne = this.priceFinder(this.state.firstChoice);
      let qtyOne = parseInt(this.state.firstQuantity);
      let total = priceOne * qtyOne;
      if (this.state.secondChoice.length > 0 && this.state.secondQuantity > 0){
        let priceTwo = this.priceFinder(this.state.secondChoice);
        let qtyTwo = parseInt(this.state.secondQuantity);
        total += (priceTwo * qtyTwo);
      }
      this.setState({
        warning: ''
      })

      Actions.summary({
        text: total
      });
    }
    else {
      this.setState({
        warning: 'Please complete all fields'
      })
    }
  }
  
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.viewRow1}>
                <Dropdown
                    containerStyle={styles.dropdown1}
                    label='Restaurant'
                    data={this.outlets}
                    onChangeText={(choice) => this.setState({
                      outletChoice: choice
                    })}
                    fontSize={22}
                    baseColor="#000"
                    fontWeight='bold'
                      />
        </View>

        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown1}
                      label='Choose a menu item'
                      data={this.choices}
                      onChangeText={(choice) => this.setState({
                        firstChoice: choice
                      })}
                      fontSize={20}
                      baseColor={"#000"}
                      fontWeight='bold'
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Quantity'
                      data={this.quantity}
                      onChangeText={(choice) => this.setState({
                        firstQuantity: choice
                      })}
                      fontSize={16}
                      baseColor={"#000"}
                      fontWeight='bold'
                        />
        </View>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown1}
                      label='Choose a menu item'
                      data={this.choices}
                      onChangeText={(choice) => this.setState({
                        secondChoice: choice
                      })}
                      fontSize={20}
                      baseColor={"#000"}
                      fontWeight='bold'
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Quantity'
                      data={this.quantity}
                      onChangeText={(choice) => this.setState({
                        secondQuantity: choice
                      })}
                      fontSize={16}
                      baseColor={"#000"}
                      fontWeight='bold'
                      />
        </View>
        <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressEvent.bind(this)}
                    >
                    <Text style={styles.buttonText}>
                      PROCEED
                    </Text>
                </TouchableOpacity>
        </View>
        <Text style={styles.warning}>
          {this.state.warning}
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
  viewRow1: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 5,
    padding: 10,
    margin: 10,
    color: '#000',
    elevation: 5
  },
  viewRow2: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 5,
    padding: 10,
    margin: 10,
    elevation: 5
  },
  button: {
    backgroundColor: '#000',
    margin: 10,
    padding: 20,
    elevation: 5,
    borderColor: '#000',
    borderWidth: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: "center",
  },
  warning: {
    color: '#c4251d',
    marginLeft: 10,
    fontSize: 18
  }
});
