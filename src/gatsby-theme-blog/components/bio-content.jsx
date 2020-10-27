/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby';
import { Styled, jsx } from 'theme-ui';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  AlternateEmail as AlternateEmailIcon,
} from '@material-ui/icons';

const bioContentQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        social {
          name
          url
        }
      }
    }
  }
`;

const iconComponents = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: AlternateEmailIcon,
};

export default function Bio() {
  const {
    site: {
      siteMetadata: { description, social },
    },
  } = useStaticQuery(bioContentQuery);

  return (
    <div
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div sx={{ flex: 1 }}>{description}</div>
      <div sx={{ flex: 1, textAlign: 'right' }}>
        {social
          ? social.map(({ url, name }) => {
              const Icon = iconComponents[name];

              return (
                <Styled.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={url}
                  sx={{
                    ml: 2,
                  }}
                >
                  <Icon
                    sx={{
                      color: 'initial',
                      fontSize: name === 'github' ? '1.2rem !important' : '1.4rem !important',
                      lineHeight: '1.5em',
                      top: name === 'github' ? '0.1em' : '0.175em',
                      position: 'relative',
                      '&:hover': {
                        color: 'primary',
                      },
                    }}
                  />
                </Styled.a>
              );
            })
          : null}
      </div>
    </div>
  );
}
