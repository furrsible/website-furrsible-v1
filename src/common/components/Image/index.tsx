import React from 'react';

type ImageType = {
  src: string;
  alt: string;
};

const Image: React.FC<ImageType> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Image;
