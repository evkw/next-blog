import Link from 'next/link'

const Tag = (props) => {
    const { post } = props;
    return (
        <Link href={`/[slug]`} as={`/${post.slug}`}>
            <a className="ctag">{post.tags[0].name}</a>
        </Link>
    )
}

export default Tag;