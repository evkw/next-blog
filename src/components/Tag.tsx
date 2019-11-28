import Link from 'next/link'

const Tag = (props) => {
    const { tag } = props;
    if (!tag) {
        return null;
    }
    return (
        <div className="tag">
            <Link href={`/[slug]`} as={`/${tag.url}`}>
                <a className="ctag">{tag.name}</a>
            </Link>
        </div>
    )
}

export default Tag;