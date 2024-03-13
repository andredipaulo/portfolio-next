'use client'

import Mycarousel from "../Mycarousel/mycarousel";
import "./project.css"
import Image from 'next/image'

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = [
    { image: '/image/project1.png' },
    { image: '/image/project2.png' },
    { image: '/image/project3.png' },
    { image: '/image/project2.png' },
    { image: '/image/project1.png' },
    { image: '/image/project2.png' },
];


export default function Project(){
    return (
        <div className="container">
            <div className="projects">

                <h1>projects<span>()</span></h1>
                
                <div className="gallery">
                    
                        <Mycarousel/>
                    
                </div>

            </div>                     
        </div>                     
    )
}