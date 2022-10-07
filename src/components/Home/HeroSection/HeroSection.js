import React from 'react'
import './herosection.scss'
import icon1 from '../../../assets/images/icon1.png'
import icon2 from '../../../assets/images/icon2.png'
import icon3 from '../../../assets/images/icon3.png'
import icon4 from '../../../assets/images/icon4.png'
const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className='hero-content'>
                <div className='hero-heading'>
                    <div className='hero-content--container'>
                        <h1 className='heading--jumbo'>
                            Build anything.
                            <br />
                            Reimagine commerce.
                        </h1>
                        <p className='heading--paragraph'>
                            Millions of merchants trust Shopify to run their business—but they need developers to build the tools that help them achieve independence. Access powerful APIs to bring your ideas to life on the platform that makes commerce better for everyone.
                        </p>
                    </div>
                </div>

                <div className='hero-image gutter-bottom hide-wide'>
                    <div className='hero-image2'></div>
                </div>

                <div className='hero-feature'>
                    <ul className='hero-content--container'>
                        <li className='contanier-list'>
                            <p className="heading">Develop apps that solve complex merchant problems</p>
                            <p className='body-paragraph'>
                                Expansive&nbsp;
                                <a href='#/'>GraphQL</a>&nbsp;and&nbsp;
                                <a href='#/'>REST APIs</a>&nbsp;
                                let you integrate into Shopify's admin, online store, checkout, and more.
                            </p>
                        </li>
                        <li className='contanier-list'>
                            <p className="heading">Integrate seamlessly into existing workflows</p>
                            <p className='body-paragraph'>
                                Embed your app’s features with&nbsp;
                                <a href='#/'>App Bridge</a>.
                                Create high quality experiences with the ready-to-build&nbsp;
                                <a href='#/'>Polaris</a>&nbsp;component library.
                            </p>
                        </li>
                        <li className='contanier-list'>
                            <p className="heading">Help merchants express themselves</p>
                            <p className='body-paragraph'>
                                Use&nbsp;
                                <a href='#/'>Liquid</a>&nbsp;to build beautiful theme templates.Get started with&nbsp;
                                <a href='#/'>Dawn</a>&nbsp;, our blazingly fast, accessible reference theme.
                            </p>
                        </li>
                        <li className='contanier-list'>
                            <p className="heading">Ship custom shopping experiences</p>
                            <p className='body-paragraph'>
                                Add Shopify to any web, mobile, or gaming experience with the powerful&nbsp;
                                <a href='#/'>Storefront API</a>
                                &nbsp;and SDKs, plus any front-end stack you want. Use&nbsp;
                                <a href='#/'>Marketplace Kit</a>
                                &nbsp;to connect your platform and its users to millions of Shopify merchants and their products.
                            </p>
                        </li>
                    </ul>

                    <div className='hero-actions'>
                        <div className='hero-content--container'>
                            <p className='heading'>Start building:</p>
                            <div className='hero-actions--grid'>
                                <a href="/#">
                                    <div className='link-card'>
                                        <div className='link-card--body'>
                                            <div className='link-icon'>
                                                <img src={icon1} alt="icon1" />
                                            </div>
                                            <div className='link-card--content'>
                                                <span className='heading'>Apps</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="/#">
                                    <div className='link-card'>
                                        <div className='link-card--body'>
                                            <div className='link-icon'>
                                                <img src={icon2} alt="icon2" />
                                            </div>
                                            <div className='link-card--content'>
                                                <span className='heading'>Themes</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="/#">
                                    <div className='link-card'>
                                        <div className='link-card--body'>
                                            <div className='link-icon'>
                                                <img src={icon3} alt="icon3" />
                                            </div>
                                            <div className='link-card--content'>
                                                <span className='heading'>Storefronts</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="/#">
                                    <div className='link-card'>
                                        <div className='link-card--body'>
                                            <div className='link-icon'>
                                                <img src={icon4} alt="icon4" />
                                            </div>
                                            <div className='link-card--content'>
                                                <span className='heading'>Marketplaces</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hero-image hide-wide'>
                    <div className='hero-image3'></div>
                </div>
            </div>


            {/* //second */}
            <div className='hero-illustration hero-image'>
                <div className='hero-image1'></div>
            </div>

        </section >

    )
}

export default HeroSection