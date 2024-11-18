import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import ServiceDetails from './Pages/ServiceDetails';
import BlogGrid from './Pages/BlogGrid';
import BlogListing from './Pages/BlogListing';
import BlogMasonary from './Pages/BlogMasonary';
import Faq from './Pages/Faq';
import Error from './Pages/Error';
import ContactUs from './Pages/ContactUs';
import PostImage from './Pages/PostImage';
import PostGallery from './Pages/PostGallery';
import PostVideo from './Pages/PostVideo';
import PostSidebar from './Pages/PostSidebar';

import ProjectCarousel from './Pages/ProjectCarousel';
import ProjectClassic1 from './Pages/ProjectClassic1';
import ProjectClassic2 from './Pages/ProjectClassic2';
import ProjectDetail from './Pages/ProjectDetail';
import ProjectGrid from './Pages/ProjectGrid';
import ProjectMasonary from './Pages/ProjectMasonary';

import Accordian from './Pages/Accordian';
import Button from './Pages/Button';
import IconBoxStyle from './Pages/IconBoxStyle';
import IconFont from './Pages/IconFont';
import ListGroup from './Pages/ListGroup';
import ModalPopup from './Pages/ModalPopup';
import Table from './Pages/Table';
import Tabs from './Pages/Tabs';
import Video from './Pages/Video';
import ScrollToTop from './Common/ScrollToTop';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            <Route path="/"  element={<Home/>} />

                            <Route path='/about' element={<About/>} />
                            <Route path='/services' element={<Services/>} />

                            <Route path='/service/:id' element={<ServiceDetails/>} />

                            <Route path='/blog-grid' element={<BlogGrid/>} />
                            <Route path='/blog-listing' element={<BlogListing/>} />
                            <Route path='/blog-masonary' element={<BlogMasonary/>} />
                            <Route path='/faq' element={<Faq/>} />
                            <Route path='/error' element={<Error/>} />
                            <Route path='/contactus' element={<ContactUs/>} />

                            <Route path='/post-image' element={<PostImage/>} />
                            <Route path='/post-gallery' element={<PostGallery/>} />
                            <Route path='/post-video' element={<PostVideo/>} />
                            <Route path='/post-sidebar' element={<PostSidebar/>} />

                            <Route path='/project-carousel' element={<ProjectCarousel/>} />
                            <Route path='/project-classic1' element={<ProjectClassic1/>} />
                            <Route path='/project-classic2' element={<ProjectClassic2/>} />
                            <Route path='/project-detail' element={<ProjectDetail/>} />
                            <Route path='/project-grid' element={<ProjectGrid/>} />
                            <Route path='/project-masonary' element={<ProjectMasonary/>} />

                            <Route path='/accordian' element={<Accordian/>} />
                            <Route path='/button' element={<Button/>} />
                            <Route path='/iconboxstyle' element={<IconBoxStyle/>} />
                            <Route path='/iconfont' element={<IconFont/>} />
                            <Route path='/listgroup' element={<ListGroup/>} />
                            <Route path='/modalpopup' element={<ModalPopup/>} />
                            <Route path='/table' element={<Table/>} />
                            <Route path='/tabs' element={<Tabs/>} />
                            <Route path='/video' element={<Video/>} />
                            <Route element={<Error/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;