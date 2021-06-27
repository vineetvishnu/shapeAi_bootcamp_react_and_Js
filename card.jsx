import React from 'react';
import { BiBadgeCheck } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import reactandjs from './reactandjs.jpg';


function Card() {
    return (
        <div className="card">
        <img src={reactandjs} /><a href="javascript:void(0)">Free</a>
        <div className="card-content">
            <div className="card-title">
              <h2>Bootcamp on ReactJs and <br />JavaScript</h2>
                </div>
         <p><BiCalendar className="icons" /><b> 7 day Long</b></p>
         <p><BiBadgeCheck className="icons" /><b> certificates</b></p>
         <p><AiOutlineProject className="icons" /><b> Hands on Projects</b></p>
         <p><MdPeopleOutline className="icons" /><b> No prerequisites</b></p>
         <hr />
         <button className="btn">Register</button>
        </div>
    </div>
    );
}

export default Card;
