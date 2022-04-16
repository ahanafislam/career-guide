import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => { 
    const resolved = useResolvedPath(to);
    const match = useMatch({path: resolved.pathname, end: true})

    return (
        <Link
        style={{ fontWeight: '600',color: match ? '#c3002f' : '#222d35', borderBottom: match && '1px solid #c3002f',borderTop: match && '1px solid #c3002f', borderRadius: match && '8px'}}
        to={to}
        {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;