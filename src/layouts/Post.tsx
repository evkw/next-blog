import Tag from '@components/Tag';
import PostHeader from '@components/PostHeader';
import PostPublished from '@components/PostPublished';
import PostBodyLink from '@components/PostHeaderLink';
import IconBubble from '@components/icons/IconBubble';


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
                <PostPublished className="post__body-published" published_at={post.published_at} accent={post.featured}/>
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
