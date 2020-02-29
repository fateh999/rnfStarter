import {ScreenType} from '../../Types/ScreenType';

function useHomeScreen({navigation}: ScreenType) {
  const navigateToDetailScreen = () => {
    navigation.navigate('Detail');
  };

  return {
    navigateToDetailScreen,
  };
}

export default useHomeScreen;
