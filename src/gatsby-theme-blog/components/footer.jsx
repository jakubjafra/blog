/** @jsx jsx */
import { css, jsx } from 'theme-ui';

import Bio from './bio';

const Footer = () => (
  <footer
    css={css({
      maxWidth: 'container',
      mx: 'auto',
      px: 2,
      mt: 5,
      mb: 3,
    })}
  >
    <Bio />
  </footer>
);

export default Footer;
