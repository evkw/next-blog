import Link from 'next/link';

const Post = (props) => {
    console.log(props.post)
    const { post } = props;
    return (
        <article>
            <Link href={`/[slug]`} as={`/${post.slug}`}>
                <a>{post.title}</a>
            </Link>
        </article>
    )
};

export default Post;