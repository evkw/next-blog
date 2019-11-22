import Link from 'next/link';

const PostHeaderLink = (props) => {
    const { slug, title } = props;
    return (
        <Link href={`/[slug]`} as={`/${slug}`}>
            <h1 className="post__body-title">
                <a className="post__body-link">{title}</a>
            </h1>
        </Link>
    )
};

export default PostHeaderLink;
