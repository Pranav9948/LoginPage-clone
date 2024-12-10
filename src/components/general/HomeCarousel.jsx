
"use client"
import React ,{useState,useEffect} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import slideImg1 from "@/assests/img/slides/slide-img-1.jpg"
import slideImg2 from "@/assests/img/slides/slide-img-2.jpg"
import slideImg3 from "@/assests/img/slides/slide-img-3.jpg"
import slideImg4 from "@/assests/img/slides/slide-img-4.jpg"
import Image from "next/image";

function HomeCarousel() {

 const slides = [
    {
      id: 1,
      title: "Slide 1",
      image: slideImg1,
    },
    {
      id: 2,
      title: "Slide 2",
      image: slideImg2,
    },
    {
      id: 3,
      title: "Slide 3",
      image: slideImg3,
    },
    {
      id: 4,
      title: "Slide 4",
      image: slideImg4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); 
  }, [slides.length]);


  return (
    <div className="h-full w-full flex items-stretch">
    <Carousel className="h-full w-full">
      <CarouselContent>
        {
            slides.map((slide,index) => (
              <CarouselItem key={slide.id} className={index === currentIndex ? "block" : "hidden"}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="h-screen w-full "
                 
                  priority
                />
              </CarouselItem>
            ))
        }
     
        
      </CarouselContent>
      
    </Carousel>
    </div>
  );
}

export default HomeCarousel;
