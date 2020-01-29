import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import {View} from 'react-native'

export default class DataOverview extends Component {
    render() {
      return (
        <Container>
          <Content>
            <Card>
              <CardItem cardBody style={{backgroundColor: 'darkblue', height: 120, justifyContent:'center', flexDirection:'column'}}>
                <Text style={{textAlign: "center", color:'white', fontSize:18}}>Sales</Text>
                <Text style={{textAlign: "center", color:'white', fontSize:40}}>Rs2,445</Text>
              </CardItem>
              <CardItem style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, borderRadius:100}}>
                <Left style={{flexDirection:'column'}}>
                <Text style={{color:'grey', marginLeft: -20, fontSize:10}}>TRANSACTIONS</Text>
                <Text style={{marginLeft: -20, marginVertical:10, fontSize:18}}>3</Text>
                </Left>
                <Body style={{marginLeft: 30}}>
                <Text style={{color:'grey', marginLeft: 20, fontSize:10}}>AVG</Text>
                <Text style={{marginLeft: 5, marginVertical:10, fontSize:18}}>Rs815</Text> 
                </Body>
                <Right>
                <Text style={{color:'grey', marginRight: 20, fontSize:10}}>COVERS</Text>
                <Text style={{marginRight: 35, marginVertical:10, fontSize:18}}>0</Text>  
                </Right>
              </CardItem>
              <CardItem>
                <Right>
                  <Text style={{marginRight:-70, color:'grey', fontSize:12}}>Last updated: a few seconds ago</Text>
                </Right>
              </CardItem>
            </Card>
        </Content>
        </Container>
      );
    }
  }