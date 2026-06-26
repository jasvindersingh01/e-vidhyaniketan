import SEO from "../components/common/SEO";
import PageBanner from "../components/common/PageBanner";

import CTA from "../components/common/CTA";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryGrid from "../components/gallery/GalleryGrid";


const Gallery = () => {

    return (

        <>


            <SEO

                title="Gallery"

                description="Explore memorable moments, activities and celebrations at E-Vidyaniketan."

                keywords="E Vidyaniketan gallery,kota coaching gallery,school events"

                path="/gallery"

            />



            <PageBanner

                title="Gallery"

                description="A glimpse into the vibrant learning environment and memorable moments at E-Vidyaniketan."

                currentPage="Gallery"

            />



            <GalleryHero />


            <GalleryGrid />


            <CTA />


        </>

    )

}


export default Gallery;