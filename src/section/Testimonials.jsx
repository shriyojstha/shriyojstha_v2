import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full px-5 md:px-10">
        <TitleHeader title="Quotes that inspires me" sub="Quote of the day" />
     
     <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
        {testimonials.map((testimonial) => (
          <GlowCard card={testimonial}>
            <div className="flex items-center gap-3">
<p className="font-bold">{testimonial.name}</p>

            </div>
          </GlowCard>
        ))}
     </div>
     
      </div>
    </section>
  );
};

export default Testimonials;
