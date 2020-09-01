import React from 'react';
import Routes from './routes';
import Menu from './pages/Menu/index';


const App = () => {
    return (
        <div className="App">
            <Menu />
            <Routes />
        </div>
    )
}

export default App;