import React from 'react';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';


export default function Home({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = React.use(params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero lng={lng} />
      <About lng={lng} />
      <Projects lng={lng} />
      <Services lng={lng} />
      <Contact lng={lng} />
      <Footer lng={lng} />
    </main>
  );
}