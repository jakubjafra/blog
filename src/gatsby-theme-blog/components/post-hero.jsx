/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';
import Image from 'gatsby-image';

const PostHero = ({ post }) => (
  <Fragment>
    {post?.image?.childImageSharp && (
      <Image
        fluid={post.image.childImageSharp.fluid}
        alt={post.imageAlt ? post.imageAlt : post.excerpt}
        sx={{
          mt: 2,
          mb: 2,
        }}
      />
    )}
  </Fragment>
);

export default PostHero;
