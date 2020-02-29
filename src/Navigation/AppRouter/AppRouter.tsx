import React from 'react';
import useAppRouter from './useAppRouter';
import AppSwitchNavigator from '../AppSwitchNavigator';

function AppRouter() {
  useAppRouter();
  return <AppSwitchNavigator />;
}

export default AppRouter;
