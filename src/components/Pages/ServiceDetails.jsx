import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';

import Banner from './../Elements/Banner';

const details = [
    {
        header: "Aluminum Scrap Buyers in Abu Dhabi",
        image: "aluminum/aluminum-1.jpg",
        img: "aluminum/aluminum.jpg",
        description: "Your Trusted Aluminum Scrap Buyers in Abu Dhabi Are you looking for reliable aluminum scrap buyers in Abu Dhabi? Look no further than Ameer Scrap & Metal Waste Trading LLC. We are dedicated to turning waste into wealth, one scrap at a time.",
    },
    {
        header: "Container Buyer In Abu Dhabi",
        image: "container/container-1.jpg",
        img: "container/container-2.jpeg",
        description: "Your Trusted Aluminum Scrap Buyers in Abu Dhabi Are you looking for reliable aluminum scrap buyers in Abu Dhabi? Look no further than Ameer Scrap & Metal Waste Trading LLC. We are dedicated to turning waste into wealth, one scrap at a time.",
    },
    {
        header: "Copper Scrap Buyer In Abu Dhabi",
        image: "copper/copper-1.jpg",
        img: "copper/copper-2.jpeg",
        description: "Your Trusted Aluminum Scrap Buyers in Abu Dhabi Are you looking for reliable aluminum scrap buyers in Abu Dhabi? Look no further than Ameer Scrap & Metal Waste Trading LLC. We are dedicated to turning waste into wealth, one scrap at a time.",
    },
    {
        header: "Industrial Scrap Buyer In Abu Dhabi",
        image: "copper/copper-1.jpg",
        img: "copper/copper-2.jpeg",
        description: "Your Trusted Aluminum Scrap Buyers in Abu Dhabi Are you looking for reliable aluminum scrap buyers in Abu Dhabi? Look no further than Ameer Scrap & Metal Waste Trading LLC. We are dedicated to turning waste into wealth, one scrap at a time.",
    },
    {
        header: "Metal Scrap Dealer In Abu Dhabi",
        image: "copper/copper-1.jpg",
        img: "copper/copper-2.jpeg",
        description: "Your Trusted Aluminum Scrap Buyers in Abu Dhabi Are you looking for reliable aluminum scrap buyers in Abu Dhabi? Look no further than Ameer Scrap & Metal Waste Trading LLC. We are dedicated to turning waste into wealth, one scrap at a time.",
    },
    {
        header: "Steel Scrap In Abu Dhabi",
        image: "copper/copper-1.jpg",
        img: "copper/copper-2.jpeg",
        description: "Your Trusted Aluminum Scrap Buyers in Abu Dhabi Are you looking for reliable aluminum scrap buyers in Abu Dhabi? Look no further than Ameer Scrap & Metal Waste Trading LLC. We are dedicated to turning waste into wealth, one scrap at a time.",
    },
];

const PostImage = () => {
    const { id } = useParams(); // Access the 'id' parameter from the URL
    let num =  id === "aluminum-scrap-buyers-in-abu-dhabi" ? 0 : 
    id === "container-scrap-buyers-in-abu-dhabi" ? 1 : 
    id === "copper-scrap-buyers-in-abu-dhabi" ? 2 : 
    id === "industrial-scrap-buyers-in-abu-dhabi" ? 3 : 
    id === "metal-scrap-dealer-in-abu-dhabi" ? 4 : 
    id === "steel-scrap-in-abu-dhabi" ? 5 : 
    id === "scrap-yard-in-abu-dhabi" ? 6 : 0

    // Dynamically determine the details index based on 'id'
   

    const bnrimg = require('./../../images/banner/2.jpg');

    return (
        <>
            <Header />
            <div className="page-content">
                <Banner
                    title={details[num].header}
                    pagename={id}
                    service={true}
                    bgimage={require(`./../../images/service/${details[num].img}`)}
                />

                {/* SECTION CONTENT START */}
                <div className="section-full p-tb80 inner-page-padding">
                    <div className="container">
                        <div className="blog-single-wrap-width">
                            <div className="blog-post date-style-3 blog-detail text-black">
                                <div className="mt-post-media clearfix m-b30">
                                    <ul className="grid-post">
                                        <li>
                                            <div className="portfolio-item">
                                                <img
                                                    className="img-responsive"
                                                    src={require(`./../../images/service/${details[num].image}`)}
                                                    alt=""
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="mt-post-title">
                                    <h3 className="post-title">
                                        <NavLink to={"#"} className="font-weight-600">
                                            {details[num].header}
                                        </NavLink>
                                    </h3>
                                </div>
                                <div className="mt-post-text">
                                    <p>{details[num].description}</p>
                                    <h4>
                                        "When it comes to your house, don’t mess with the rest, trust the best."
                                    </h4>
                                    {/* Additional content goes here */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* SECTION CONTENT END */}
            </div>
            <Footer />
        </>
    );
};

export default PostImage;
