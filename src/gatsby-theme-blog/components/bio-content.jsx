/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby';
import { Styled, jsx } from 'theme-ui';

import { default as theme } from '../../gatsby-plugin-theme-ui';

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
  github: ({ sxOverwrite }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" sx={sxOverwrite}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
    </svg>
  ),
  linkedin: ({ sxOverwrite }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" sx={sxOverwrite}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
    </svg>
  ),
  email: ({ sxOverwrite }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" sx={sxOverwrite}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
    </svg>
  ),
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
                    sxOverwrite={{
                      fill: theme.colors.text,
                      width: name === 'github' ? '20px' : '24px',
                      height: 'auto',
                      lineHeight: 1.5,
                      top: name === 'github' ? '0' : '2px',
                      position: 'relative',
                      '&:hover': {
                        fill: theme.colors.primary,
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
