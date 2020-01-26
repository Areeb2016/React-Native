import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import {View} from 'react-native'

export default class DailyCovers extends Component {
    render() {
       const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const axesSvg = { fontSize: 10, fill: '#E86100' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
      return (
        <Container>
          <Content>
            <Card>
              <CardItem cardBody style={{backgroundColor: '#E86100', height: 120, justifyContent:'center', flexDirection:'column'}}>
                <Text style={{textAlign: "center", color:'white', fontSize:15}}>Total</Text>
                <Text style={{textAlign: "center", color:'white', fontSize:40}}>0</Text>
              </CardItem>
              <CardItem>
                <Left>
                    <Text style={{color:'grey'}}>AVERAGE</Text>
                </Left>
                <Body style={{marginLeft: 30}}>
                    <Text style={{color:'grey', marginLeft: -20}}>BUSIEST DAY</Text>
                </Body>
                <Right>
                  <Text style={{color:'grey', marginLeft: -20}}>QUITEST DAY</Text>
                </Right>
              </CardItem>
              <CardItem style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, borderRadius:100}}>
                <Left>
                    <Text style={{marginLeft:30}}>0</Text>
                </Left>
                <Body style={{marginLeft: 30}}>
                    <Text style={{marginLeft: 0}}>01 OCT</Text>
                </Body>
                <Right>
                  <Text style={{marginRight: 20}}>01 OCT</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Right>
                  <Text style={{textAlign:'left', marginRight:-70}}>last updated: few seconds ago</Text>
                </Right>
              </CardItem>
            </Card>
      <Text style={{textAlign:'center', fontSize:20}}>{"\n"}Daily Covers</Text>

            <View style={{ height: 200, padding: 10, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: '#E86100' }}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>

        </Content>
        </Container>
      );
    }
  }