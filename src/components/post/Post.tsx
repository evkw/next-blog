import IconBubble from '../icons/IconBubble';

import PostPublished from './PostPublished';
import PostBodyLink from './PostHeaderLink';
import PostHeader from './PostHeader';
import Tag from '../Tag';

const Post = (props) => {
    const { post } = props;
    const postStyle = {
        backgroundImage: `url(${post.feature_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff'
    };

    return (
        <article className={post.featured === true ? 'post feature' : 'post'} style={post.featured === false ? postStyle : null}>
            <div className="post__tags">
               <Tag tag={post.primary_tag}/>
            </div>
            <PostHeader post={post} />
            <div className="post__body">
                <PostPublished published_at={post.published_at} />
                <PostBodyLink slug={post.slug} title={post.title} />
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
