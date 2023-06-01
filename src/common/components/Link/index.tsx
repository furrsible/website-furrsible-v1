import React from 'react';
import { Link as GLink } from 'gatsby';

export interface ILink {
  type?: 'internal' | 'external' | 'none';
  to: string;
  className?: string;
}

export const Link: React.FC<ILink & Record<string, any>> = ({
  children,
  type = `external`,
  className,
  to,
  ...rest
}) => {
  const LinkTypes = {
    internal: (
      <GLink
        to={to}
        className={`${className} focus:outline-none focus:ring-1 focus:ring-quartz`}
        {...rest}
      >
        {children}
      </GLink>
    ),
    external: (
      <a
        href={to}
        className={`${className} focus:outline-none focus:ring-1 focus:ring-quartz`}
        {...rest}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ),
    none: (
      <div
        className={`${className} focus:outline-none focus:ring-1 focus:ring-quartz`}
        {...rest}
      >
        {children}
      </div>
    ),
  };

  return LinkTypes[type] ? LinkTypes[type] : LinkTypes.external;
};

export default Link;
