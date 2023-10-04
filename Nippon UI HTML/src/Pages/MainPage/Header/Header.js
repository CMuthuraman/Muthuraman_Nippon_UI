import React from "react";
import './Header.css'
import NipponLogo from '../../../Assets/Nippon_Taglines_N_Symbol.png'

function Header() {
    return (
        <div className="topbar">
            <h1 className="current">
                <img src={"https://www.nipponpaint.co.in/wp-content/uploads/2021/08/Nippon-Logo-11-01-01.png"} style={{ width: '150px', marginTop: '10px' }} />
            </h1>
            <span className="search">
                <label><span className="iconoir-search"></span></label>
                <input className="bar" type="text" placeholder="Search..." />
            </span>

            
            {/* <nav>
                <a href="#" className="menu-item">Orders</a>
                <a href="#" className="menu-item">Clients</a>
                <a href="#" className="menu-item">Sections</a>
                <a href="#" className="menu-item">Products</a>
            </nav> */}
        </div>
    )
}
export default Header;