import React from 'react';
import Items from "../../Components/Items/BlocksItems/Items.tsx";
import SideBar from "../SideBar/SideBar.tsx";

const Home = () => {

    return (
        <div className="d-flex">
            <SideBar/>
            <Items/>
        </div>
    );
};

export default Home;