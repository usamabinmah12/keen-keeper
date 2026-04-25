import React from 'react';
import { useLoaderData } from 'react-router';
import Person from './Person';

const Cards = () => {
    const data = useLoaderData();
    //console.log(data);
    return (
        <div className='grid grid-cols-4 container mx-auto'>
            {
                data.map(person => <Person person={person}></Person> )
            }
        </div>
    );
};

export default Cards;