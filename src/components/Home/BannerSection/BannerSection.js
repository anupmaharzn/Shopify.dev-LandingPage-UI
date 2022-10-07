import React from 'react'
import './bannerSection.scss'
import Themeicon1 from '../../../assets/images/themeicon1.png'
import Themeicon2 from '../../../assets/images/themeicon2.png'
import Themeicon3 from '../../../assets/images/themeicon3.png'
const BannerSection = () => {
    return (
        <section className='bannersection'>
            <div className='bannersection--container'>

                <div className="bannersection-content">
                    <h2 className='bannersection--heading gutter-bottom'>Launch your app or theme to millions of merchants</h2>
                    <div className='gutter-bottom'>
                        <h3>App Store</h3>
                        <p className='body-paragraph'>
                            Get your app in front of the right merchants. With personalized recommendations and multiple billing options, the&nbsp;
                            <a href='/#'>Shopify App Store</a>&nbsp;
                            is where merchants go to find the apps their business needs most.
                        </p>
                    </div>
                    <div className='gutter-bottom'>
                        <h3>Theme Store</h3>
                        <p className='body-paragraph'>
                            Sell your theme to merchants building their brands on the&nbsp;
                            <a href='/#'>Shopify Theme Store</a>&nbsp;
                            which offers flexible pricing and targeted merchandising.
                        </p>
                    </div>
                </div>

                <ul className='bannersection-status-box'>
                    <li className='bannersection-status-box--items'>
                        <div className='link-icon'>
                            <img src={Themeicon1} alt="theme1" />
                        </div>
                        <div >
                            <span className='status-box--heading'>$12.5B USD</span>
                            Revenue generated from the Shopify ecosystem (2020)
                        </div>
                    </li>
                    <li className='bannersection-status-box--items'>
                        <div className='link-icon'>
                            <img src={Themeicon2} alt="theme2" />
                        </div>
                        <div >
                            <span className='status-box--heading'>3 in 4 merchants use apps</span>

                        </div>
                    </li>
                    <li className='bannersection-status-box--items'>
                        <div className='status-box--icon'>
                            <div className='link-icon'>
                                <img src={Themeicon3} alt="theme3" />
                            </div>
                            <sub className='status-box--helper'>x6</sub>
                        </div>
                        <span className='status-box--heading'>Average number of apps installed per merchant</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default BannerSection