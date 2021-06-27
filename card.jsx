import React from 'react';

import { BiBadgeCheck, BiRupee, BiCalendar }  from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";



function Card(props) {
    return (
        <>
        <div className="card">
        <img src={props.imgsrc} alt=" " /> 
        <a href="javascript:void(0)" >Free</a> 
        <div className="card-content">
            <div className="card-title">
              <h2>{props.ctitle}</h2>
                </div>
         <p><BiCalendar className="icons" /><b> 7 day Long</b></p>
         <p><BiBadgeCheck className="icons" /><b> certificates</b></p>
         <p><AiOutlineProject className="icons" /><b> Hands on Project</b></p>
         <p><MdPeopleOutline className="icons" /><b> No prerequisites</b></p>
         <p><BiRupee className="icons" /><b> Absolutely Free</b></p>
         <hr />
         <button className="btn" href="javascript:void(0)">Register</button>
        </div>
    </div>
    </>
    );
}

export default Card;
