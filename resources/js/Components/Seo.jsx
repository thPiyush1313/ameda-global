import React from 'react';
import { Head } from '@inertiajs/react';

export default function Seo({
    title,
    description = "Ameda Global sets the standard in high-performance material sourcing, precision manufacturing, and unyielding supply chain architecture.",
    keywords = "industrial materials, high-tensile alloys, structural alloys, chemical solvents, global logistics",
    image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    url = "https://amedaglobal.com"
}) {
    // Appends the brand name to specific page titles
    const fullTitle = title ? `${title} | Ameda Global` : 'Ameda Global | Enterprise Material Sourcing';

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / LinkedIn / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Canonical Tag to prevent duplicate content penalties */}
            <link rel="canonical" href={url} />
        </Head>
    );
}