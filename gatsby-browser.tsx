import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import './src/common/styles/app.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <div>{element}</div>;
};
