import React from 'react'
import Header from './header/Header'
import HeaderTopPart from './header/HeaderTopPart'
import HeaderPart from './header/headerPart/HeaderPart'
// import CarouselSection from './heroSection/CarouselSection'
import CarouselSec from './heroSection/CarouselSec'
import ProductCard from './products/ProductCard'
import TrendinNow from './products/TrendinNow'
import Celebrate from './heroSection/Celebrate'
import Testimonials from './heroSection/Testimonials'
import GoogleReview from './heroSection/GoogleReview'

const Views = () => {
  return (
    <div>
        <Header />
        <HeaderPart />
        <CarouselSec />
        <ProductCard />
        <TrendinNow />
        <Celebrate />
        <Testimonials />
        <GoogleReview />
    </div>
  )
}

export default Views