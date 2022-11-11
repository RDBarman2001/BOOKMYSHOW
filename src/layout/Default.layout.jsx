import React from 'react'
import Navbar from '../components/Navbar/Navbar.Components';
import Footer from '../components/Footer/Footer';

const DefaultLayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <Footer />
        </div>
    )
}

export default DefaultLayoutHoc;