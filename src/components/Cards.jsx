import React from 'react';
import { useLoaderData } from 'react-router';
import Person from './Person';

const Cards = () => {
    const data = useLoaderData();
    //console.log(data);
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto '>
            {
                data.map(person => <Person person={person}></Person> )
            }
        </div>
    );
};

export default Cards;