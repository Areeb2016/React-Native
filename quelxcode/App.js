
import React,{Component,useEffect,useState} from 'react';
import {
  Text, View, SafeAreaView,
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Button, Thumbnail, Tab,Tabs, Left, Body, Right, Title } from 'native-base';
import { Dimensions } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import{createDrawerNavigator, DrawerItems}from "react-navigation-drawer";
import {createAppContainer} from 'react-navigation';
import{Feather} from "@expo/vector-icons";
import Tab1 from './screens/Overview'
import Tab2 from './screens/Cover'
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
            <Tab heading="Todays Sales" tabStyle={{backgroundColor:'darkblue'}} activeTabStyle={{backgroundColor:'darkblue'}}>
              <Tab1 />
            </Tab>
            <Tab heading="Weekly Sales" tabStyle={{backgroundColor:'darkblue'}} activeTabStyle={{backgroundColor:'darkblue'}}>
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
          <Header hasTabs style={{backgroundColor:'#E86100', paddingTop:10}}>
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
            <Tab heading="From: 01/10/2019" activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} tabStyle={{backgroundColor: '#E86100'}} activeTabStyle={{backgroundColor: '#E86100'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab2 />
            </Tab>
            <Tab heading="To: 07/10/2019" tabStyle={{backgroundColor:'#E86100'}} activeTabStyle={{backgroundColor: '#E86100'}} activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
              <Tab2 />
            </Tab>
          </Tabs>
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
          <Text onPress={() => props.navigation.navigate('DataOverview')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Daily Transaction
          </Text>
          <Text onPress={() => props.navigation.navigate('DataOverview')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Daily Totals
          </Text>
          <Text onPress={() => props.navigation.navigate('DataOverview')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Weekly Totals
          </Text>
          <Text onPress={() => props.navigation.navigate('DataOverview')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Avg Transactions
          </Text>
          <Text onPress={() => props.navigation.navigate('DailyCovers')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Daily Covers
          </Text>
          <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginTop:20}}/>
          <Text onPress={() => props.navigation.navigate('DailyCovers')} style={{fontSize:20, marginTop:20, fontWeight:'300', marginLeft:20}}>
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
  DailyTransaction:{
    screen:DataOverview,
    navigationOptions:{
      title:"Daily Transaction",
    },    
  },
  DailyTotals:{
    screen:DataOverview,
    navigationOptions:{
      title:"Daily Totals",
    },    
  },
  WeeklyTotals:{
    screen:DataOverview,
    navigationOptions:{
      title:"Weekly Totals",
    }
  },
  AvgTransactions:{
    screen:DataOverview,
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
  Support:{
    screen:DataOverview,
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
