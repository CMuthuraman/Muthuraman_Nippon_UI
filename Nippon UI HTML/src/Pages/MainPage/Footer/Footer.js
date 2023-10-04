import React from "react";
import './Footer.css'
import $ from 'jquery';
// $(function () {
//     $('.box-menu .wrapper').on('click', function () {
//         $('.box-menu').toggleClass('full-menu');
//         $('.hamburger').toggleClass('active');
//     });
//     $('a').on('click', function () {
//         $(this).siblings('a').removeClass('active');
//         $(this).addClass('active');
//     });
// });
function Footer() {
    return (
        <>
            <div className="box-menu">
                <div className="wrapper">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="menu">
                    <a className="active"><span className="icon fa fa-info-circle"></span><span className="text">About Us</span></a>
                    <a><span className="icon fa fa-suitcase"></span><span className="text">Portfolio</span></a>
                    <a><span className="icon fa fa-shopping-basket"></span><span className="text">Store</span></a>
                    <a><span className="icon fa fa-phone"></span><span className="text">Contacts</span></a>
                </div>
            </div>
        </>
    )
}
export default Footer;
