import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About4 from './../Elements/About4';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';
import OurMission from '../Elements/OurMission';
import AboutEle from '../Elements/About';

var bnrimg = require('./../../images/banner/4.webp');

class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Best Scrap in Abu Dhabi" pagename="About Us" bgimage={bnrimg}/>
                    {/* <About4/> */}
                    <AboutEle />

                    <OurMission />


                    {/* <Specialization4 /> */}
                    {/* <Team3 /> */}
                    {/* <AboutSummary /> */}

                </div>

                <Footer />

            </>
        );
    };
};

export default About;