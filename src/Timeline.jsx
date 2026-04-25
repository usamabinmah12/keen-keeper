import React, { useContext } from 'react';
import { PersonContext } from './ContextProvider';
import Per from './Per';

const Timeline = () => {
    const bookContext = useContext(PersonContext).list;

    return (
        <div className='container mx-auto'>
            <h2 className="text-5xl">Timeline</h2>

            {
                bookContext && bookContext.length > 0 ? (
                    bookContext.map(per => (
                        <Per key={per.id} per={per} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-5">
                        No timeline data available 😢
                    </p>
                )
            }
        </div>
    );
};

export default Timeline;