import {useActiveTheme} from 'rnfui';
import {ScreenType} from '../../Types/ScreenType';
import {useEffect} from 'react';

function useLoadingScreen({navigation}: ScreenType) {
  const Theme = useActiveTheme();

  const checkLoginStatus = async () => {
    navigation.navigate('Root');
  };

  useEffect(() => {
    setTimeout(() => {
      checkLoginStatus();
    }, 1000);
  }, []);

  return {
    statusBarBackgroundColor: Theme.color.primary,
  };
}

export default useLoadingScreen;
