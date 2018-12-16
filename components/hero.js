import React from 'react';
import { event } from '../lib/gtag';

export default () => (
    <div className="h-screen flex flex-col font-sans">
        <div className="h-2 flex flex-row">
            <div className="flex-1 bg-indigo"></div>
            <div className="flex-1 bg-green"></div>
            <div className="flex-1 bg-yellow"></div>
            <div className="flex-1 bg-pink"></div>
        </div>

        <div className="bg-grey-darkest pt-12">
            <div className="w-4/5 mx-auto h-16 md:w-2/5 md:ml-12">
                <img 
                    src="/static/naao-logo.png"
                    className="h-4 md:h-6" 
                    alt="Naao Logo"
                />
            </div>
        </div>

        <div className="bg-grey-darkest flex flex-1 items-center">
            <div className="w-4/5 mx-auto md:w-2/5 md:ml-12">
                <h2 className="text-4xl">
                    <span className="text-green">SIMPLE. </span>
                    <span className="text-yellow">EASY. </span>
                    <span className="text-pink">QUICK. </span>
                </h2>

                <p className="text-white text-lg pt-6 leading-normal">
                    Send anything to your friends/family/loved ones anywhere in the world through a person you can meet, trust and communicate with all through Naao platform.
                </p>

                <div className="pt-12">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="store-link"
                        onClick={() => event({action: 'google_play_button', category: 'engagement'})}
                        href="https://play.google.com/store/apps/details?id=com.bdgeeks.naao">
                        <img
                            alt="Get Naao on Google Play"
                            src="static/playstore-button.png"
                            className="button-image playstore h-8 lg:h-12 mr-2" 
                        />
                    </a>

                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="store-link"
                        onClick={() => event({action: 'app_store_button', category: 'engagement'})}
                        href="https://itunes.apple.com/app/id1446178590">
                        <img
                            alt="Get Naao on App Store"
                            src="static/appstore-button.svg"
                            className="button-image appstore h-8 lg:h-12" 
                        />
                    </a>
                </div>
            </div>

            <div className="hidden md:block md:w-3/5 text-center">
                <img
                    src="/static/hero-image.png"
                    className="w-3/4"
                    alt="hero image"
                />
            </div>
        </div>
    </div>
);