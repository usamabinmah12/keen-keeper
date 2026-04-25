import React from 'react';

const Tag = ({tag}) => {
    return (
        <div className='bg-[#CBFADB] font-semibold p-2 rounded-2xl'>
            {tag}
        </div>
    );
};

export default Tag;