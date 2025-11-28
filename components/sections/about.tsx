'use client';
import React from 'react';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';
import { useLang } from "@/lib/i18n/context";
import Image from "next/image"; 

const About = () => {
  const { lng } = useLang();
  const { t } = useClientTranslation('about', lng);
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left animate-delay-200">
            <p className="text-lg leading-relaxed mb-6">
              {t('paragraph1')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('paragraph2')}
            </p>
          </div>
			<div className="flex justify-center animate-fade-in-right animate-delay-400">
			  <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center bg-gray-700">
			    <Image
			      src="/img/photo.jpg"
			      alt="Photo"
			      width={400}
			      height={400}
			      className="object-cover w-full h-full"
			      priority
			    />
			  </div>
			</div>
        </div>
        <div className="mt-16 text-center animate-fade-in-up animate-delay-600">
          <h3 className="text-2xl font-semibold mb-4">{t('techStackTitle')}</h3>
          <p className="text-lg">
            {t('techStackList')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
