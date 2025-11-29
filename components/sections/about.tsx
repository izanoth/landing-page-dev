'use client';
import React from 'react';
import { useClientTranslation } from '@/lib/i18n/use-client-translation';
import { useLang } from "@/lib/i18n/context";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const { lng } = useLang();
  const { t } = useClientTranslation('about', lng);

  const techStackList = t('techStackList', { returnObjects: true }) as Record<string, string>;
  const platformStackList = t('platformStackList', { returnObjects: true }) as Record<string, string>;

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
        <div className="mt-24 text-center animate-fade-in-up animate-delay-600">
          <h3 className="text-3xl font-bold mb-8">{t('techStackTitle')}</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {Object.entries(techStackList).map(([name, src]) => (
                <CarouselItem key={name} className="md:basis-1/4 lg:basis-1/6 flex flex-col items-center justify-center p-4">
                  <div className="flex flex-col items-center justify-center h-full">
                    <Image src={src} alt={name} width={48} height={48} className="mb-2" />
                    <span className="text-sm">{name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mt-20 text-center animate-fade-in-up animate-delay-800">
          <h3 className="text-3xl font-bold mb-8">{t('platformStackTitle')}</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent>
              {Object.entries(platformStackList).map(([name, src]) => (
                <CarouselItem key={name} className="md:basis-1/2 lg:basis-1/3 flex flex-col items-center justify-center p-4">
                  <div className="flex flex-col items-center justify-center h-full">
                    <Image src={src} alt={name} width={48} height={48} className="mb-2" />
                    <span className="text-sm">{name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
