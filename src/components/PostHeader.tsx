import Link from 'next/link';

const PostHeader = (props) => {
    const { post } = props;
    if (post.featured === false) {
        return null;
    }

    const headerStyle = {
        backgroundImage: `url(${post.feature_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'block'
    };

    return (
        <header className="post__header">
            <div className="post__header-image">
                <Link href={`/[slug]`} as={`/${post.slug}`}>
                    <a className="post__header-image-link">
                        <span style={headerStyle}></span>
                    </a>
                </Link>
            </div>
        </header>
    )
};

export default PostHeader;
