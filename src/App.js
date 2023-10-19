import React from 'react';

import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/SideBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* Your React components go here */}
                <NavigationBar />
                <div className="container">
                    <div className="row">
                        {/* Include the Sidebar component here */}
                        <Sidebar />
                        <Routes>
                            {/* Other routes */}
                            <Route path="/" exact component={Home} />
                            <Route path="/guides-joueurs" component={Main} />
                            {/* Other routes */}
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;


