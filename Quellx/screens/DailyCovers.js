import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import {View} from 'react-native'

export default class DailyCovers extends Component {
    render() {
       const data = [ 50, 10, 40, 75, -4, -24, 80, 71, 35, 53, -53, 24, 50, -20, -80 ]
        const axesSvg = { fontSize: 10, fill: '#FF8362' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
      return (
        <Container>
          <Header hasTabs style={{backgroundColor:'#FF8362', paddingTop:10}}>
          <Left>
           <Button transparent style={{paddingTop:10}}
          onPress={()=>this.props.navigation.toggleDrawer()}
          >
            <Ionicons name='ios-menu' size={30} color='white'/>
        </Button> 
            </Left>
          <Body>
              <Title>Daily Covers</Title>
            </Body>
            <Right/>
          </Header>
          <Content>
            <Card>
              <CardItem cardBody style={{backgroundColor: '#FF8362', height: 120, justifyContent:'center', flexDirection:'column'}}>
                <Text style={{textAlign: "center", color:'white', fontSize:18}}>Total</Text>
                <Text style={{textAlign: "center", color:'white', fontSize:40}}>0</Text>
              </CardItem>
              <CardItem style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, borderRadius:100}}>
                <Left style={{flexDirection:'column'}}>
                <Text style={{color:'grey', marginLeft: -20, fontSize:10}}>AVERAGE</Text>
                <Text style={{marginLeft: -20, marginVertical:10, fontSize:18}}>0</Text>
                </Left>
                <Body style={{marginLeft: 30}}>
                <Text style={{color:'grey', marginLeft: 0, fontSize:10}}>BUSIEST DAY</Text>
                <Text style={{marginLeft: 0, marginVertical:10, fontSize:18}}>01 OCT</Text> 
                </Body>
                <Right>
                <Text style={{color:'grey', marginRight: 10, fontSize:10}}>QUITEST DAY</Text>
                <Text style={{marginRight: 10, marginVertical:10, fontSize:18}}>01 OCT</Text>  
                </Right>
              </CardItem>
              <CardItem>
                <Right>
                  <Text style={{marginRight:-70, color:'grey', fontSize:12}}>Last updated: a few seconds ago</Text>
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
                        svg={{ stroke: '#FF8362' }}
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