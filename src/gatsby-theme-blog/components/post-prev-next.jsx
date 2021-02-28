/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, css, Styled, Flex } from 'theme-ui';

const PrevNextPost = ({ previous, next }) => (
  <div
    css={css({
      mt: 5,
      mb: 3,
    })}
  >
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
        <li css={css({ flex: 1 })}>
          {previous && (
            <Styled.a as={Link} to={previous.slug} rel="prev">
              ← {previous.title}
            </Styled.a>
          )}
        </li>
        <li css={css({ flex: 1 })}>
          {next && (
            <Styled.a as={Link} to={next.slug} rel="next">
              {next.title} →
            </Styled.a>
          )}
        </li>
      </Flex>
    )}
  </div>
);

export default PrevNextPost;
