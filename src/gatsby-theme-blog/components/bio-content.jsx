/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby';
import { jsx } from 'theme-ui';

const bioContentQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default function Bio() {
  const {
    site: {
      siteMetadata: { description },
    },
  } = useStaticQuery(bioContentQuery);

  return <div>{description}</div>;
}
