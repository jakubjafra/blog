import React from 'react';
import { css, Styled } from 'theme-ui';
import Helmet from 'react-helmet';

import useBlogThemeConfig from '../hooks/configOptions';

import Header from './header';

const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig();
  const { webfontURL } = blogThemeConfig;

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div>
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  );
};

export default Layout;
