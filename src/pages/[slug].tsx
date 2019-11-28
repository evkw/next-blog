import { getSinglePost, getAuthor, getTags } from 'src/api/ghost';
import Header from 'src/components/header/Header';
import { Footer } from 'src/components/footer/Footer';

const PostPage = (props) => {
  return (
    <div>
      <Header />
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
      <Footer author={props.author} tags={props.tags}/>
    </div>
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