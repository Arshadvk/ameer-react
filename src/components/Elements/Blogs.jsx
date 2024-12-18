import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/blog/latest-blog/pic1.jpg'),
        title: 'Commercial design for project',
        description: 'Which is the same as saying through shrinking from toil and pain.',
        date: '14',
        month: 'April',
        year: '2022'
    },
    {
        image: require('./../../images/blog/latest-blog/pic2.jpg'),
        title: 'Our interior design prediction',
        description: 'Today we can tell you, thanks to your passion, hard work creativity.',
        date: '16',
        month: 'Feb',
        year: '2022'
    },
    {
        image: require('./../../images/blog/latest-blog/pic3.jpg'),
        title: 'Low cost interior designing ideas',
        description: 'Every pleasure is to be welcomed every pain avoided. in certain.',
        date: '18',
        month: 'Jan',
        year: '2022'
    }
]

const service = [
    {
        header: "Aluminum Scrap Buyers in Abu Dhabi",
        url : "aluminum-scrap-buyers-in-abu-dhabi" ,
        image: require('./../../images/service/aluminum/aluminum-1.jpg'),
        description: "Ameer Scrap is your trusted partner for aluminum scrap recycling in Abu Dhabi  ..."
    },
    {
        header: "A/C Scrap Buyer in Abu Dhabi",
        url: "ac-scrap-buyer-in-abu-dhabi",
        image: require('./../../images/service/ac/ac1.jpg'),
        description: "Looking to sell old or unused air conditioning units? Ameer Scrap is your ...",
    },
    
    {
        header: "Copper Scrap Buyer In Abu Dhabi",
        url : "copper-scrap-buyers-in-abu-dhabi" ,
        image: require('./../../images/service/copper/copper-1.jpg'),
        description: "At Ameer Scrap, we’re committed to offering top-notch scrap buying services ...",
    },
    {
        header: "Industrial Scrap Buyer In Abu Dhabi",
        url : "industrial-scrap-buyers-in-abu-dhabi" ,
        image: require('./../../images/service/industrial/industrial-2.webp'),
        description: "At Ameer Scrap, we specialize in buying all types of industrial scrap, offering ...",
    },
    {
        header: "Metal Scrap Dealer In Abu Dhabi",
        url : "metal-scrap-dealer-in-abu-dhabi" ,
        image: require('./../../images/service/metal/metal-2.webp'),
        description: "At Ameer Scrap, we specialize in buying and selling all types of scrap metals ...",
    },
    {
        header: "Steel Scrap In Abu Dhabi",
        url : "steel-scrap-in-abu-dhabi" ,
        image: require('./../../images/service/steel/steel-2.jpg'),
        description: "Ameer Scrap, we specialize in buying steel scrap and turning it into a valuable ...",
    },
    {
        header: "Scrap Yard In Abu Dhabi",
        url : "scrap-yard-in-abu-dhabi" ,
        image: require('./../../images/service/yard/yard.jpg'),
        description: "Looking for a reliable scrap yard in Abu Dhabi? Ameer Scrap offers eco-friendly ...",
    },
];

var bnr1 = require('./../../images/background/bg5.jpg');

class Blogs extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 square_shape1 bg-parallax bg-cover" data-stellar-background-ratio="0.5" >
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head ">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our Services</span></h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                {service.map((item, index) => (
                                    <div className="col-md-6 col-sm-6 col-xs-12" key={index}>
                                        <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                                            <div className="mt-post-media mt-img-overlay7">
                                                <NavLink to="/post-image"><img src={item.image} alt=""/></NavLink>
                                            </div>
                                            <div className="mt-post-info p-a30">
                                                <div className="post-overlay-position">
                                                    
                                                    <div className="mt-post-title ">
                                                        <h4 className="post-title m-b0">{item.header}</h4>
                                                    </div>
                                                    <div className="mt-post-text">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <div className="readmore-line">
                                                        <span><NavLink to={`/service/${item.url}`} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
                        <strong>Services</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Blogs;