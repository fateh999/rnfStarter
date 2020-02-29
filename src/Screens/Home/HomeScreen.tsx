import React from 'react';
import {Container, Center, Padding} from 'rnfui';
import {Button} from 'react-native-paper';
import useHomeScreen from './useHomeScreen';
import {ScreenType} from '../../Types/ScreenType';
import scaler from '../../Utilities/scaler';

function HomeScreen(props: ScreenType) {
  const {navigateToDetailScreen} = useHomeScreen(props);

  return (
    <Container>
      <Center vertical>
        <Padding size={scaler(50)}>
          <Button mode={'contained'} onPress={navigateToDetailScreen}>
            Detail
          </Button>
        </Padding>
      </Center>
    </Container>
  );
}

export default HomeScreen;
