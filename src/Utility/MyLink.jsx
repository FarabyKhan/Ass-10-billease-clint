import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({to, children, className}) => {
    return (
        <div>
            <NavLink to={to} className={({isActive})=> isActive ? "text-transparent bg-clip-text text-2xl bg-gradient-to-r from-[#f7e5eb] to-[#ca1322] font-semibold" : `${className}font-semibold text-2xl `}>
                {children}
            </NavLink>
        </div>
    );
};

export default MyLink;