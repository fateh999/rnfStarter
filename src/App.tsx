import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'rnfui';
import {ThemeProvider as PaperThemeProvider} from 'react-native-paper';
import AppTheme from './Config/AppTheme';
import PaperTheme from './Config/PaperTheme';
import AppRouter from './Navigation/AppRouter/AppRouter';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider value={AppTheme}>
        <PaperThemeProvider theme={PaperTheme}>
          <AppRouter />
        </PaperThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
