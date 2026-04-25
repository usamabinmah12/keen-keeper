import React, { createContext, useState } from 'react';

export const PersonContext = createContext();

const ContextProvider = ({ children }) => {
    const [list , setList] = useState([]);
    const [t,setT] = useState(0);
    const [c,setC] = useState(0);
    const [v,setV] = useState(0);
    // const [actions  , setActions]
    const data = {
        list,
        setList,
        t,
        setT,
        v,
        setV,
         c,  
         setC,
    };

    return (
        <PersonContext.Provider value={data}>
            {children}
        </PersonContext.Provider>
    );
};

export default ContextProvider;