import React, { Component } from "react";
import Classes from "./components/Class";
import Dummy from "./components/Dummy";
import Exports from "./components/Export";

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Running Good Luck !</h1>
                <Classes />
                <Exports />
                <Dummy />
            </div>
        );
    }
}

export default App;
