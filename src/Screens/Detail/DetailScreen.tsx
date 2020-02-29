import React from 'react';
import {Container, Center} from 'rnfui';
import {ActivityIndicator} from 'react-native-paper';

function DetailScreen() {
  return (
    <Container>
      <Center allAxis>
        <ActivityIndicator size={'large'} />
      </Center>
    </Container>
  );
}

export default DetailScreen;
