import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Tag from './components/Tag';
import { HiBellSnooze } from 'react-icons/hi2';
import { IoArchiveSharp } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import img1 from "../assets/call.png"
import img2 from "../assets/text.png"
import img3 from "../assets/video.png"
import { PersonContext } from './ContextProvider';
import { toast } from 'react-toastify';

const Details = () => {
    const frnd = useParams();
    //console.log(param.id);
    const data = useLoaderData();
    //console.log(data);
    const desired = data.find(curr_frnd => curr_frnd.id == frnd.id);
    // console.log(desired);
    const {list , setList ,t , setT , c , setC , v, setV} = useContext(PersonContext);
    const handleClickedAdd = (state) => {
            toast.success(`${state} with ${desired.name}  `);

            const updated = {
                    ...desired,
                    state: state
                };
                if(state ==  "call") {
                    setC(c + 1);
                }
                else if(state == "text") {
                    setT(t + 1);
                }
                else setV(v + 1);

                setList([...list, updated]);
    };
    return (
        <div className='container mx-auto'>
            <div className="card card-side bg-base-100 shadow-sm flex justify-between">
                <div className="">
                    <figure className="pointer-events-none ">
                    <img className='rounded-full' width={100} src={desired.picture} />
                </figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title flex justify-between font-bold">
                        {desired.name}

                    </h2>
                    <p className='font-bold'>{desired.days_since_contact}d ago</p>
                    {
                        <div className="flex gap-2 ">
                            {
                                desired.tags.map(tag => <Tag tag={tag}></Tag>)
                            }
                        </div>

                    }
                    <p
                        className={`p-2 rounded-2xl text-amber-50 font-bold ${desired.status === "overdue"
                            ? "bg-red-400"
                            : desired.status === "almost due"
                                ? "bg-yellow-400"
                                : "bg-[#244D3F]"
                            }`}
                    >
                        {desired.status}
                    </p>
                    <div className= "border border-amber-200 p-4">
                            <h2 className='flex items-center gap-1 justify-center'><HiBellSnooze /> Snooze 2 weeks</h2>
                    </div>
                    <div className="border border-amber-200 p-4">
                            <h2 className='flex items-center gap-1 justify-center'><IoArchiveSharp /> Archive</h2>
                    </div>
                    <div className="border border-amber-200 p-4">
                            <h2 className='flex items-center gap-1 justify-center'><MdDeleteOutline /> Delete</h2>
                    </div>
                    

                </div>
                </div>
                
                <div className="card-body">
                    <div className="flex border border-amber-100 gap-20">
                        <div className="p-7 flex flex-col items-center font-bold bg-[#FFFFFF]">
                            <h2 className='text-3xl'>{desired.days_since_contact}</h2>
                            <p className='font-semibold text-cyan-700'>Days Since Contact</p>
                        </div>
                        <div className="p-7 flex flex-col items-center font-bold">
                            <h2 className='text-3xl'>{desired.goal}</h2>
                            <p className='font-semibold text-cyan-700'>Goal Days</p>

                        </div>
                        <div className="p-7 flex flex-col items-center font-bold">
                            <h2 className='text-3xl'>{desired.next_due_date}</h2>
                            <p className='font-semibold text-cyan-700'>Next-Due</p>
                        </div>
                    </div>
                    <div className="border border-amber-200 p-3">
                        <h2 className='text-[#244D3F]  text-3xl font-bold'>Relationship Goal</h2>
                        <p className='font-2xl'>Connect every <span className='font-bold'>{desired.goal} Days</span></p>
                    </div>
                    <div className="">
                        
                        <div className="">Quick Check-In</div>
                        <div className="grid grid-cols-3 gap-3 ">
                            <div onClick={() => handleClickedAdd( 'call')} className="flex flex-col items-center border border-amber-200 p-3">
                                <img src={img1} alt="" />
                                <p className='text-3xl m-2'>Call</p>
                            </div>
                            <div onClick={() => handleClickedAdd( 'text')} className="flex flex-col items-center border border-amber-200 p-3">
                                <img src={img2} alt="" />
                                <p className='text-3xl m-2'>Text</p>
                            </div>
                            <div onClick={() => handleClickedAdd('video')} className="flex flex-col items-center border border-amber-200 p-3">
                                <img src={img3} alt="" />
                                <p className='text-3xl m-2'>Video</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;