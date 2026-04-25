import React, { useContext } from 'react';
import { PersonContext } from './ContextProvider';

const Timeline = () => {
    const bookContext = useContext(PersonContext).list;
    //console.log(bookContext.list);
    
    return (
        <div className=' container mx-auto'>
            {
               bookContext.length 
            }
        </div>
    );
};

export default Timeline;