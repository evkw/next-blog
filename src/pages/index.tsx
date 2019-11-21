
import '../sass/main.scss';

import Post from '../components/post';
import { getPosts } from '../api/ghost';
import IconBubble from '../components/icons/IconBubble';

const Home = (props: HomeProps) => {
    return (
        <main>
            <IconBubble />
            {props.posts.map(post => <Post key={post.id} post={post}></Post>)}
        </main>
    )
};

Home.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts: posts }
}

export default Home;

interface HomeProps {
    posts: any;
}