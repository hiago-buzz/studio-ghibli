import React, { Fragment } from 'react';
import Routes from './routes';
import Menu from './pages/menu/menu';


const App = () => {
    return (
        <Fragment>
            <Menu />
            <Routes />
        </Fragment>
    )
}

export default App;