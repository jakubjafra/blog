/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, css, Styled, Flex } from 'theme-ui';

import Bio from './bio';

const PostFooter = ({ previous, next }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    <Bio />
    {(previous || next) && (
      <Flex
        as="ul"
        css={css({
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        })}
      >
        <li>
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Styled.a>
          )}
        </li>
        <li>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Styled.a>
          )}
        </li>
      </Flex>
    )}
  </footer>
);

export default PostFooter;
