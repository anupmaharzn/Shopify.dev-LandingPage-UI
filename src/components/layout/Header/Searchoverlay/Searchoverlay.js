import React, { useState } from 'react'
import './searchoverlay.scss'
import SearchIcon from '@material-ui/icons/Search';
const Searchoverlay = () => {

    return (
        <div className="overlay">
            <div className='overlay-container'>
                <div className='overlay-content'>
                    <span className='overlay-content-icon'><SearchIcon /></span>
                    <input className='overlay-content-input' type="search" placeholder="Search"></input>
                    <div className='overlay-content--right'>
                        <div className='content--right'>
                            <span className='content--right__span1'>
                                <span className='content--right__span1__1'>2022-07</span>
                                <span>latest</span>
                            </span>

                            <span className='content--right__span2'>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="_2ak-2" focusable="false" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5858 8.99985L7.41424 8.99985C6.52333 8.99985 6.07717 7.92271 6.70713 7.29274L9.29292 4.70696C9.68344 4.31643 10.3166 4.31643 10.7071 4.70696L13.2929 7.29274C13.9229 7.9227 13.4767 8.99985 12.5858 8.99985ZM7.41424 10.9998H12.5858C13.4767 10.9998 13.9229 12.077 13.2929 12.707L10.7071 15.2927C10.3166 15.6833 9.68344 15.6833 9.29292 15.2927L6.70713 12.707C6.07716 12.077 6.52333 10.9998 7.41424 10.9998Z" fill="#6D7175"></path></svg>
                                </span>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchoverlay