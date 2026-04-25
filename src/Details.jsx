import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const param = useParams();
    console.log(param.id);
    const data = useLoaderData();
    // const desired = 
    return (
        <div>
            
        </div>
    );
};

export default Details;