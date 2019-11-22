import Link from 'next/link';
import IconBubble from './icons/IconBubble';

import PostPublished from './PostPublished';

const FeaturedPost = (props) => {
    const { post } = props;
    console.log(post);
    const postClass = post.featured === true ? 'post feature' : 'post'
    return (
        <article className={postClass}>
            <div className="post__tags"></div>
            {post.featured === true ? <header className="post__header"></header> : null }
            <div className="post__body">
                <PostPublished published_at={post.published_at}/>
                <Link href={`/[slug]`} as={`/${post.slug}`}>
                    <h1 className="post__body-title">
                        <a className="post__body-link">{post.title}</a>
                    </h1>
                </Link>
                <p className="post__body-excerpt">{post.custom_excerpt}</p>
            </div>

            <footer className="post__footer">
                <p className="post__footer-read">{post.reading_time} min read</p>
                <div className="flex-fill"></div>
                <IconBubble className="post__footer-icon"></IconBubble>
            </footer>

        </article>
    )
};

export default FeaturedPost;

{/* <Link href={`/[slug]`} as={`/${post.slug}`}>
<a>{post.title}</a>
</Link> */}