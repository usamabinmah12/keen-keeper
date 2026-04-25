import React from 'react';
import Cards from './components/Cards';

const Homepage = () => {
    return (
        <div className='container mx-auto'>

            <div className='flex flex-col items-center align-middle '>

                <h2 className="font-bold text-4xl m-3">
                    Friends to keep close in your life
                </h2>
                <p className='text-amber-700 m-3'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
                <button className='text-white bg-black p-2 rounded-2xl m-3'><span className='text-2xl'> +</span> ADD A FRIEND</button>

            </div>
            <div className="grid grid-cols-4 justify-evenly gap-3 my-3">
                <div className="border border-amber-300 flex  flex-col items-center p-5">
                    <h2 className='font-bold'>10</h2>
                    <p>Total friends</p>
                </div>
                <div className="border border-amber-300 flex  flex-col items-center p-5">
                    <h2 className='font-bold'>3</h2>
                    <p>Total friends</p>
                </div>
                <div className="border border-amber-300 flex  flex-col items-center p-5">
                    <h2 className='font-bold'>6</h2>
                    <p>Total friends</p>
                </div>
                <div className="border border-amber-300 flex  flex-col items-center p-5">
                    <h2 className='font-bold'>12</h2>
                    <p>Total friends</p>
                </div>
            </div>
            <h2 className='text-3xl font-semibold m-3'>Your Friends</h2>
            <Cards></Cards>
        </div>

    );
};

export default Homepage;