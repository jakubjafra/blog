/** @jsx jsx */
import { jsx } from 'theme-ui';

import Layout from './layout';
import SEO from './seo';
import HomeFooter from './home-footer';
import PostList from './post-list';

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <main>
      <PostList posts={posts} />
    </main>
    <HomeFooter socialLinks={socialLinks} />
  </Layout>
);

export default Posts;
