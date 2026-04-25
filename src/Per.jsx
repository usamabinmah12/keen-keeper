import React from 'react';
import img1 from "../assets/call.png"
import img2 from "../assets/text.png"
import img3 from "../assets/video.png"
const Per = ({ per }) => {
    const currentTime = new Date().toLocaleString();

    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md my-4">
               

                <li className="list-row">
                    <div>
                        <img className="size-10 rounded-box" src= {per.state == "text"? img2 : per.state == "call" ? img1 : img3}/>
                    </div>
                    <div>
                        <div><span className='font-bold'>{per.state}</span> with {per.name}</div>
                        <div>{currentTime}</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Per;