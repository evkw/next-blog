
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

                    {/* <ul className="top-nav__list">
                        <li className="top-nav__list-item">
                            <a className="top-nav__link" href="#">Home</a>
                        </li>
                    </ul> */}

                    <Search className="top-nav__search"/>
                </nav>

            </header>
            <main className="grid-container">
                {props.posts.map(post => <Post key={post.id} post={post}></Post>)}
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