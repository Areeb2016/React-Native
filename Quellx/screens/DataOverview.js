import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title, Tabs, Tab } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import {View} from 'react-native';
import{createDrawerNavigator, DrawerItems}from "react-navigation-drawer";

export default class DataOverview extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
     // data:props.navigation.dataSource.token,
      daily: '',
     // weekly: [],
      sale:''
    }
   }

   componentDidMount() {
     this.getDaily();
     //this.getWekkly();
   }

   getDaily(){
    fetch("http://eplaza.herokuapp.com/api/report/daily",{
      method:"POST",
        headers: {
          'Accept': 'application/json',
         'Content-Type': 'application/json',
       //  Authorization: 'Bearer ' + data,
       },
       body:JSON.stringify({
         "sale":this.state.sale,
       })
      })
  .then(response => response.json())
  .then((responseJson)=> {
    this.setState({
     loading: false,
     daily: responseJson,
    })
   Alert.alert(this.state.daily.sales)
  })
  .catch(error=>console.log(error))
   }

  //  getWekkly(){
  //   fetch("http://eplaza.herokuapp.com/api/report/weekly",{
  //     method:"POST",
  //       headers: {
  //        'Content-Type': 'application/json'
  //      },
  //      body:JSON.stringify({
  //        "email":this.state.email,
  //        "password":this.state.password
  //      })
  //     })
  // .then(response => response.json())
  // .then((responseJson)=> {
  //   this.setState({
  //    loading: false,
  //    weekly: responseJson,
  //   })
  //   Alert.alert(this.state.dataSource.message)
  // })
  // .catch(error=>console.log(error))
  //  }

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
          <Tabs style={{backgroundColor:'darkblue'}}>
            <Tab heading="Today's Sales" activeTabStyle={{backgroundColor:'darkblue'}} tabStyle={{backgroundColor:'darkblue'}}>
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
        </Tab>
        <Tab heading="Weekly Sales" activeTabStyle={{backgroundColor:'darkblue'}} tabStyle={{backgroundColor:'darkblue'}}>
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
        </Tab>
        </Tabs>
        </Container>
      );
    }
  }