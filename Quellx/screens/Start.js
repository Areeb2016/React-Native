import React,{useState} from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Left, Right, Icon, Button, Content, Title, Form, Item, Label, Input } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, FlatList } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View, AsyncStorage, Image, StatusBar, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';

export default class Start extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
      };
    }
    async componentDidMount() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      this.setState({ isReady: true });
    }
    render() {
      if (!this.state.isReady) {
        return <AppLoading />;
      }
      return (
        <Container>
        <Header transparent>
          <Left><Image style={{width: 30, height: 30}} source={require('../assets/menu.png')}/></Left>
          <Right><Image style={{width: 30, height: 30}} source={require('../assets/chat.png')}/></Right>
        </Header>
        <Content style={{marginVertical:100}}>
          <View style={{alignItems:'center', marginBottom:30}} >
            <Image style={{width: 150, height: 150}} source={require('../assets/logo.png')}/>
          </View>
          <Button rounded style={{marginHorizontal:60, flex:1}} onPress={() => this.props.navigation.replace("Access")}>
            <Text style={{textAlign:'center'}}>Get Started</Text>
          </Button>
          <Text style={{textAlign:'center', marginTop:20}}>Login To Account</Text>
          </Content>
        </Container>
      );
    }
  }