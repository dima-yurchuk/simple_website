import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Info from "./pages/Info/Info";
import Contacts from "./pages/Contacts/Contacts";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/info'} element={<Info/>}/>
                <Route path={'/contacts'} element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
