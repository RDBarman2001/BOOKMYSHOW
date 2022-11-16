import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./Arraows.Component";

const HeroCarousel = () => {
    const [images, setImages] = useState([
        {
            "popularity": 1640.159,
            "vote_count": 32,
            "video": false,
            "poster_path": "/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
            "id": 734309,
            "adult": false,
            "backdrop_path": "/7fvdg211A2L0mHddvzyArRuRalp.jpg",
            "original_language": "en",
            "original_title": "Santana",
            "genre_ids": [
                28
            ],
            "title": "Santana",
            "vote_average": 6.3,
            "overview": "Two brothers — one a narcotics agent and the other a general — finally discover the identity of the drug lord who murdered their parents decades ago. They may kill each other before capturing the bad guys.",
            "release_date": "2020-08-28"
        },
        {
            "popularity": 1640.159,
            "vote_count": 32,
            "video": false,
            "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            "id": 734309,
            "adult": false,
            "backdrop_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
            "original_language": "en",
            "original_title": "Santana",
            "genre_ids": [
                28
            ],
            "title": "Santana",
            "vote_average": 6.3,
            "overview": "Two brothers — one a narcotics agent and the other a general — finally discover the identity of the drug lord who murdered their parents decades ago. They may kill each other before capturing the bad guys.",
            "release_date": "2020-08-28"
        },
        {
            adult: false,
            backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
            genre_ids: [16, 878, 28],
            id: 610150,
            original_language: "ja",
            original_title: "ドラゴンボール超 スーパーヒーロー",
            overview:
                "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
            popularity: 5953.989,
            poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
            release_date: "2022-06-11",
            title: "Dragon Ball Super: Super Hero",
            video: false,
            vote_average: 8,
            vote_count: 1426,
        },
        {
            adult: false,
            backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
            genre_ids: [53],
            id: 985939,
            original_language: "en",
            original_title: "Fall",
            overview:
                "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
            popularity: 6731.327,
            poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
            release_date: "2022-08-11",
            title: "Fall",
            video: false,
            vote_average: 7.4,
            vote_count: 346,
        },
    ]);

    const settingsLG = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,

        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((images, index) => (
                        <div className="w-full h-56 md:h-80 py-3" key={index}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLG}>
                    {images.map((images, index) => (
                        <div className="w-full h-96 px-2 py-3" key={index}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`}
                                alt="Hero Banner"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousel;