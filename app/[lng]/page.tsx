import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ivan Cilento",
  url: "https://cilento.vercel.app",
  jobTitle: "Desenvolvedor Full-Stack",
  sameAs: [
    "https://github.com/izanoth",
    "https://linkedin.com/in/icilento",
  ],
};

export default function Home() {
  return (
  	 <>
	    <script
	      type="application/ld+json"
	      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
	    />
	    <main className="flex min-h-screen flex-col items-center justify-between">
	    	<Header />
	      <Hero />
	      <About />
	      <Projects />
	      <Services />
	      <Contact />
	      <Footer />
	    </main>
    </>
  );
}