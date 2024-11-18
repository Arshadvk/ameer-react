import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerImage from '../../images/background/banner.jpg'; // Import the image directly

class Banner extends React.Component {
    render() {
        const divStyle = {
            backgroundImage: `url(${bannerImage})`, // Set the image as the background
            backgroundSize: 'cover', // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image
            height: '500px', // Adjust height as needed
            display: 'flex', // Flexbox for centering content
            alignItems: 'center', // Vertically center the content
            justifyContent: 'center', // Horizontally center the content
            color: '#fff', // Text color for better contrast
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Add text shadow for readability
        };

        return (
            <div style={divStyle}>
                <h1 className='text-white'>Ameer Scrap Trading</h1>
            </div>
        );
    }
}

export default Banner;
