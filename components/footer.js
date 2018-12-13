export default () => (
    <div className="flex bg-grey-darkest text-center font-sans pt-16 pb-16">
        <div className="w-2/3 ml-auto mr-auto">
            <h2 className="text-4xl text-white pb-8">Get in touch</h2>
            <p className="pb-12 text-grey leading-normal">
                Feel free to drop us a line about any bug report, feature request or just to say hello! Your feedback is what fuels Naao.
                </p>

            <div>
                <a
                    href="mailto:naao.delivery@gmail.com" 
                    onClick={() => event({ action: 'contact_button', category: 'engagement' })}
                    className="bg-green hover:bg-green-dark text-white font-bold py-4 px-12 mb-12 rounded-full no-underline">
                    CONTACT
                </a>
            </div>

            <div className="mt-12">
                <a 
                    target="blank"
                    className="text-white mx-2"
                    href="https://termsfeed.com/privacy-policy/85f17788eb4efbc36e577aa5c6dfc4c8"
                >
                    Privacy Policy
                </a>
                <a 
                    target="blank"
                    className="text-white mx-2"
                    href="https://termsfeed.com/terms-conditions/9540a2e90d58c68ede2436e77c7d3734"
                >
                    Terms & Conditions
                </a>
            </div>
        </div>
    </div>
);