
import Post from '../components/post';
import { getPosts } from '../api/ghost';

const Home = (props) => {
    console.log(props)
    return (
        <main>
            {props.posts.map(post => <Post post={post}></Post>)}
        </main>
    )
};

Home.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts: posts }
}


export default Home;