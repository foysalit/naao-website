import Head from 'next/head';

import '../styles/main.css';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Features from '../components/features';
import HowItWorks from '../components/how-it-works';

export default () => (
    <div className="font-sans">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GA_TRACKING_ID}');
                `}}
            />

            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" /> 
            <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
            <title>Naao App</title>
        </Head>
        <Hero />
        <Features />
        <HowItWorks />
        <Footer />
    </div>
);