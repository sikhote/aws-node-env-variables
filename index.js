import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getPosts } from 'lib/requests';
import Title from 'components/Title';
import Articles from 'components/blog/Articles';
import lang from 'lang';

const Blog = ({ posts }) => (
  <>
    <Title title={lang.blog.title} />
    <H1> Articles </H1>
    <Articles posts={posts} />
  </>
);

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    // Only get every hour
    revalidate: 3600,
  };
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Blog;

const H1 = styled.h1`
  font-size: 34px;
  text-align: center;
  margin: 40px auto 10px auto;
`;
