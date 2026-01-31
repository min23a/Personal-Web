import { locationPages } from '@/Data/locationPages'
import { Heading } from '@/Snippet/Typograph'
import Link from 'next/link';
import React from 'react'

const LocationBased = () => {
    const locations = locationPages.map(loc => loc.slug);

    if (!locations || locations.length === 0) return null;

    return (
        <>

            <Heading cls="mb-4 text-center mt-2 sm:mt-6 animate-on-scroll animate-fade-up">Location Based Shopify Developer Services</Heading>
            <p className="mb-4 animate-fade-up animate-on-scroll">
                As a Shopify developer, I offer specialized services tailored to businesses in various locations. Whether you're a startup in San Francisco or an established retailer in London, I understand the unique challenges and opportunities that come with your specific market. My location-based services ensure that your Shopify store is optimized for local SEO, payment gateways, and shipping options, providing a seamless shopping experience for your customers.
            </p>
            <p className="mb-4 animate-fade-up animate-on-scroll">
                By choosing my location-based Shopify development services, you benefit from my deep understanding of regional market trends and consumer behaviors. I work closely with you to customize your store's design and functionality to resonate with your target audience, ultimately driving higher engagement and conversions. Let's collaborate to create a Shopify store that not only meets your business needs but also thrives in your local market.
            </p>
            <p className="mb-4 animate-fade-up animate-on-scroll">
                Ready to take your Shopify store to the next level with location-specific strategies?
            </p>
            {
                locations.map((loc, index) => (
                    <Link key={index} href={`/shopify-developer-in/${loc}`} className="inline-flex uppercase p-3 m-2 rounded-md border hover:shadow-md hover:shadow-indigo-500/50 animate-fade-up animate-on-scroll">
                        {loc}
                    </Link>
                ))
            }

        </>
    )
}

export default LocationBased