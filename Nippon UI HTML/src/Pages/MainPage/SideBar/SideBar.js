import React, { useState } from "react";
import './SideBar.css'
import { AiFillDashboard } from "react-icons/ai"
import $ from 'jquery';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFilePen, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
$(function () {
    $('.box-menu .wrapper').on('click', function () {
        $('.box-menu').toggleClass('full-menu');
        $('.hamburger').toggleClass('active');
    });
    $('a').on('click', function () {
        $(this).siblings('a').removeClass('active');
        $(this).addClass('active');
    });
});

function SideBar({ UserInfo,ActivePage,setActivePage }) {
    const [Images, setImages] = useState("https://gologinapi.nipponpaint.co.in//images/EmployeePhoto/" + UserInfo?.photo)
    const Navigate = useNavigate()
    
    const Logout = () => {
        sessionStorage.clear()
        Navigate("/")
    }

    const OnPageSelect=(Pages)=>{
        setActivePage(Pages)
    }

    return (
        <>
            <div className="SideBarMainClass">
                <div className="avatar">
                    <img
                        className="thumb"
                        src={Images}
                        width="60"
                        height="60"
                    />
                    <div className="name">@{UserInfo?.Name}</div>
                    <div className="name EmpNo_Divition">{UserInfo?.EmpNo}</div>
                    <div className="name EmpNo_Divition">{UserInfo?.BusinessUnit}</div>
                </div>
                <nav className="primary">
                    <a className={ActivePage === "FormPage"?"SideBarMainClass-item active":"SideBarMainClass-item"} onClick={()=>OnPageSelect("FormPage")}>
                        {/* <span className="iconoir-report-columns"></span> */}
                        {/* <AiFillDashboard  className="iconoir-report-columns"/> */}
                        {/* <FontAwesomeIcon icon={faVenusDouble} /> */}
                        <FontAwesomeIcon icon={faFilePen} />
                        <span className="desc" >Form</span>
                    </a>
                    <a className={ActivePage === "ViewPage"?"SideBarMainClass-item active":"SideBarMainClass-item"} onClick={()=>OnPageSelect("ViewPage")}>
                        <FontAwesomeIcon icon={faEye} />
                        <span className="desc">View</span>
                    </a>

                    {/* <a href="#" className="SideBarMainClass-item">
                        <span className="iconoir-table"></span>
                        <span className="desc">Stats</span>
                    </a>
                    <a href="#" className="SideBarMainClass-item">
                        <span className="iconoir-bag"></span>
                        <span className="desc">Cart</span>
                    </a>
                    <a href="#" className="SideBarMainClass-item">
                        <span className="iconoir-user"></span>
                        <span className="desc">Clients</span>
                    </a>
                    <a href="#" className="SideBarMainClass-item">
                        <span className="iconoir-leaderboard"></span>
                        <span className="desc">Analytics</span>
                    </a>
                    <a href="#" className="SideBarMainClass-item">
                        <span className="iconoir-settings"></span>
                        <span className="desc">Settings</span>
                    </a> */}
                    <a className="SideBarMainClass-item" onClick={() => Logout()}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span className="desc">Logout</span>
                    </a>
                </nav>

                {/* <span className="expander iconoir-arrow-right"></span> */}


            </div>
        </>
    )
}
export default SideBar;