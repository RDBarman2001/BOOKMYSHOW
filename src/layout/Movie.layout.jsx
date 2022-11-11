import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.component';
import Footer from '../components/Footer/Footer';

const MovieLayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <MovieNavbar />
            <Component {...props} />
            <Footer />
        </div>
    )
}

export default MovieLayoutHoc;