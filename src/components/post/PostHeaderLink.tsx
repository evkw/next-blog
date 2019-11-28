import Link from 'next/link';

const PostBodyLink = (props) => {
    const { slug, title } = props;
    return (
        <Link href={`/[slug]`} as={`/${slug}`}>
            <h1 className="post__body-title">
                <a className="post__body-link relative underline-header underline-header--left">{title}</a>
            </h1>
        </Link>
    )
};

export default PostBodyLink;
