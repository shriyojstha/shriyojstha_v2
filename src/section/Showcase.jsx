import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'


gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {

const sectionRef = useRef(null);

const project1Ref = useRef(null);
const project2Ref = useRef(null);
const project3Ref = useRef(null);


useGSAP(() => {
const projects = [
  project1Ref.current,
  project2Ref.current,
  project3Ref.current,
];

  projects.forEach((card, index) => {
    gsap.fromTo(
      card,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.1 * (index + 1),
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: 'play reverse play reverse'
        },
      }
    );
  });

  gsap.fromTo(
    sectionRef.current,
    {opacity: 0},
    {opacity: 1,
      duration: 1
    }
  )

});

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="images/vozmedia.png" alt="vozmedia" />
            </div>
            <div className="text-content">
              <h2>
                Want a local site to discuss about something? Vozmedia in
                development... Releasing soon!!
              </h2>
              <p className="text-white-50 md:text-xl">
                The site developed in MERN stack intending to develop with
                modern industrial tools to load with multiple feature
              </p>
            </div>
          </div>

          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div ref={project2Ref} className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="images/project2.png"
                  alt="library management system"
                />
              </div>
              <h2>Library Management System</h2>
            </div>

            <div ref={project3Ref} className="project">
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="images/project3.png"
                  alt="YC directory"
                />
              </div>
              <h2>YC Directory - A Startup Showcase App.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase