import React from 'react';
import Tag from './Tag';
import { Link } from 'react-router';

const Person = ({ person }) => {

    return (

        <Link to={`/details/${person.id}`}>
            <div className="card card-sm bg-base-200 max-w-60 shadow my-3">
                <figure className="pointer-events-none ">
                    <img className='rounded-full' width={100} src={person.picture} />
                </figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title flex justify-between font-bold">
                        {person.name}

                    </h2>
                    <p className='font-bold'>{person.days_since_contact}d ago</p>
                    {
                        <div className="flex gap-2 ">
                            {
                                person.tags.map(tag => <Tag tag={tag}></Tag>)
                            }
                        </div>

                    }
                    <p
                        className={`p-2 rounded-2xl text-amber-50 font-bold ${person.status === "overdue"
                            ? "bg-red-400"
                            : person.status === "almost due"
                                ? "bg-yellow-400"
                                : "bg-[#244D3F]"
                            }`}
                    >
                        {person.status}
                    </p>

                </div>
            </div>
        </Link>


    );
};

export default Person;