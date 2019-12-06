
import '../sass/main.scss';

import { getPosts, getAuthor, getTags, getLatestArticles } from '../api/ghost';
import Header from '@layouts/Header';
import Post from '@layouts/Post';
import Footer from '@layouts/Footer';


const Home = (props: HomeProps) => {
    return (
        <div>
           <Header />
            <main className="main grid-container">
                <div className="articles">
                    {props.posts.map(post => <Post key={post.id} post={post}></Post>)}
                </div>
            </main>
            <Footer author={props.author} tags={props.tags} latestArticles={props.latestArticles}/>
        </div>

    )
};

Home.getInitialProps = async () => {
    return { 
        posts: await getPosts(),
        author: await getAuthor('evan'),
        tags: await getTags(),
        latestArticles: await getLatestArticles(),
     }
}

export default Home;

interface HomeProps {
    posts: any;
    author: any;
    tags: any;
    latestArticles: any;
}