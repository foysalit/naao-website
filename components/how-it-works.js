import React from 'react';

import TravelerFeatures from './traveler-features';
import SenderFeatures from './sender-features';

export default class HowItWorks extends React.Component {
    state = {
        featureSet: 'traveler',
    };

    changeFeatureSet(featureSet) {
        this.setState({ featureSet });
    };

    render() {
        const commonBtnClasses = "w-1/2 px-4 py-4 text-white font-bold";

        return (
            <div className="bg-grey-dark text-center font-sans pt-16">
                <div className="w-2/3 ml-auto mr-auto pb-16">
                    <h2 className="text-4xl text-white pb-8">How it works</h2>
                    <p className="pb-12 text-grey leading-normal">
                        We are working tirelessly to make it easier for you to send anything to your loved ones anywhere in the world.
                        The following are what our platforms offers right now to make it happen.
                    </p>

                    <div className="w-full md:w-2/5 inline-flex">
                        <button 
                            onClick={() => this.changeFeatureSet('traveler')}
                            className={`${commonBtnClasses} ${this.state.featureSet === 'traveler' ? 'bg-pink' : 'bg-grey-darkest'} rounded-l-full`}
                        >
                            Traveler
                        </button>
                        <button 
                            onClick={() => this.changeFeatureSet('sender')}
                            className={`${commonBtnClasses} ${this.state.featureSet === 'traveler' ? 'bg-grey-darkest' : 'bg-pink'} rounded-r-full`}
                        >
                            Sender
                        </button>
                    </div>
                </div>

                {this.state.featureSet === 'traveler' ? <TravelerFeatures /> : <SenderFeatures /> }
            </div>
        );
    }
}