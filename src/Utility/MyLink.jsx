import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, children, className}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive})=> isActive ? "text-transparent bg-clip-text text-2xl bg-gradient-to-r from-[#276faa] to-[#191186] font-semibold" : `${className}font-semibold text-2xl `}>
                {children}
            </NavLink>
        </div>
    );
};

export default MyLink;