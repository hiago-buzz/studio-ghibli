import React, { Fragment } from 'react';
import Routes from './routes';
import Menu from './pages/Menu';


const App = () => {
    return (
        <Fragment>
            <Menu />
            <Routes />
        </Fragment>
    )
}

export default App;