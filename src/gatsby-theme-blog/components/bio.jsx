/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { jsx, css, Flex } from 'theme-ui';

import BioContent from './bio-content';

const bioQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Bio = () => {
  const {
    site: {
      siteMetadata: { author },
    },
    avatar,
  } = useStaticQuery(bioQuery);

  return (
    <Flex css={css({ mb: 3, alignItems: `center` })}>
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )}
      <BioContent />
    </Flex>
  );
};

export default Bio;
