import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Left, Right, Icon, Button, Content, Title, Form, Item, Label, Input } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View, AsyncStorage, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';


class Home extends React.Component {
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
        <Left><Image style={{width: 30, height: 30}} source={require('./assets/menu.png')}/></Left>
        <Right><Image style={{width: 30, height: 30}} source={require('./assets/chat.png')}/></Right>
      </Header>
      <Content style={{marginVertical:100}}>
        <View style={{alignItems:'center', marginBottom:30}} >
          <Image style={{width: 150, height: 150}} source={require('./assets/logo.png')}/>
        </View>
        <Button rounded style={{marginHorizontal:60, flex:1}} onPress={() => this.props.navigation.navigate("Login")}>
          <Text style={{textAlign:'center'}}>Get Started</Text>
        </Button>
        <Text style={{textAlign:'center', marginTop:20}}>Login To Account</Text>
        </Content>
      </Container>
    );
  }
}

class Login extends React.Component{
  state = {
    checked: '',
  };
  render(){
    const { checked } = this.state;
    return(
      <Container>
        <Header transparent>
        <Left><Image style={{width: 30, height: 30}} source={require('./assets/menu.png')}/></Left>
        <Right><Image style={{width: 30, height: 30}} source={require('./assets/chat.png')}/></Right>
        </Header>
        <Content>
          <Form style={{paddingHorizontal:10}}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input />
            </Item>
        <View style={{flexDirection:'row', paddingTop:30, paddingHorizontal:5}}>
        <RadioButton
          value=""
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
        <Text style={{textAlignVertical:'center'}}>Remember me</Text>
        </View>
          </Form>
          <Button rounded style={{marginHorizontal:60, flex:1, marginTop:25}}>
          <Text>Sign In</Text>
          </Button>
          <Button transparent style={{marginHorizontal:60, flex:1, marginTop:5}}>
            <Text style={{marginLeft:13}}>Forgot your password?</Text>
          </Button>
          <View style={{flexDirection:'row'}}>
            <Left style={{borderBottomColor:'grey', borderBottomWidth:1}}/>
            <Text style={{color:'grey'}}>Or</Text>
          <Right style={{borderBottomColor:'grey', borderBottomWidth:1}}/>
          </View>
          <Button bordered rounded style={{marginHorizontal:60, flex:1, marginTop:20}}>
          <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

// const Stack = createStackNavigator();
// export const app= function App({ navigation }) {
  // const [isloggedin,setLogged] = useState(null)

  //  const detectLogin= async ()=>{
  //     const token = await AsyncStorage.getItem('token')
  //     if(token){
  //         setLogged(true)
  //     }else{
  //         setLogged(false)
  //     }
  //  }
  // useEffect(()=>{
  //    detectLogin()
  // },[])

//   return (
//     <NavigationNativeContainer>
//     <Stack.Navigator>
//      <Stack.Screen name="Home" component={Home} />
//      <Stack.Screen name="Login" component={Login} />
//     </Stack.Navigator>
//   </NavigationNativeContainer>
//   );
// }

 const AppNavigator = createStackNavigator({
   Home:{
     screen: Home,
     navigationOptions:{
      headerShown: false,
     }
   },
   Login:{
     screen: Login,
     navigationOptions:{
      headerShown: false,
     }
   }
 });

 export default createAppContainer(AppNavigator);
