import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class DataOverview extends Component {
  render() {
    return (
      <Container>
       <Content>
            <Card>
              <CardItem cardBody style={{backgroundColor: 'darkblue', height: 150, justifyContent:"center", flexDirection:'column'}}>
                <Text style={{color:'white', fontSize:20,}}>Sales</Text>
                <Text style={{color:'white', fontSize:35,}}>RS 2,445</Text>
              </CardItem>
              <CardItem>
                <Left>
                    <Text style={{color:'grey'}}>Transactions</Text>
                </Left>
                <Body style={{marginLeft: 30}}>
                    <Text style={{color:'grey', marginLeft:20}}>Avg</Text>
                </Body>
                <Right>
                  <Text style={{color:'grey', marginRight:10}}>Covers</Text>
                </Right>
              </CardItem>
              <CardItem style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, borderRadius:100}}>
                <Left>
                    <Text style={{marginLeft:50}}>3</Text>
                </Left>
                <Body style={{marginLeft: 30}}>
                    <Text style={{marginLeft: 10}}>RS815</Text>
                </Body>
                <Right>
                  <Text style={{marginRight: 30}}>0</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Right>
                  <Text style={{textAlign:'left', marginRight:-70}}>last updated: few seconds ago</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
      </Container>
    );
  }
}