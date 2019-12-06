import PostPublished from './PostPublished';
import Link from 'next/link';

export const LatestArticle = (props) => {
    const { post } = props;
    const headerStyle = {
        backgroundImage: `url(${post.feature_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="latest-article">
            <a href="#" className="latest-article__link" style={headerStyle}></a>
            <div className="latest-article__info">
                <PostPublished published_at={post.published_at} hideIcon={true}/>
                <Link href={`/[slug]`} as={`/${post.slug}`}>
                    <h2><a>{post.title}</a></h2>
                </Link>
            </div>
        </div>
    )
}

export default LatestArticle;