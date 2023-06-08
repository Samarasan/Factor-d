import React from 'react'
import TestimonialCarousel from '../../components/TestimonialCarousel';

const Testimonials = () => {
    const testimonials = [
        { 
          text: "I ordered a gift for my girlfriend, she loved it and the smile that came on her face after seeing the gift made my day. Thank you.",
          author: "John Doe"
        },
        {
          text: "Vestibulum at est sit amet ipsum condimentum lobortis.Etiam dapibus luctus ex, sed laoreet velit lacinia id",
          author: "Jane Smith"
        },
        {
          text: "Etiam dapibus luctus ex, sed laoreet velit lacinia id.Etiam dapibus luctus ex, sed laoreet velit lacinia id",
          author: "Mike Johnson"
        },
        { 
            text: "I ordered a gift for my girlfriend, she loved it and the smile that came on her face after seeing the gift made my day. Thank you.",
            author: "John Doe"
          },
      ];
  return (
    <div style={{margin:"30px 0px"}}>
         <TestimonialCarousel testimonials={testimonials} />
    </div>
  )
}

export default Testimonials