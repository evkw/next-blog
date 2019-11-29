import '../sass/main.scss';
import { getSinglePost, getAuthor, getTags, getLatestArticles } from 'src/api/ghost';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';

import Prism from "prismjs";

import { useEffect } from 'react';
import PostPublished from '@components/PostPublished';


const PostPage = (props) => {
  const { post, author, tags, latestArticles } = props;

  useEffect(() => {
    // Highlight code samples
    Prism.highlightAll();
  });


  if(!post) {
    return null;
  }

  return (
    <div>
      <Header />
      <main className="grid-container">
        <article className="post-page mt-large">
          <div className="post-page__content ">
            <header>
              <div className="post-page__feature-image mb-small">
                <img src={post.feature_image} />
              </div>
              <PostPublished accent published_at={post.published_at} />
              <h1 className="post-page__title">{post.title}</h1>
              
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
      </main>

      <Footer author={author} tags={tags} latestArticles={latestArticles} />
    </div >
  )
}

PostPage.getInitialProps = async (params) => {
  return {
    post: await getSinglePost(params.query.slug),
    author: await getAuthor('evan'),
    tags: await getTags(),
    latestArticles: await getLatestArticles()
  }
};

export default PostPage;