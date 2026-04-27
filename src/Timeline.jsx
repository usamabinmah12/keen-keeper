import React, { useContext, useState, useEffect } from 'react';
import { PersonContext } from './ContextProvider';
import Per from './Per';

const Timeline = () => {
    const { list = [] } = useContext(PersonContext);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        console.log('List data:', list);
        if (list.length > 0) {
            console.log('First person object:', list[0]);
            console.log('State value:', list[0].state);
        }
    }, [list]);

    const getTypeFromState = (state) => {
        if (!state) return '';
        
        const stateStr = String(state).toLowerCase();
        if (stateStr.includes('call')) return 'call';
        if (stateStr.includes('text')) return 'text';
        if (stateStr.includes('video')) return 'video';
        
        const firstWord = stateStr.trim().split(' ')[0];
        if (['call', 'text', 'video'].includes(firstWord)) return firstWord;
        
        return '';
    };

    const filteredData =
        filter === "all"
            ? list
            : list.filter(per => {
                const personType = getTypeFromState(per.state);
                console.log(`Person state: "${per.state}" -> Extracted type: "${personType}" vs Filter: "${filter}"`);
                return personType === filter;
            });

    return (
        <div className='container mx-auto'>
            <h2 className="text-5xl mb-4">Timeline</h2>

            <div className="mb-5">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select select-bordered w-full max-w-xs"
                >
                    <option value="all">All</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
            </div>

            <div className="mb-2 text-sm text-gray-500">
                Showing {filteredData.length} of {list.length} items
            </div>

            {
                filteredData.length > 0 ? (
                    filteredData.map(per => (
                        <Per key={per.id} per={per} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-5 text-3xl">
                        No {filter !== 'all' ? filter : ''} timeline data available 
                    </p>
                )
            }
        </div>
    );
};

export default Timeline;