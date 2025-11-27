import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-purpleStart via-indigoMid to-blueEnd text-white">
      <div className="container mx-auto px-4 z-10">
        <Image src="/img/logo-horizontal.png" className="" width={179} height={100}/>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
       
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
          Building innovative solutions with cutting-edge technology.
        </p>
        <button className="px-8 py-3 bg-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up animate-delay-400">
          View Projects
        </button>
      </div>
      {/* Placeholder for tech illustration/image */}
      <div className="absolute inset-0 z-0">
        <img src="/img/hero-banner.png" alt="background" className="w-full h-full grayscale-70 object-cover" />
      </div>
    </section>
  );
};

export default Hero;
