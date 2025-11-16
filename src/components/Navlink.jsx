import React from 'react';
import { NavLink } from 'react-router';

const Navlink = ({path, name}) => {
    return (
        <NavLink to={path} className={({ isActive }) =>
                    isActive ? 'text-[#2a9d8f]' : 'text-[#efece3]'
                }>
                    {name}
        </NavLink>
    );
};

export default Navlink;