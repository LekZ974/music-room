import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import NotConnected from './NotConnected';

const Home = () => (
  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Music Room</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <Text>This is Content Section</Text>
    </Content>
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Footer</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);

export default compose(
  connect(({ user }) => ({
    isLogged: !!user.email,
  })),
  branch(({ isLogged }) => !isLogged, renderComponent(NotConnected)),
)(Home);
