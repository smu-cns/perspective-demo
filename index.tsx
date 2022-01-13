import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import Provider from 'react-redux/es/components/Provider';
import { store } from './store';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <Demo />
    </Provider>
  </StyledEngineProvider>,
  document.querySelector('#root')
);
