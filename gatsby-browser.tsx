import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { ParallaxProvider } from 'react-scroll-parallax';
import './src/common/styles/app.css';
import 'animate.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <ParallaxProvider>{element}</ParallaxProvider>;
};
