import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faWifi, faHandshake, faComments } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch, faWifi, faHandshake, faComments);

export default () => (
    <div className="bg-grey-dark text-center font-sans pt-16 pb-8">
        <div className="w-2/3 ml-auto mr-auto">
            <h2 className="text-4xl text-white pb-8">Main features</h2>
            <p className="pb-12 text-grey leading-normal">
                We are working tirelessly to make it easier for you to send anything to your loved ones anywhere in the world.
                The following are what our platforms offers right now to make it happen.
            </p>
        </div>

        <div className="md:px-32">
            <div className="flex flex-wrap" style={{ "boxShadow": "10px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                <div className="w-1/2 md:w-1/4 bg-indigo py-8 md:py-16">
                    <FontAwesomeIcon icon="search" className="text-white text-2xl mt-8"/>
                    <h3 className="text-white text-lg pt-4 pb-8">Search Nearby</h3>
                </div>
                <div className="w-1/2 md:w-1/4 bg-pink py-8 md:py-16">
                    <FontAwesomeIcon icon="handshake" className="text-white text-2xl mt-8" />
                    <h3 className="text-white text-lg pt-4 pb-8">Convenient Arrangements</h3>
                </div>
                <div className="w-1/2 md:w-1/4 bg-green py-8 md:py-16">
                    <FontAwesomeIcon icon="wifi" className="text-white text-2xl mt-8"/>
                    <h3 className="text-white text-lg pt-4 pb-8">Live Updates</h3>
                </div>
                <div className="w-1/2 md:w-1/4 bg-yellow py-8 md:py-16">
                    <FontAwesomeIcon icon="comments" className="text-white text-2xl mt-8"/>
                    <h3 className="text-white text-lg pt-4">Keep In Touch</h3>
                </div>
            </div>
        </div>
    </div>
);