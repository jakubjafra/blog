/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from './layout';
import SEO from './seo';
import PostTitle from './post-title';
import PostDate from './post-date';
import PrevNextPost from './post-prev-next';
import PostHero from './post-hero';

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      imageAlt={post.imageAlt}
    />
    <main>
      <article>
        <header>
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
          <PostHero post={post} />
        </header>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </main>
    <PrevNextPost {...{ previous, next }} />
  </Layout>
);

export default Post;
