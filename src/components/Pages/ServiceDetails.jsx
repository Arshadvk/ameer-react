import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';

import Banner from './../Elements/Banner';

const details = [
    {
        header: "Aluminum Scrap Buyers in Abu Dhabi",
        image: "aluminum/aluminum-1.jpg",
        banner: "aluminum/aluminum.jpg",
        subHeading1: "Transforming Aluminum Scrap into Value",
        text1: "Ameer Scrap is your trusted partner for aluminum scrap recycling in Abu Dhabi. We are dedicated to helping you turn waste into wealth by providing competitive prices, professional service, and sustainable solutions. Whether you have cast aluminum, sheet aluminum, or extruded aluminum, our experienced team ensures that your materials are properly sorted, handled, and recycled to maximize their value. With a strong commitment to environmental care, we aim to reduce landfill waste and conserve natural resources, contributing to a cleaner and greener future for all.",
        subHeading2: "Why Choose Ameer Scrap for Aluminum Recycling?",
        text2: "At Ameer Scrap, we pride ourselves on offering exceptional service tailored to meet your specific needs. Our transparent pricing model ensures you receive the best rates for your scrap, while our convenient collection services make the process hassle-free. We bring years of expertise to the table, making us a reliable partner for all your aluminum recycling needs in Abu Dhabi. By choosing Ameer Scrap, you're not just selling scrap – you're joining us in building a sustainable future where waste is repurposed into valuable resources.",
    },
    {
        header: "Container Buyer In Abu Dhabi",
        image: "container/container-1.jpg",
        banner: "container/container-2.jpeg",
        subHeading1: "Welcome to Ameer Scrap – Your Reliable Container Buyer in Abu Dhabi",
        text1: "Looking to sell unused scrap containers? Ameer Scrap is your go-to partner in Abu Dhabi for efficient and profitable scrap management. We offer competitive prices and seamless services to make the entire process hassle-free. With a strong focus on sustainability, we ensure your unwanted containers are repurposed responsibly. Choose Ameer Scrap for fair pricing, reliable pick-up services, and an eco-conscious approach to scrap recycling.",
        subHeading2: "Turn Scrap Containers into Value with Ameer Scrap in Abu Dhabi",
        text2: "Ameer Scrap specializes in buying scrap containers, offering top market prices and convenient pick-up services in Abu Dhabi. Our team ensures a smooth and transparent process from start to finish, valuing honesty and customer satisfaction. More than just a buyer, we provide comprehensive recycling solutions that prioritize environmental sustainability. Connect with Ameer Scrap today to transform your unused containers into cash while contributing to a greener planet.",
    },
    {
        header: "Copper Scrap Buyer In Abu Dhabi",
        image: "copper/copper-1.jpg",
        banner: "copper/copper-2.jpeg",
        subHeading1: "Ameer Scrap: Sustainable Copper Scrap Buyers in Abu Dhabi",
        text1: "At Ameer Scrap, we’re committed to offering top-notch scrap buying services for copper in Abu Dhabi. With years of expertise, we provide a seamless process, from swift pick-up to offering the best market rates for your scrap. Our eco-friendly approach ensures that every piece of scrap contributes to a cleaner planet. When you choose Ameer Scrap, you choose transparency, reliability, and a sustainable future. Contact us today to turn your unwanted scrap into profit responsibly.",
        subHeading2: "Your Reliable Partner for Copper Scrap Disposal in Abu Dhabi",
        text2: "Welcome to Ameer Scrap, a trusted name in copper scrap buying in Abu Dhabi. Specializing in efficient and eco-conscious scrap disposal, we offer competitive prices for your copper scrap. Whether you’re an individual or a business, our seamless pick-up services ensure hassle-free transactions. At Ameer Scrap, we believe in turning your scrap into value while promoting sustainable recycling practices. Choose professionalism, transparency, and a greener future with Ameer Scrap today!",
    },
    {
        header: "Industrial Scrap Buyer In Abu Dhabi",
        banner: "industrial/industrial-1.jpg",
        image: "industrial/industrial-2.webp",
        subHeading1: "Ameer Scrap: Your Trusted Industrial Scrap Buyers in Abu Dhabi",
        text1: "At Ameer Scrap, we specialize in buying all types of industrial scrap, offering top market prices and seamless services in Abu Dhabi. From metal and construction materials to obsolete machinery and e-waste, we handle it all. Our streamlined process includes on-site assessments, hassle-free pick-ups, and prompt payments. With a focus on environmental sustainability, Ameer Scrap ensures that your waste is responsibly recycled while maximizing its value.",
        subHeading2: "Industrial Scrap Buyers Committed to Sustainability and Value",
        text2: "Ameer Scrap is your reliable partner for industrial scrap management in Abu Dhabi. We buy a wide range of scrap, including steel, aluminum, cables, and electronic waste, offering competitive rates and transparent pricing. Our eco-friendly practices ensure that all materials are processed in compliance with environmental standards, reducing waste and promoting recycling. Partner with Ameer Scrap today to turn your industrial waste into profit while contributing to a cleaner, greener future.",
    },
    {
        header: "Metal Scrap Dealer In Abu Dhabi",
        image: "metal/metal-2.webp",
        banner: "metal/metal.jpg",
        subHeading1: "Welcome to Ameer Scrap – Abu Dhabi’s Leading Scrap Metal Dealer",
        text1: "At Ameer Scrap, we specialize in buying and selling all types of scrap metals, including copper, aluminum, brass, steel, and iron. Our eco-conscious approach ensures that every piece of scrap is recycled responsibly, contributing to a greener planet. We offer competitive pricing based on global market rates, ensuring you get the best value for your materials. With free on-site evaluation and collection services, Ameer Scrap makes the process seamless and hassle-free.",
        subHeading2: "Eco-Friendly Scrap Metal Management with Ameer Scrap in Abu Dhabi",
        text2: "Ameer Scrap is your reliable partner for all scrap metal needs in Abu Dhabi. From purchasing various metals to providing collection and recycling services, we deliver comprehensive solutions for businesses and individuals. Our transparent pricing model, coupled with years of industry expertise, guarantees you receive exceptional value and service. Partner with Ameer Scrap to turn your scrap into profit while supporting environmental sustainability.",
    },
    {
        header: "Steel Scrap In Abu Dhabi",
        image: "steel/steel-1.jpg",
        banner: "steel/steel-2.jpg",
        subHeading1: "Ameer Scrap: Your Trusted Steel Scrap Buyers in Abu Dhabi",
        text1: "At Ameer Scrap, we specialize in buying steel scrap and turning it into a valuable resource. With years of experience and a commitment to sustainability, we ensure every piece of scrap is responsibly recycled. Offering competitive pricing and hassle-free pick-up services, we make it easy for you to clear out your steel scrap while earning top cash. Partner with Ameer Scrap and join us in building a cleaner, greener future.",
        subHeading2: "Steel Scrap Management with Ameer Scrap in Abu Dhabi",
        text2: "Looking to sell your steel scrap in Abu Dhabi? Ameer Scrap is your trusted partner for sustainable scrap solutions. We buy all types of steel scrap, offering transparent pricing and quick, efficient collection services. Our environmentally friendly practices ensure your scrap contributes to reducing waste and promoting recycling. Choose Ameer Scrap to turn your steel scrap into profit while supporting a sustainable planet.",
    },
    {
        header: "Scrap Yard In Abu Dhabi",
        image: "yard/yard.jpg",
        banner: "yard/yard-2.jpg",
        subHeading1: "Welcome to Ameer Scrap – Abu Dhabi’s Premier Scrap Yard",
        text1: "Looking for a reliable scrap yard in Abu Dhabi? Ameer Scrap offers eco-friendly and efficient recycling solutions for all types of scrap materials. From metals and electronics to vehicles and general waste, we ensure responsible disposal and competitive pricing. With years of expertise, our dedicated team provides seamless services, turning your scrap into value while promoting a sustainable future.",
        subHeading2: "Comprehensive Scrap Recycling Services at Ameer Scrap in Abu Dhabi",
        text2: "At Ameer Scrap, we specialize in sustainable waste management and recycling. Our scrap yard in Abu Dhabi accepts a wide range of materials, including metals, electronics, automotive scrap, and general waste. With competitive prices, quick services, and an eco-friendly approach, we make scrap disposal easy and rewarding. Join us in building a greener planet by recycling with Ameer Scrap.",
    },
];

const PostImage = () => {
    const { id } = useParams(); // Access the 'id' parameter from the URL
    let num = id === "aluminum-scrap-buyers-in-abu-dhabi" ? 0 :
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
                    bgimage={require(`./../../images/service/${details[num].banner}`)}
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
                                    <h4>
                                        {details[num].subHeading1}
                                    </h4>
                                    <p>{details[num].text1}</p>

                                    <h4>
                                        {details[num].subHeading2}
                                    </h4>
                                    <p>{details[num].text2}</p>

                                    
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
