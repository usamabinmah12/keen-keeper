import React, { useContext } from 'react';
import { PersonContext } from './ContextProvider';
import Per from './Per';

const Timeline = () => {
    const bookContext = useContext(PersonContext).list;
    //console.log(bookContext.list);
    
    
    return (
        <div className=' container mx-auto '>
             <h2 className=" text-5xl">
                    Timeline
             </h2>
            {
               bookContext.map(per => <Per per = {per}></Per>)
            }
        </div>
    );
};

export default Timeline;