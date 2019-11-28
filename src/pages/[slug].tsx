import '../sass/main.scss';
import { getSinglePost, getAuthor, getTags } from 'src/api/ghost';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';


const PostPage = (props) => {
  const { post, author, tags } = props;
  console.log(post);
  return (
    <div>
      <Header />
      <main className="grid-container">
        <article className="post-page mt-large">
          <div className="post-page__content ">

            <h1 className="post-page__title">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
      </main>

      <Footer author={author} tags={tags} />
    </div >
  )
}

PostPage.getInitialProps = async (params) => {
  return {
    post: await getSinglePost(params.query.slug),
    author: await getAuthor('evan'),
    tags: await getTags()
  }
};

export default PostPage;