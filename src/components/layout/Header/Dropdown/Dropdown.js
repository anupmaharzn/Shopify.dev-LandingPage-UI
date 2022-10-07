import React from 'react'
import './dropdown.scss'
const Dropdown = ({ drop }) => {
    return (
        <div className={drop ? "dropdowncontainer" : 'dropdowncontainer no_dropdowncontainer '}>
            <div className='dropdown-container'>
                <ul className='dropdown-container__lists'>
                    <li>
                        <p className='dropdown-container__description'>Apps</p>
                        <ul className='dropdown-container__list'>
                            <li >
                                <a href="/#" className='drop-container__item'>GraphQL Admin API</a>
                                <a href="/#" className='drop-container__item'> REST Admin API</a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <p className='dropdown-container__description'>Themes</p>
                        <ul className='dropdown-container__list'>
                            <li >
                                <a href="/#" className='drop-container__item'>Liquid</a>
                                <a href="/#" className='drop-container__item'>Ajax API</a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <p className='dropdown-container__description'>Custom storefronts</p>
                        <ul className='dropdown-container__list'>
                            <li >
                                <a href="/#" className='drop-container__item'>Storefront API</a>
                                <a href="/#" className='drop-container__item'>Hydrogen</a>
                            </li>

                        </ul>
                    </li>

                    <li>
                        <ul className='dropdown-container__list'>
                            <li >
                                <a href="/#" className='drop-container__item'>View all</a>
                            </li>

                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Dropdown