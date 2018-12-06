import React from 'react';

export default () => (
    <React.Fragment>

        <div className="bg-grey-darker py-8 px-4 md:px-16 flex">
            <div className="w-full md:w-3/5 flex items-center">
                <div className="w-1/6">
                    <span className="text-5xl text-yellow font-bold">1</span>
                </div>
                <div className="text-left w-5/6">
                    <h2 className="text-white text-bold text-2xl pb-6">Find Traveler</h2>
                    <p className="text-grey leading-normal">
                        If you have some extra space in your luggage when going somewhere, post your trip on Naao to make some extra $.
                        People in your city will be able to see your trip and make an offer for delivering their parcels.
                    </p>
                </div>
            </div>
            <div className="hidden md:block w-2/5">
                <img src="/static/feature-images/setup.png" className="w-3/5" />
            </div>
        </div>

        <div className="bg-grey-darkest py-8 px-4 md:px-16 flex">
            <div className="hidden md:block w-2/5">
                <img src="/static/feature-images/aggreement.png" className="w-3/5" />
            </div>
            <div className="w-full md:w-3/5 flex items-center">
                <div className="text-right w-5/6">
                    <h2 className="text-white text-bold text-2xl pb-6">Make offers</h2>
                    <p className="text-grey leading-normal">
                        If you have some extra space in your luggage when going somewhere, post your trip on Naao to make some extra $.
                        People in your city will be able to see your trip and make an offer for delivering their parcels.
                    </p>
                </div>
                <div className="w-1/6">
                    <span className="text-5xl text-yellow font-bold">2</span>
                </div>
            </div>
        </div>

        <div className="bg-grey-dark py-8 px-4 md:px-16 flex">
            <div className="w-full md:w-3/5 flex items-center">
                <div className="w-1/6">
                    <span className="text-5xl text-yellow font-bold">3</span>
                </div>
                <div className="text-left w-5/6">
                    <h2 className="text-white text-bold text-2xl pb-6">Workout an arrangement</h2>
                    <p className="text-grey leading-normal">
                        If you have some extra space in your luggage when going somewhere, post your trip on Naao to make some extra $.
                        People in your city will be able to see your trip and make an offer for delivering their parcels.
                    </p>
                </div>
            </div>
            <div className="hidden md:block w-2/5">
                <img src="/static/feature-images/updates.png" className="w-3/5" />
            </div>
        </div>

    </React.Fragment>
);