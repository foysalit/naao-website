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
                        Naao helps you find the perfect traveler to deliver your package.
                        You can search travelers from a city to another city and filter by the weight/size of parcels they are willing to deliver.
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
                        When you find suitable travelers, make an offer requesting them to delivery your parcel by providing your parcel details and the amount you're willing to pay.
                        You can make offers to multiple travelers to ensure more options for your parcel.
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
                        Once the offer is made, you can chat with the traveler through Naao Chat and work out th finer details of the arragement such as:
                        where to drop off the parcel, where to pick it up from, how the transaction will be done etc.
                        <br/>
                        Once the parcel is delivered safely, you or the traveler can mark it delivered and provide a review stating your whole experience.
                    </p>
                </div>
            </div>
            <div className="hidden md:block w-2/5">
                <img src="/static/feature-images/updates.png" className="w-3/5" />
            </div>
        </div>

    </React.Fragment>
);