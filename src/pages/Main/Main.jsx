import React from 'react';
import MainLauout from "../../layouts/MainLauout";
import Item from "../../components/Item/Item";
import './Main.scss'

const Main = () => {
    return (
        <MainLauout>
            <div className={'main'}>
                <Item text={'Item content 1'}/>
                <Item text={'Item content 2'}/>
                <Item text={'Item content 3'}/>
            </div>
        </MainLauout>
    );
};

export default Main;