import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { MenuItems } from './menuItems';

import { colors } from './../../styles/colors'
import { Nav } from './styles.js'
import { AiFillCaretDown, AiOutlineDashboard } from 'react-icons/ai';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const closeMenu = () => setSidebar(false);

    return (
        <>
            <Nav>
                <Link to='' className='menu-bar'>
                    Home
                    {/* <FaBars size={26} color={colors.$white} onClick={showSidebar} /> */}
                </Link>

                <div className='menu-icon' onClick={showSidebar}>
                    {sidebar ? <FaBars size={26} color={colors.$white} /> : <FaRegWindowClose size={26} color={colors.$white} />}
                </div>

                <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <li className='navbar-item'>
                        <Link to='/' className='menu-links' onCLick={closeMenu}>
                            <AiOutlineDashboard size={18} />
                            Dashboard
                        </Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='/' className='menu-links' onCLick={closeMenu}>
                            <FaBars size={18} />
                            Cadastros
                            <AiFillCaretDown size={12} />
                        </Link>
                        {dropdown && <dropdown />}
                    </li>
                </ul>

            </Nav>


            {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='manu-bars'>
                            <FaRegWindowClose size={26} color='#363636' />
                        </Link>
                    </li>

                    {SidebarData.map((item, index) => {
                        return (
                            <li key={item} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav> */}
        </>
    )
}

export default Navbar;
