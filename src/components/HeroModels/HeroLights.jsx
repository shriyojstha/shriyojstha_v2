import React from 'react'
import { useMediaQuery } from 'react-responsive';

const HeroLights = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {/* <ambientLight intensity={0.2} color="1a1a40" /> */}
      <directionalLight intensity={2} position={isMobile ? [-9, -4, 3] : [-9,-4,5]} /> 

    <spotLight intensity={4} penumbra={2} position={isMobile ? [1,0,0] : [1.4,0,0] } color='red'/>

    </>
  );
}

export default HeroLights