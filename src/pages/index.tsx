
import '../sass/main.scss';

import Post from '../components/post/Post';
import { getPosts, getAuthor, getTags } from '../api/ghost';
import { Header } from 'src/components/header/Header';
import { Footer } from 'src/components/footer/Footer';

const Home = (props: HomeProps) => {
    return (
        <div>
           <Header />
            <main className="main grid-container">
                <div className="articles">
                    {props.posts.map(post => <Post key={post.id} post={post}></Post>)}
                </div>
            </main>
            <Footer author={props.author} tags={props.tags}/>
        </div>

    )
};

Home.getInitialProps = async () => {
    return { 
        posts: await getPosts(),
        author: await getAuthor('evan'),
        tags: await getTags()
     }
}

export default Home;

interface HomeProps {
    posts: any;
    author: any;
    tags: any;
}