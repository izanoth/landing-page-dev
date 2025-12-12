import React from 'react';

const imagesToPreload = [
  '/img/sky-theme/hero-banner.png',
  '/img/sky-theme/project-ecommerce.png',
  '/img/sky-theme/project-task.png',
  '/img/sky-theme/project-portfolio.png',
  '/img/sky-theme/logo-horizontal.png',
  '/img/sky-theme/icon.png',
  '/img/dark-theme/Logo Ivan Cilento - Compact.png',
  '/img/dark-theme/hero-banner.png',
  '/img/dark-theme/project-ecommerce.png',
  '/img/dark-theme/project-task.png',
  '/img/dark-theme/project-portfolio.png',
  '/img/dark-theme/Skills Section Dashboard.png',
  '/img/dark-theme/logo-horizontal.png',
  '/img/dark-theme/icon.png',
  '/img/photo.jpg',
];

const PreloadImages = () => {
  return (
    <>
      {imagesToPreload.map((src, index) => (
        <link key={index} rel="preload" href={src} as="image" />
      ))}
    </>
  );
};

export default PreloadImages;