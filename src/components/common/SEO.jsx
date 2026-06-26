import { Helmet } from "react-helmet-async";

const SEO = ({
    title = "E-Vidyaniketan",
    description = "",
    keywords = "",
    path = "",
    image = "/og-image.jpg"
}) => {

    const siteName = "E-Vidyaniketan";
    const domain = "https://evidyaniketan.com";

    return (

        <Helmet prioritizeSeoTags>

            <title>

                {`${title} | ${siteName}`}

            </title>


            <meta

                name="description"

                content={description}

            />


            <meta

                name="keywords"

                content={keywords}

            />


            <meta

                name="robots"

                content="index,follow"

            />


            <link

                rel="canonical"

                href={`${domain}${path}`}

            />



            {/* Open Graph */}

            <meta property="og:type" content="website" />

            <meta

                property="og:title"

                content={`${title} | ${siteName}`}

            />


            <meta

                property="og:description"

                content={description}

            />


            <meta

                property="og:url"

                content={`${domain}${path}`}

            />


            <meta

                property="og:image"

                content={`${domain}${image}`}

            />



            {/* Twitter */}

            <meta

                name="twitter:card"

                content="summary_large_image"

            />


            <meta

                name="twitter:title"

                content={`${title} | ${siteName}`}

            />


            <meta

                name="twitter:description"

                content={description}

            />


            <meta

                name="twitter:image"

                content={`${domain}${image}`}

            />

        </Helmet>

    );

};

export default SEO;