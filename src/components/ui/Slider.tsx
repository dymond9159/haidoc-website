"use client"

import { ReactNode, useEffect, useState } from "react"

interface SliderProps {
  images: string[]
  interval?: number
  children?: ReactNode
}

export default function Slider({ images, interval = 6000, children }: SliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)
    return () => clearInterval(slideInterval)
  }, [images.length, interval])

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  )
}
