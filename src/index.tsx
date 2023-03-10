import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';
import GeneralRoutes from './routes';


ReactDOM.render(<Provider store={store}><GeneralRoutes /></Provider>,
                document.getElementById('root'));
