/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import { Link } from 'gatsby';

const PostLink = ({ title, slug, date, excerpt }) => (
  <Styled.div
    as="article"
    sx={{
      mb: 4,
    }}
  >
    <header>
      <Styled.h2
        sx={{
          m: 0,
          mb: 1,
        }}
      >
        <Styled.a
          as={Link}
          to={slug}
          sx={{
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <small>{date}</small>
    </header>
    <section>
      <Styled.p>{excerpt}</Styled.p>
    </section>
  </Styled.div>
);

export default PostLink;
