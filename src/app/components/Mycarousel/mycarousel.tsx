'use client'

import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
    { image: '/image/project1.png' },
    { image: '/image/project2.png' },
    { image: '/image/project3.png' },
    { image: '/image/project2.png' },
    { image: '/image/project1.png' },
    { image: '/image/project2.png' },
];


export default function Mycarousel(){
    return (        
        <Carousel 
            autoPlay
            infiniteLoop            
            centerMode
            centerSlidePercentage={100}            
            showThumbs={false}                        
        >      
             
            {images.map( (img) => (                
                <div className="gallery-item" key={img.image}>
                    <img src={img.image} alt="ale"/>
                </div>
            ))}    
                    
        </Carousel>        
    )
}