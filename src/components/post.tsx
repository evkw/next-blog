import IconBubble from './icons/IconBubble';

import PostPublished from './PostPublished';
import PostHeaderLink from './PostHeaderLink';

const Post = (props) => {
    const { post } = props;
    const postClass = post.featured === true ? 'post feature' : 'post'
    return (
        <article className={postClass}>
            <div className="post__tags"></div>
            <div className="post__body">
                {post.featured === true ? <header></header> : null}
                <PostPublished published_at={post.published_at} />
                <PostHeaderLink slug={post.slug} title={post.title} />
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

export default Post;
