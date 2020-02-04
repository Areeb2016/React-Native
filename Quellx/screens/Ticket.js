import React,{Component} from 'react';
import { Container, Header, Content, Button, Left, Body, Right, Title, Form, Item, Label, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class SupportTicket extends Component {
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