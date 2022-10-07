import React from 'react'
import './communitysection.scss'
import communityicon from '../../../assets/images/community.png'
import changelogicon from '../../../assets/images/changelog.png'
import discordicon from '../../../assets/images/discord.png'
import forumicon from '../../../assets/images/forum.png'
import twittericon from '../../../assets/images/twitter.png'
import youtubeicon from '../../../assets/images/youtube.png'
import shopifyicon from '../../../assets/images/shopify.png'
import slackicon from '../../../assets/images/slack.png'
const CommunitySection = () => {
    return (
        <section className='community-section'>
            <div className='community-section-container section--tight section--padding-top-only homepage-container '>
                <div className="community-section-grid">
                    <div className='title-card'>
                        <div className='docs-card docs-card-borderless'>
                            <div className='docs-card__body'>
                                <img className='image docs-icon' src={communityicon} alt='docsimg'></img>
                                <div className='docs-card__content'>
                                    <div className='docs-card__heading '>
                                        <h2 className='community-heading'>Join a community of builders</h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <a href='/#'>
                        <div className='docs-card '>
                            <div className='docs-card__body'>

                                <img className='docs-icon' src={forumicon} alt='docsimg'></img>

                                <div className='docs-card__content'>
                                    <div className='docs-card__heading docs-card__heading--with-content docs-card__heading--secondary'>
                                        <p className='docs-card__heading_2'>
                                            Developer forums
                                        </p>
                                    </div>
                                    <p className='docs-card__text'> Q&A and advice from Shopify community experts</p>
                                </div>
                            </div>

                        </div>
                    </a>

                    <a href='/#'>
                        <div className='docs-card '>
                            <div className='docs-card__body'>
                                <img className='docs-icon' src={slackicon} alt='docsimg'></img>
                                <div className='docs-card__content'>
                                    <div className='docs-card__heading docs-card__heading--with-content docs-card__heading--secondary'>
                                        <p className='docs-card__heading_2'>
                                            #development on Slack
                                        </p>
                                    </div>
                                    <p className='docs-card__text'>Collaboration and connection with Shopify employees</p>
                                </div>
                            </div>

                        </div>
                    </a>

                    <a href='/#'>
                        <div className='docs-card '>
                            <div className='docs-card__body'>
                                <img className='docs-icon' src={twittericon} alt='docsimg'></img>
                                <div className='docs-card__content'>
                                    <div className='docs-card__heading docs-card__heading--with-content docs-card__heading--secondary'>
                                        <p className='docs-card__heading_2'>
                                            @ShopifyDevs on Twitter
                                        </p>
                                    </div>
                                    <p className='docs-card__text'> Product announcements,API updates,tips and more</p>
                                </div>
                            </div>

                        </div>
                    </a>

                    <a href='/#'>
                        <div className='docs-card '>
                            <div className='docs-card__body'>
                                <img className='docs-icon' src={changelogicon} alt='docsimg'></img>
                                <div className='docs-card__content'>
                                    <div className='docs-card__heading docs-card__heading--with-content docs-card__heading--secondary'>
                                        <p className='docs-card__heading_2'>
                                            Developer Changelog
                                        </p>
                                    </div>
                                    <p className='docs-card__text'>The lastest Shopify ecosystem updates</p>
                                </div>
                            </div>

                        </div>
                    </a>

                    <a href='/#'>
                        <div className='docs-card '>
                            <div className='docs-card__body'>
                                <img className='docs-icon' src={youtubeicon} alt='docsimg'></img>
                                <div className='docs-card__content'>
                                    <div className='docs-card__heading docs-card__heading--with-content docs-card__heading--secondary'>
                                        <p className='docs-card__heading_2'>
                                            ShopifyDevs Youtube channel
                                        </p>
                                    </div>
                                    <p className='docs-card__text'>Tips and insights in dev and design</p>
                                </div>
                            </div>

                        </div>
                    </a>
                    <a href='/#'>
                        <div className='docs-card '>
                            <div className='docs-card__body'>
                                <img className='docs-icon' src={discordicon} alt='docsimg'></img>
                                <div className='docs-card__content'>
                                    <div className='docs-card__heading docs-card__heading--with-content docs-card__heading--secondary'>
                                        <p className='docs-card__heading_2'>
                                            ShopifyDevs Discord server
                                        </p>
                                    </div>
                                    <p className='docs-card__text'>Chat with other Shopify developers</p>
                                </div>
                            </div>

                        </div>
                    </a>
                    <a href='/#'>
                        <div className='docs-card '>
                            <div className='docs-card__body'>
                                <img className='docs-icon' src={shopifyicon} alt='docsimg'></img>
                                <div className='docs-card__content'>
                                    <div className='docs-card__heading docs-card__heading--with-content docs-card__heading--secondary'>
                                        <p className='docs-card__heading_2'>
                                            Shopify Partners blog
                                        </p>
                                    </div>
                                    <p className='docs-card__text'>Educational resources and product previews</p>
                                </div>
                            </div>

                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CommunitySection