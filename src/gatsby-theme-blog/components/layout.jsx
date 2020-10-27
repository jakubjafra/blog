/** @jsx jsx */
import { css, Styled, jsx } from 'theme-ui';
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
            maxWidth: 'container',
            mx: 'auto',
          })}
        >
          {children}
        </div>
      </div>
    </Styled.root>
  );
};

export default Layout;
