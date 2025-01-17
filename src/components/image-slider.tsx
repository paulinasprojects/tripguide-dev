/* eslint-disable @next/next/no-img-element */
'use client';
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useState } from "react";

interface Props {
  images: string[];
}

const ImageSlider = ({images}: Props) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: unknown) => {
    if (imageIndex === null) return;

    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1)
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  }



  return (
  
    <div className="w-full h-[552px] flex gap-[20px]  overflow-hidden max-sm:h-[280px]">
    {imageIndex !== null && (
      <div className="fixed  w-full h-full left-0 top-0 bg-black flex items-center justify-between overflow-hidden z-10">
        <div className="p-5" onClick={() => changeSlide("left")}>
          <ArrowLeft className="text-white size-[50px]"/>
        </div>
        <div className="">
          <img src={images[imageIndex]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="p-5" onClick={() => changeSlide("right")}>
          <ArrowRight className="text-white size-[50px]"/>
        </div>
        <div className="" onClick={() => setImageIndex(null)}>
          <X className="absolute top-5 right-5 size-6 text-white cursor-pointer"/>
        </div>
      </div>
    )}
    <div className="flex-[3] max-sm:flex-[2]">
      <img src={images[0]} alt="" className="w-full h-full object-cover rounded-[10px] cursor-pointer" onClick={() => setImageIndex(0)}/>
    </div>
    <div className="flex-[2] flex flex-col justify-between gap-[20px] max-sm:flex-[1]">
      {images.slice(1).map((image, index) => (
        <img
          src={image}
          alt=""
          key={index}
          className="h-[200px] rounded-[10px] object-cover cursor-pointer"
          onClick={() => setImageIndex(index + 1)}
        />
      ))}
    </div>
  </div>
);
}



export default ImageSlider