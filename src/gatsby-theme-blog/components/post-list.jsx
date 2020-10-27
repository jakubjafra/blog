/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';

import PostLink from './post-link';

const PostList = ({ posts }) => (
  <Fragment>
    {posts.map((node) => (
      <PostLink key={node.slug} {...node} />
    ))}
  </Fragment>
);

export default PostList;
