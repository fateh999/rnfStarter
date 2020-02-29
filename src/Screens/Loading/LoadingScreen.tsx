import React from 'react';
import {Container, Center} from 'rnfui';
import {ActivityIndicator} from 'react-native-paper';
import useLoadingScreen from './useLoadingScreen';
import {ScreenType} from '../../Types/ScreenType';

function LoadingScreen(props: ScreenType) {
  const {statusBarBackgroundColor} = useLoadingScreen(props);

  return (
    <Container statusBarBackgroundColor={statusBarBackgroundColor}>
      <Center allAxis>
        <ActivityIndicator size={'large'} />
      </Center>
    </Container>
  );
}

export default LoadingScreen;
