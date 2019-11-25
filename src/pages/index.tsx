
import '../sass/main.scss';

import Post from '../components/post';
import Search from '../components/Search';
import { getPosts } from '../api/ghost';

const Home = (props: HomeProps) => {
    return (
        <div>
            <header className="grid-container">
                <nav className="top-nav">
                    <div className="top-nav__logo">
                        <a href="/">Icon</a>
                    </div>

                    <Search className="top-nav__search"/>
                </nav>
                
                <div className="border"></div>
            </header>
            <main className="main grid-container">
                <div className="articles">
                    {props.posts.map(post => <Post key={post.id} post={post}></Post>)}
                </div>
            </main>
        </div>

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