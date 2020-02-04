
import React,{Component,useEffect,useState} from 'react';
import {
  Text, View, SafeAreaView,
} from 'react-native';
import { AppLoading } from 'expo';
import { Container, Header, Content, Card, CardItem, Button, Thumbnail, Tab,Tabs, Left, Body, Right, Title, Form, Item, Label, Input } from 'native-base';
import { Dimensions } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import{createDrawerNavigator, DrawerItems}from "react-navigation-drawer";
import {createAppContainer} from 'react-navigation';
import{Feather} from "@expo/vector-icons";
//import Tab1 from './screens/DataOverview';
//import Tab2 from './screens/DailyCovers';
import AvgTrans from './screens/AverageTransactions';
//import Tab4 from './screens/DailyTotals';
import DTrans from './screens/DailyTransactions';
import WTotal from './screens/WeeklyTotals';
//import App from './screens/Stack';
import { ScrollView } from 'react-native-gesture-handler';
import DOverview from './screens/DataOverview';
//import { createAppContainer, FlatList } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Access from './screens/Login';
//import DOverview from './DataOverview';
import Splash from './screens/Start';
import Support from './screens/Ticket';
import DTotal from './screens/DailyTotals';


//const screenWidth = Dimensions.get("window").width;

  // export class DataOverview extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isReady: false,
  //     };
  //   }
  
  //   async componentDidMount() {
  //     await Font.loadAsync({
  //       Roboto: require('native-base/Fonts/Roboto.ttf'),
  //       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //       ...Ionicons.font,
  //     });
  //     this.setState({ isReady: true });
  //   }
  //   render() {
  //     if (!this.state.isReady) {
  //       return <AppLoading />;
  //     }
  //     return (
  //       <Container>
  //         <Header hasTabs style={{backgroundColor:'darkblue', paddingTop:10}}>
  //         <Left>
  //          <Button transparent style={{paddingTop:10}}
  //         onPress={()=>this.props.navigation.toggleDrawer()}
  //         >
  //           <Ionicons name='ios-menu' size={30} color='white'/>
  //       </Button> 
  //           </Left>
  //         <Body>
  //             <Title style={{color:'white'}}>Data Overview</Title>
  //           </Body>
  //           <Right/>
  //         </Header>
  //         <Tabs>
  //           <Tab heading="TODAY'S SALES" tabStyle={{backgroundColor:'darkblue'}} activeTabStyle={{backgroundColor:'darkblue'}}>
  //             <Tab1 />
  //           </Tab>
  //           <Tab heading="THIS WEEK'S SALES" tabStyle={{backgroundColor:'darkblue'}} activeTabStyle={{backgroundColor:'darkblue'}}>
  //             <Tab1 />
  //           </Tab>
  //         </Tabs>
  //       </Container>
  //     );
  //   }
  // }

  
  // export class WeeklyTotals extends Component {
  //   render() {
  //     //console.log(this.props);
  //     return (
  //       <Container>
  //         <Header hasTabs style={{backgroundColor:'#FD9A24', paddingTop:10}}>
  //         <Left>
  //          <Button transparent style={{paddingTop:10}}
  //         onPress={()=>this.props.navigation.toggleDrawer()}
  //         >
  //           <Ionicons name='ios-menu' size={30} color='white'/>
  //       </Button> 
  //           </Left>
  //         <Body>
  //             <Title>Weekly Totals</Title>
  //           </Body>
  //           <Right/>
  //         </Header>
  //         <Tabs>
  //           <Tab heading="FROM: 01/10/2019" activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} tabStyle={{backgroundColor: '#FD9A24'}} activeTabStyle={{backgroundColor: '#FD9A24'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
  //             <Tab6 />
  //           </Tab>
  //           <Tab heading="TO: 07/10/2019" tabStyle={{backgroundColor:'#FD9A24'}} activeTabStyle={{backgroundColor: '#FD9A24'}} activeTextStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}} textStyle={{backgroundColor:'white', borderRadius:20, width:150, textAlign:'center',height:30, textAlignVertical:'center'}}>
  //             <Tab6 />
  //           </Tab>
  //         </Tabs>
  //       </Container>
  //     );
  //   }
  // }

  export const AppNavigator = createStackNavigator({
    Splash:{
      screen: Splash,
      navigationOptions:{
       headerShown: false,
      }
    },
    Access:{
      screen: Access,
      navigationOptions:{
       headerShown: false,
      }
    },
    DOverview:{
        screen: DOverview,
        navigationOptions:{
         headerShown: false,
         }
     },
  });

  const CustomDrawer = (props) =>{
    // console.log('Props`', props)
    return(
      <ScrollView>
        <View style={{backgroundColor:'darkblue', height: 120, paddingTop:40, paddingHorizontal:20}}>
          <Text style={{color:'white', fontSize: 20}}>MTronix</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={{flex:1, color:'white', fontSize:15}}>scbahria4isb</Text>
            <Ionicons name='md-arrow-dropdown' size={30} color='black'/>
          </View>
          </View>
      <SafeAreaView
        style={{flex: 1}}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
         <Text onPress={() => props.navigation.navigate('DOverview')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Data OverView
          </Text>
          <Text onPress={() => props.navigation.navigate('DTrans')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Daily Transaction
          </Text>
          <Text onPress={() => props.navigation.navigate('DTotal')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Daily Totals
          </Text>
          <Text onPress={() => props.navigation.navigate('WTotal')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Weekly Totals
          </Text>
          <Text onPress={() => props.navigation.navigate('AvgTrans')} style={{fontSize:20, marginTop:20, marginLeft:20, fontWeight:'500'}}>
          Average Transactions
          </Text>
          <View style={{borderBottomColor: 'lightgrey', borderBottomWidth: 1, marginTop:20}}/>
          <Text onPress={() => props.navigation.navigate('Support')} style={{fontSize:20, marginTop:20, fontWeight:'300', marginLeft:20}}>
          Raise a Support Ticket
          </Text>
      </SafeAreaView>
    </ScrollView>

    )}

const DrawerNavigator=createDrawerNavigator({
  AppNavigator:{
    screen:AppNavigator,
    navigationOptions:{
      title:"",
    },  
  },
  DOverview:{
    screen:DOverview,
    navigationOptions:{
      title:"Data OverView",
    },    
  },
  DTrans:{
    screen:DTrans,
    navigationOptions:{
      title:"Daily Transaction",
    },    
  },
  DTotal:{
    screen:DTotal,
    navigationOptions:{
      title:"Daily Totals",
    },    
  },
  WTotal:{
    screen:WTotal,
    navigationOptions:{
      title:"Weekly Totals",
    }
  },
  AvgTrans:{
    screen:AvgTrans,
    navigationOptions:{
      title:"Avg Transactions",
    }
  },
  Support:{
    screen:Support,
    navigationOptions:{
      title:"Raise a support ticket",
    }
  },
},
{contentComponent: CustomDrawer})
export default createAppContainer(DrawerNavigator);
