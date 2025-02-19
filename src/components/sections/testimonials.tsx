'use client';

import { Testimonial } from '@/components/ui/testimonials';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsGrid() {
  return (
    <div className="px-16 py-8 mt-16 items-center grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => {
        const rotation = Math.random() * 3 - 1.5;
        const adjustedRotation = 
          rotation > -0.25 && rotation < 0.25
            ? rotation + (rotation >= 0 ? 0.25 : -0.25)
            : rotation;
        
        return (
          <Testimonial 
            key={index} 
            {...testimonial} 
            rotation={adjustedRotation}
          />
        );
      })}
    </div>
  );
} 