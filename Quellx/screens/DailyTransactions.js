import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, Item, DatePicker, Label } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import {View} from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { hide } from 'expo/build/launch/SplashScreen';

export default class DailyTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate1: new Date(),
                   chosenDate2: new Date()
                  };
    
    this.setDate1 = this.setDate1.bind(this);
    this.setDate2 = this.setDate2.bind(this);

  }
  setDate1(newDate) {
    this.setState({ chosenDate1: newDate });
  }
  setDate2(newDate) {
    this.setState({ chosenDate2: newDate });
  }
    render() {
       const data = [ 25, 30, 45, 60, 45, 47, 42, 5 ]
        const axesSvg = { fontSize: 10, fill: '#06C258' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
      return (
        <Container>
          <Header hasTabs style={{backgroundColor:'#06C258', paddingTop:10}}>
          <Left>
           <Button transparent style={{paddingTop:10}}
          onPress={()=>this.props.navigation.toggleDrawer()}
          >
            <Ionicons name='ios-menu' size={30} color='white'/>
        </Button> 
            </Left>
          <Body>
              <Title>Daily Transactions</Title>
            </Body>
            <Right/>
          </Header>
          <Content>
            <View style={{flexDirection:'row', backgroundColor:"#06C258"}}>
          <Item style={{flexDirection:'column', marginLeft:20, borderRadius:10, backgroundColor:'white'}}>
              <DatePicker
              defaultDate={new Date(2020, 4, 4)}
              minimumDate={new Date(2020, 1, 1)}
              maximumDate={new Date(2020, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate1}
            disabled={false}
            />
            <Text>
              FROM: {this.state.chosenDate1.toString().substr(4, 12)}
            </Text>
            
            </Item>
            <Item style={{flexDirection:'column', marginLeft:50, borderRadius:10, backgroundColor:'white'}}>
              <DatePicker
            defaultDate={new Date(2020, 4, 4)}
            minimumDate={new Date(2020, 1, 1)}
            maximumDate={new Date(2020, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate2}
            disabled={false}
            />
            <Text>
              TO: {this.state.chosenDate2.toString().substr(4, 12)}
            </Text>
            </Item>
            </View>
            <Card>
              <CardItem cardBody style={{backgroundColor: '#06C258', height: 120, justifyContent:'center', flexDirection:'column'}}>
                <Text style={{textAlign: "center", color:'white', fontSize:18}}>Total</Text>
                <Text style={{textAlign: "center", color:'white', fontSize:40}}>Rs292</Text>
              </CardItem>
              <CardItem style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, borderRadius:100}}>
                <Left style={{flexDirection:'column'}}>
                <Text style={{color:'grey', marginLeft: -20, fontSize:10}}>AVERAGE</Text>
                <Text style={{marginLeft: -20, marginVertical:10, fontSize:18}}>37</Text>
                </Left>
                <Body style={{marginLeft: 30}}>
                <Text style={{color:'grey', marginLeft: 0, fontSize:10}}>BUSIEST DAY</Text>
                <Text style={{marginLeft: 0, marginVertical:10, fontSize:18}}>17 OCT</Text> 
                </Body>
                <Right>
                <Text style={{color:'grey', marginRight: 10, fontSize:10}}>QUITEST DAY</Text>
                <Text style={{marginRight: 10, marginVertical:10, fontSize:18}}>21 OCT</Text>  
                </Right>
              </CardItem>
              <CardItem>
                <Right>
                  <Text style={{marginRight:-70, color:'grey', fontSize:12}}>Last updated: a few seconds ago</Text>
                </Right>
              </CardItem>
            </Card>
      <Text style={{textAlign:'center', fontSize:20}}>{"\n"}Transactions</Text>

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
                        svg={{ stroke: '#06C258' }}
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