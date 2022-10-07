import React from 'react'
import "./footer.scss"
const Footer = () => {
    return (
        <footer className='footerSection'>
            <div className='footer-top'>
                <div className='grid'>
                    <div className='grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item-desktop-up-2 '>
                        <h3 className='footer-subhead'>News and updates</h3>
                        <ul className='footer-top--list'>
                            <li>
                                <a className='footer-link' href="/#">Developer changelog</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">Shopify status</a>
                            </li>
                        </ul>
                    </div>
                    <div className='grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item-desktop-up-2 '>
                        <h3 className='footer-subhead'>Blogs</h3>
                        <ul className='footer-top--list'>
                            <li>
                                <a className='footer-link' href="/#">Partner blog</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">Engineering blog</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">UX blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item-desktop-up-2 '>
                        <h3 className='footer-subhead'>Community</h3>
                        <ul className='footer-top--list'>
                            <li>
                                <a href="/#" className='footer-link' >Developer forums</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">Dev Discord</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">Facebook group</a>
                            </li>
                        </ul>
                    </div>
                    <div className='grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item-desktop-up-2 '>
                        <h3 className='footer-subhead'>Social</h3>
                        <ul className='footer-top--list'>
                            <li>
                                <a className='footer-link footer-link-twitch' href="/#">Twitch</a>
                            </li>
                            <li>
                                <a className='footer-link footer-link-youtube' href="/#">YouTube</a>
                            </li>
                            <li>
                                <a className='footer-link footer-link-twitter' href="/#">Twitter</a>
                            </li>
                        </ul>
                    </div>

                    <div className='grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item-desktop-up-2 '>
                        <h3 className='footer-subhead'>Events</h3>
                        <ul className='footer-top--list'>
                            <li>
                                <a className='footer-link' href="/#">Unite</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">Meetups</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">Partner Town Hall</a>
                            </li>
                        </ul>
                    </div>
                    <div className='grid__item grid__item--mobile-up-half grid__item--tablet-up-third grid__item-desktop-up-2 '>
                        <h3 className='footer-subhead'>Legal</h3>
                        <ul className='footer-top--list'>
                            <li>
                                <a className='footer-link' href="/#">Terms of Service</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">API Terms of Service</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">Privacy policy</a>
                            </li>
                            <li>
                                <a className='footer-link' href="/#">Partner program agreement</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className='grid grid--vertically--centered'>
                    <div className='grid__item'>
                        <nav className='footer-nav'>
                            <ul className='footer-nav__list'>
                                <li className='footer-nav__list-item'>
                                    <a href='/#'>About Shopify</a>
                                </li>
                                <li className='footer-nav__list-item'>
                                    <a href='/#'>Shopify Plus</a>
                                </li>
                                <li className='footer-nav__list-item'>
                                    <a href='/#'>Careers</a>
                                </li>
                                <li className='footer-nav__list-item'>
                                    <a href='/#'>Investors</a>
                                </li>
                                <li className='footer-nav__list-item'>
                                    <a href='/#'>Press and Media</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer