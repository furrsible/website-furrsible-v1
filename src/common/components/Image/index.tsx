import React from 'react';

type ImageType = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<ImageType> = ({ src, alt, className, ...rest }) => {
  return (
    <img src={src} alt={alt} className={className} loading="lazy" {...rest} />
  );
};

export default Image;
