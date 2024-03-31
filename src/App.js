import React from 'react';
import Hook1 from './components/Hook1';
import Hook2 from './components/Hook2';
import Hook3 from './components/Hook3';
import './style.css'
const App = () => {
    return (
        <div>
            <Hook2 />
            <Hook1 />
            <Hook3 />
        </div>
    );
}

export default App;
