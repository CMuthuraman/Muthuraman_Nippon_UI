import React, { useEffect, useState } from "react";
import './MainPage.css'
import { BrowserRouter, Router, Routes, useNavigate } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BackgroundVideos from '../../Assets/BackgroundVideos.mp4'
import FormPage from "../Form/Form";
import ViewPage from "../ViewPage/ViewPage";
import { faEye, faFilePen, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MainPage() {
    const Navigate = useNavigate()
    const [UserInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem("UserInfo")))
    const [Images, setImages] = useState("")
    const [ActivePage, setActivePage] = useState("FormPage")

    useEffect(() => {
        if (sessionStorage.length === 0) {
            Navigate("/")
        }
    }, [])
    useEffect(() => {
        setImages("https://gologinapi.nipponpaint.co.in//images/EmployeePhoto/" + UserInfo?.photo)
    }, [UserInfo])

    console.log(ActivePage, "ActivePage")


    function toggleClass(targetElement, addedClass) {
        if (targetElement.classList.contains(addedClass)) {
            targetElement.classList.remove(addedClass);
        }
        else {
            targetElement.classList.add(addedClass);
        }
    };

    function toggleClassRemove(targetElement, addedClass) {
        if (targetElement.classList.contains(addedClass)) {
            targetElement.classList.remove(addedClass);
        }
    }

    const Logout = () => {
        sessionStorage.clear()
        Navigate("/")
    }
    // // This is the function we add to our menu button to enable its click functionality
    // window.document.querySelector('.menu-btn').addEventListener('click', function () {

    //     // This toggleClass is for added 'menu--open' to our menu HTML element. This will open the menu.
    //     toggleClass(document.querySelector('.menu'), 'menu--open');

    //     // This toggleClass is for adding '.menu-btn--on' to our menu button HTML element. This creates the animation of the hamburger/hotdog icon to the close icon.
    //     toggleClass(document.querySelector('.menu-btn'), 'menu-btn--on');
    // });

    const onSelectPage=(data)=>{
        toggleClassRemove(document.querySelector('.menu'), 'menu--open')
        setActivePage(data)
    }

    return (
        <body className="MainClass" >
            <main className="container">
                <SideBar UserInfo={UserInfo} ActivePage={ActivePage} setActivePage={setActivePage} />
                <Header UserInfo={UserInfo} />
                {/* <Footer /> */}
                <div className="dashboard" onClick={() => toggleClassRemove(document.querySelector('.menu'), 'menu--open')}>
                    <div className="ContainerBody">
                        {ActivePage === "FormPage" && <FormPage />}
                        {ActivePage === "ViewPage" && <ViewPage />}
                    </div>
                </div>
                <div className="MobileMenu">
                    <menu className="menu" >
                        <ul>
                            <div className="ProfileCard">
                                <li className="ProfileTag">
                                    <img src={Images} className="ProfileTag" />
                                </li>
                                <li>@{UserInfo?.Name}</li>
                                <li>{UserInfo?.EmpNo}</li>
                                <li>{UserInfo?.BusinessUnit}</li>
                            </div>
                            <li onClick={()=>onSelectPage("FormPage")} className={ActivePage === "FormPage" ? "SideMenuButton_active" : "SideMenuButton"}>
                                <FontAwesomeIcon icon={faFilePen} style={{ marginRight: '10px', marginLeft: '10px' }} />
                                <span className="desc" >Form</span>
                            </li>
                            <li onClick={()=>onSelectPage("ViewPage")} className={ActivePage === "ViewPage" ? "SideMenuButton_active" : "SideMenuButton"}>
                                <FontAwesomeIcon icon={faEye} style={{ marginRight: '10px', marginLeft: '10px' }} />
                                <span className="desc" >View</span>
                            </li>
                            <li onClick={()=>Logout()} className={ActivePage === "Logout" ? "SideMenuButton_active" : "SideMenuButton"}>
                                <FontAwesomeIcon icon={faRightFromBracket} style={{ marginRight: '10px', marginLeft: '10px' }} />
                                <span className="desc" >Logout</span>
                            </li>
                        </ul>
                    </menu>
                    <nav onClick={() => toggleClass(document.querySelector('.menu'), 'menu--open')} className="menu-btn">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                </div>
            </main>
            <div className="video">
                <video loop autoPlay>
                    <source src={BackgroundVideos} type='video/mp4' />
                </video>
            </div>

        </body>
    )
}
export default MainPage;