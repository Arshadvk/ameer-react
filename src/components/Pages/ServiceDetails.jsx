import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import LatestBlogs2 from '../Elements/LatestBlogs2';
import BlogComments from '../Elements/BlogComments';
import Banner from './../Elements/Banner';

const details = [
    {
        header: "Aluminum Scrap Buyers in Abu Dhabi",
        image: "./../../images/service/aluminum/1.jpg",
        description: "Your Trusted Aluminum Scrap Buyers in Abu Dhabi Are you looking for reliable aluminum scrap buyers in Abu Dhabi? Look no further than Ameer Scrap & Metal Waste Trading LLC. We are dedicated to turning waste into wealth, one scrap at a time.",
    },
];

const PostImage = () => {
    const { id } = useParams(); // Access the 'id' parameter from the URL
    let num = 0;

    // Dynamically determine the details index based on 'id'
    if (id === "aluminum-scrap-buyers-in-abu-dhabi") {
        num = 0;
    }

    const bnrimg = require('./../../images/banner/2.jpg');

    return (
        <>
            <Header />
            <div className="page-content">
                <Banner
                    title={details[num].header}
                    pagename="Post Image"
                    bgimage={bnrimg}
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
                                                    src={require("./../../images/blog/default/thum1.jpg")}
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
                            <LatestBlogs2 bgcolor="bg-gray" />
                            <BlogComments />
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
