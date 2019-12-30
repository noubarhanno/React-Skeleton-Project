import React from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from './theme/ThemeProvider';
import Router from './routes';
import configureStore from './config/redux/store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
