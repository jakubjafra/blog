/** @jsx jsx */
import { css, Styled, jsx } from 'theme-ui';
import Helmet from 'react-helmet';

import useBlogThemeConfig from '../hooks/configOptions';

import Header from './header';
import Footer from './footer';

const Layout = ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig();
  const { webfontURL } = blogThemeConfig;

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <div
        css={css({
          maxWidth: 'container',
          mx: 'auto',
          px: 2,
        })}
      >
        {children}
      </div>
      <Footer />
    </Styled.root>
  );
};

export default Layout;
