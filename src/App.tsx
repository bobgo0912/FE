import React from 'react';
import logo from './logo.svg';
import Counter from "./common/c";
import './App.css';
import Helloworld from "./page/helloword/helloworld";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <Counter></Counter>
                <Helloworld></Helloworld>
            </header>
        </div>
    );
}

export default App;
