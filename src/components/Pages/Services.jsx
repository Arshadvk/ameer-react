import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import AboutCompany from '../Elements/AboutCompany';
import Specialization3 from '../Elements/Specialization3';
import OurServices3 from '../Elements/OurServices3';
import OurValue3 from '../Elements/OurValue3';
import OurProject3 from '../Elements/OurProject3';
import Faq from '../Elements/Faq';
import Blogs from '../Elements/Blogs';

var bnrimg = require('./../../images/banner/4.webp');

class Services extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Services we Provide" pagename="Services" bgimage={bnrimg}/>
                    <Blogs/>

                <Footer />
                    
                </div>

                
               

            </>
        );
    };
};

export default Services;