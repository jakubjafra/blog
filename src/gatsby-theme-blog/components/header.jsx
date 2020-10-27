/** @jsx jsx */
import { Link } from 'gatsby';
import { css, Styled, jsx } from 'theme-ui';

const rootPath = `${__PATH_PREFIX__}/`;

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    );
  } else {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          ← Posts list
        </Styled.a>
      </Styled.h3>
    );
  }
};

const Header = ({ children, title, ...props }) => (
  <header
    css={css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      maxWidth: `container`,
      mx: `auto`,
      px: 2,
      height: 60,
      mb: 2,
    })}
  >
    <div
      css={css({
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      })}
    >
      <Title {...props}>{title}</Title>
      {children}
    </div>
  </header>
);

export default Header;
