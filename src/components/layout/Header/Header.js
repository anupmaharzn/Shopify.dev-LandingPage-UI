import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NightlightRoundIcon from '@material-ui/icons/NightsStay';
import SearchIcon from '@material-ui/icons/Search';
import Dropdown from './Dropdown/Dropdown';
import Searchoverlay from './Searchoverlay/Searchoverlay'
import Logo from '../../../assets/images/logo1.svg'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './header.scss'
import './navdrawer.scss'

const Header = () => {
    const [drop, setDrop] = useState(false);
    const [searchOverlay, setSearchOverlay] = useState(false);
    const [sideDrawer, setSideDrawer] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <header className='header'>
            <nav className='nav'>
                <div className='navleft'>
                    <div className="toggle-hamburger" onClick={() => setSideDrawer(!sideDrawer)}>
                        <span>
                            <MenuIcon />
                        </span>
                    </div>
                    <div className='logocontainer'>
                        <a className="logocontainer__logo" href='/#'><img src={Logo} alt="logo" /></a>
                        <p>.dev</p>
                    </div>

                    <div className='navmenu'>
                        <ul className='navlist'>
                            <li className='navitem'>Apps</li>
                            <li className='navitem'>Themes</li>
                            <li className='navitem'>Custom storefronts</li>
                            <li className='navitem'>Marketplaces</li>
                            <li className='navitem dropdown' onClick={() => setDrop(!drop)}>
                                {drop ? <b>APIs and references</b> : "APIs and references"}
                                <ArrowDropDownIcon />
                                <Dropdown drop={drop} />
                            </li>

                        </ul>
                    </div>

                </div>

                <div className='navright'>

                    <div className='searchicon' onClick={() => setSearchOverlay(!searchOverlay)}>
                        <span>
                            <SearchIcon />
                        </span>
                    </div>

                    <div className='searchbox'>
                        <button type='button' className='searchbtn' onClick={() => setSearchOverlay(!searchOverlay)}>
                            <span className='searchbtnicon1'><SearchIcon /></span>
                            <span className='searchbtntext'>Search</span>
                            <span className="searchbtnicon2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21" class="_2ak-2" focusable="false" aria-hidden="true"><g filter="url(#a)"><rect width="20" height="20" fill="none" rx="4"></rect><path fill-rule="evenodd" clip-rule="evenodd" fill="#6D7175" d="m7.218 15.32 4.224-11.28h1.356L8.574 15.32H7.218z"></path><rect width="19" height="19" x=".5" y=".5" class="_2sxSh" rx="3.5"></rect></g><defs><filter id="a" width="20" height="21" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
                            </span>
                        </button>

                    </div>
                    {/* searchoverlay */}
                    <div className={searchOverlay ? "overlay-box" : "overlay-box no-overlay-box"} onClick={() => setSearchOverlay(false)}>
                        <Searchoverlay />
                    </div>
                    <div className='nightbtn'>
                        <NightlightRoundIcon />
                    </div>
                    <div className='btn'><a href='/#'>Log in</a></div>
                    <div className='btn'><a href='/#'>Sign Up</a></div>


                </div>
            </nav>

            {/* nav side drawer */}

            <div className={sideDrawer ? "navDrawer show-navDrawer" : "navDrawer"}>
                <div className='navDrawer-topSection'>
                    <div className="navDrawer-Wapper">
                        <div className="Drawer-Nav">
                            <div className='close-btn' onClick={() => setSideDrawer(false)}>
                                <span>
                                    <CloseIcon />
                                </span>
                            </div>
                            <div className='logocontainer'>
                                <a className="logocontainer__logo" href='/#'><img src={Logo} alt="logo" /></a>
                                <p>.dev</p>
                            </div>
                        </div>
                    </div>

                    <div className='Drawer-Menu'>
                        <div className='Drawer-Menu-navigation-accordion'>
                            <button className='Drawer-button' onClick={() => setMenu(!menu)} >
                                <span className='Drawer-title'>Menu</span>
                                {menu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </button>

                            <div className={menu ? "accordion-content " : "accordion-content no-accordion-content"}>
                                <ul>
                                    <li className='drawer-navigation-list'>
                                        <a href='/#' className="drawer-item">Apps</a>
                                    </li>
                                    <li className='drawer-navigation-list'>
                                        <a href='/#' className="drawer-item">Themes</a>
                                    </li>
                                    <li className='drawer-navigation-list'>
                                        <a href='/#' className="drawer-item">Custom storefronts</a>
                                    </li>
                                    <li className='drawer-navigation-list'>
                                        <a href='/#' className="drawer-item">Marketplaces</a>
                                    </li>
                                    <li className='drawer-navigation-list'>
                                        <a href='/#' className="drawer-item">APIs and references</a>
                                        <ul className='drawer-items--nested'>
                                            <li className='drawer-navigation-list'>
                                                <ul className='drawer-items--nested'>
                                                    <li className='drawer-navigation-list'>
                                                        <a href='/#' className="drawer-item">GraphQL Admin API</a>
                                                    </li>
                                                    <li className='drawer-navigation-list'>
                                                        <a href='/#' className="drawer-item">REST Admin API</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className='drawer-navigation-list'>
                                                <a href='/#' className="drawer-item">Liquid</a>
                                            </li>
                                            <li className='drawer-navigation-list'>
                                                <a href='/#' className="drawer-item">Ajax API</a>
                                            </li>
                                            <li className='drawer-navigation-list'>
                                                <a href='/#' className="drawer-item">Storefront API</a>
                                            </li>
                                            <li className='drawer-navigation-list'>
                                                <a href='/#' className="drawer-item">Hydrogen</a>
                                            </li>
                                            <li className='drawer-navigation-list'>
                                                <a href='/#' className="drawer-item">View all</a>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='navDrawer-bottomSection'>
                    <ul className="bottomnavlist">
                        <li>
                            <a href="/#">Log in</a>
                        </li>
                        <li>
                            <a href="/#">Sign up</a>
                        </li>
                        <li>
                            <NightlightRoundIcon />
                        </li>
                    </ul>
                </div>

            </div>



        </header>
    )
}

export default Header