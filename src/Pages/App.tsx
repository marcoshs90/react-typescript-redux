import React from 'react';
import { Router, Route } from 'react-router-dom';

import List from '../components/List';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={List} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
