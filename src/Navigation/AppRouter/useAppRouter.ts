import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

function useAppRouter() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
}

export default useAppRouter;
