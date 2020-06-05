import React from 'react';
import { Provider } from 'react-redux';

import List from './components/List';

import store from './store';

const App = () => <Provider store={store}><List /></Provider>;

export default App;
