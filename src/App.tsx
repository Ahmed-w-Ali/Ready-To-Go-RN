import React from 'react';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import ThemeContextProvider, {
  ThemeContext,
  ThemeContextType,
} from './context/ThemeContext';
import Router from './navigation/Router';
import {store} from './store/store';
import {colors} from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <ThemeContext.Consumer>
          {(ctx: ThemeContextType) => (
            <StatusBar
              barStyle={colors[ctx.theme].barStyle}
              backgroundColor={colors[ctx.theme].backgroundColor}
            />
          )}
        </ThemeContext.Consumer>
        <Router />
        <Toast />
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
