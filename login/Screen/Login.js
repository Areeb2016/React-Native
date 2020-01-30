class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[],
      email:'',
      checked: '',
      password:''
     };
   }
  componentDidMount(){
    this.getdata();
  }
  getdata(){
    fetch("http://eplaza.herokuapp.com/api/users/login",{
    method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":this.state.email,
       "password":this.state.password
     })
    })
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson,
  })
  Alert.alert(this.state.dataSource.message)
})
.catch(error=>console.log(error))
}
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
              <Input onChangeText={email => this.setState({email})}/>
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input onChangeText={password => this.setState({password})}/>
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
          <Button rounded style={{marginHorizontal:60, flex:1, marginTop:25}} 
          onPress={() => this.getdata()}
          >
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