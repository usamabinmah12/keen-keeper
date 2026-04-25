import React, { createContext, useState } from 'react';

export const PersonContext = createContext();

const ContextProvider = ({ children }) => {
    const [list , setList] = useState([]);
    const data = {
        list,
        setList,
    };

    return (
        <PersonContext.Provider value={data}>
            {children}
        </PersonContext.Provider>
    );
};

export default ContextProvider;