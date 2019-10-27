import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (

    <nav>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/our-story">History</NavLink></li>
        </ul>
    </nav>
)

export default Home;