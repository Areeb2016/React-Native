
import React,{Component,useEffect,useState} from 'react';
import {
  Text, View, SafeAreaView,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Button, Thumbnail, Tab,Tabs, Left, Body, Right, Title, Form, Item, Label, Input } from 'native-base';
import { Dimensions } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import{createDrawerNavigator, DrawerItems}from "react-navigation-drawer";
import {createAppContainer} from 'react-navigation';
import{Feather} from "@expo/vector-icons";
import Tab1 from './screens/DataOverview';
import Tab2 from './screens/DailyCovers';
import Tab3 from './screens/AverageTransactions';
import Tab4 from './screens/DailyTotals';
import Tab5 from './screens/DailyTransactions';
import Tab6 from './screens/WeeklyTotals';
import { ScrollView } from 'react-native-gesture-handler';

//const screenWidth = Dimensions.get("window").width;

  export class DataOverview extends Component {
    render() {
      return (
        <Container>
          <Header hasTabs style={{backgroundColor:'darkblue', paddingTop:10}}>
          <Left>
           <Button transparent style={{paddingTop:10}}
          onPress={()=>this.props.navigation.toggleDrawer()}
          >
            <Ionicons name='ios-menu' size={30} color='white'/>
        </Button> 
            </Left>
          <Body>
              <Title style={{color:'white'}}>Data Overview</Title>
            </Body>
            <Right/>
          </Header>
          <Tabs>
            <Tab heading="TODAY'S SALES" tabStyle={{backgroundColor:'darkblue'}} activeTabStyle={{backgroundColor:'darkblue'}}>
              <Tab1 />
            </Tab>
            <Tab heading="THIS WEEK'S SALES" tabStyle={{backgroundColor:'darkblue'}} activeTabStyle={{backgroundColor:'darkblue'}}>
              <Tab1 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }

  export class DailyCovers extends Component {
    render() {
      //console.log(this.props);
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
          <Tabs>
            <Tab heading="FROM: 01/10/2019" activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} tabStyle={{backgroundColor: '#FF8362'}} activeTabStyle={{backgroundColor: '#FF8362'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab2 />
            </Tab>
            <Tab heading="TO: 07/10/2019" tabStyle={{backgroundColor:'#FF8362'}} activeTabStyle={{backgroundColor: '#FF8362'}} activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab2 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }

  export class WeeklyTotals extends Component {
    render() {
      //console.log(this.props);
      return (
        <Container>
          <Header hasTabs style={{backgroundColor:'#FD9A24', paddingTop:10}}>
          <Left>
           <Button transparent style={{paddingTop:10}}
          onPress={()=>this.props.navigation.toggleDrawer()}
          >
            <Ionicons name='ios-menu' size={30} color='white'/>
        </Button> 
            </Left>
          <Body>
              <Title>Weekly Totals</Title>
            </Body>
            <Right/>
          </Header>
          <Tabs>
            <Tab heading="FROM: 01/10/2019" activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} tabStyle={{backgroundColor: '#FD9A24'}} activeTabStyle={{backgroundColor: '#FD9A24'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab6 />
            </Tab>
            <Tab heading="TO: 07/10/2019" tabStyle={{backgroundColor:'#FD9A24'}} activeTabStyle={{backgroundColor: '#FD9A24'}} activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab6 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }

  export class AverageTransactions extends Component {
    render() {
      //console.log(this.props);
      return (
        <Container>
          <Header hasTabs style={{backgroundColor:'#B19CD9', paddingTop:10}}>
          <Left>
           <Button transparent style={{paddingTop:10}}
          onPress={()=>this.props.navigation.toggleDrawer()}
          >
            <Ionicons name='ios-menu' size={30} color='white'/>
        </Button> 
            </Left>
          <Body>
              <Title>Average Transactions</Title>
            </Body>
            <Right/>
          </Header>
          <Tabs>
            <Tab heading="FROM: 01/10/2019" activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} tabStyle={{backgroundColor: '#B19CD9'}} activeTabStyle={{backgroundColor: '#B19CD9'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab3 />
            </Tab>
            <Tab heading="TO: 07/10/2019" tabStyle={{backgroundColor:'#B19CD9'}} activeTabStyle={{backgroundColor: '#B19CD9'}} activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab3 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }

  export class DailyTransactions extends Component {
    render() {
      //console.log(this.props);
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
          <Tabs>
            <Tab heading="FROM: 14/10/2019" activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} tabStyle={{backgroundColor: '#06C258'}} activeTabStyle={{backgroundColor: '#06C258'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab5 />
            </Tab>
            <Tab heading="TO: 21/10/2019" tabStyle={{backgroundColor:'#06C258'}} activeTabStyle={{backgroundColor: '#06C258'}} activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab5 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }

  export class DailyTotals extends Component {
    render() {
      //console.log(this.props);
      return (
        <Container>
          <Header hasTabs style={{backgroundColor:'darkblue', paddingTop:10}}>
          <Left>
           <Button transparent style={{paddingTop:10}}
          onPress={()=>this.props.navigation.toggleDrawer()}
          >
            <Ionicons name='ios-menu' size={30} color='white'/>
        </Button> 
            </Left>
          <Body>
              <Title>Daily Totals</Title>
            </Body>
            <Right/>
          </Header>
          <Tabs>
            <Tab heading="From: 01/10/2019" activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} tabStyle={{backgroundColor: 'darkblue'}} activeTabStyle={{backgroundColor: 'darkblue'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab4 />
            </Tab>
            <Tab heading="To: 07/10/2019" tabStyle={{backgroundColor:'darkblue'}} activeTabStyle={{backgroundColor: 'darkblue'}} activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab4 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }

  export class SupportTicket extends Component {
    render() {
      //console.log(this.props);
      return (
        <Container>
          <Header style={{backgroundColor:'darkblue', paddingTop:10}}>
          <Left>
           <Button transparent style={{paddingTop:10}}
          onPress={()=>this.props.navigation.toggleDrawer()}
          >
            <Ionicons name='md-arrow-back' size={30} color='white'/>
        </Button> 
            </Left>
          <Body>
              <Title>Raise a Support Ticket</Title>
            </Body>
            <Right/>
          </Header>
          
          <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Subject</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Details</Label>
              <Input />
            </Item>
          </Form>
          <Button block success style={{marginVertical:20, marginHorizontal:20}}>
          <Title>SUBMIT TICKET</Title>
          </Button>
        </Content>
        </Container>
      );
    }
  }

  const CustomDrawer = (props) =>{
    //console.log(props)
    return(
      <ScrollView>
        <View style={{backgroundColor:'darkblue', height: 120, paddingTop:40, paddingHorizontal:20}}>
          <Text style={{color:'white', fontSize: 20}}>Second Cup</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{flex:1, color:'white', fontSize:15}}>scbahria4isb</Text>
            <Ionicons name='md-arrow-dropdown' size={30} color='black'/>
          </View>
          </View>
      <SafeAreaView
        style={{flex: 1}}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
         <Text onPress={() => props.navigation.navigate('DataOverview')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Data OverView
          </Text>
          <Text onPress={() => props.navigation.navigate('DailyTransactions')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Daily Transaction
          </Text>
          <Text onPress={() => props.navigation.navigate('DailyTotals')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Daily Totals
          </Text>
          <Text onPress={() => props.navigation.navigate('WeeklyTotals')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Weekly Totals
          </Text>
          <Text onPress={() => props.navigation.navigate('AverageTransactions')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Average Transactions
          </Text>
          <Text onPress={() => props.navigation.navigate('DailyCovers')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Daily Covers
          </Text>
          <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginTop:20}}/>
          <Text onPress={() => props.navigation.navigate('SupportTicket')} style={{fontSize:20, marginTop:20, fontWeight:'300', marginLeft:20}}>
          Raise a Support Ticket
          </Text>
          <Text onPress={() => props.navigation.navigate('DailyCovers')} style={{fontSize:20,marginTop:20, fontWeight:'300', marginLeft:20}}>
          About
          </Text>
      </SafeAreaView>
    </ScrollView>

    )}

const DrawerNavigator=createDrawerNavigator({

  DataOverview:{
    screen:DataOverview,
    navigationOptions:{
      title:"Data OverView",
    },    
  },
  DailyTransactions:{
    screen:DailyTransactions,
    navigationOptions:{
      title:"Daily Transaction",
    },    
  },
  DailyTotals:{
    screen:DailyTotals,
    navigationOptions:{
      title:"Daily Totals",
    },    
  },
  WeeklyTotals:{
    screen:WeeklyTotals,
    navigationOptions:{
      title:"Weekly Totals",
    }
  },
  AverageTransactions:{
    screen:AverageTransactions,
    navigationOptions:{
      title:"Avg Transactions",
    }
  },
  DailyCovers:{
    screen:DailyCovers,
    navigationOptions:{
      title:"Daily Covers",
    }
  },
  SupportTicket:{
    screen:SupportTicket,
    navigationOptions:{
      title:"Raise a support ticket",
    }
  },
  About:{
    screen:DataOverview,
    navigationOptions:{
      title:"About",
    }
  }, 
},
{contentComponent: CustomDrawer})
export default createAppContainer(DrawerNavigator);
