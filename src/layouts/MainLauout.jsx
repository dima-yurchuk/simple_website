import React from 'react';
import Header from "../components/Header/Header";

const MainLauout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
};

export default MainLauout;