import React from 'react';

export default () => (
    <div className="h-screen flex flex-col font-sans">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <div className="h-2 flex flex-row">
            <div className="flex-1 bg-indigo"></div>
            <div className="flex-1 bg-green"></div>
            <div className="flex-1 bg-yellow"></div>
            <div className="flex-1 bg-pink"></div>
        </div>

        <div className="bg-grey-darkest flex flex-1 items-center">
            <div className="w-2/5 pl-12">
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
                        className="store-link"
                        href="https://play.google.com/store/apps/details?id=com.bdgeeks.naao&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                        <img
                            alt="Get it on Google Play"
                            src="static/playstore-button.png"
                            className="button-image playstore w-32"
                        />
                    </a>
                </div>
            </div>

            <div className="w-3/5 text-center">
                <img
                    src="/static/hero-image.png"
                    className="w-3/4"
                    alt="hero image"
                />
            </div>
        </div>
    </div>
);