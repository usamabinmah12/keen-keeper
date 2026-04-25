import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import Person from './Person';

const Cards = () => {
    const data = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-4'>
            {
                data.map(person => (
                    <Person key={person.id} person={person} />
                ))
            }
        </div>
    );
};

export default Cards;