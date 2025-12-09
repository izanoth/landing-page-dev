import { MetadataRoute } from 'next';
import { languages } from '../lib/i18n/settings';

const baseUrl = 'https://cilento.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [{url: 'https://cilento.vercel.app', lastModified: new Date(), changeFrequency: 'monthly', priority: 1}];

  languages.forEach((lang) => {
    const url = `${baseUrl}/${lang}`;

    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,

      alternates: {
        languages: languages.reduce((acc, lng) => {
          acc[lng] = `${baseUrl}/${lng}`;
          return acc;
        }, {} as Record<string, string>),
      },
    });
  });

  return entries;
}
