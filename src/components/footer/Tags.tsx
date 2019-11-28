import Tag from '../Tag';

export const Tags = (props) => {
    const { tags } = props;
    return (
        <div>
            <h3 className="header-tertiary header-white">Tags</h3>
            <div className="border mb-medium"></div>
            <div className="tags">
                {tags.map(tag => <Tag key={tag.slug} tag={tag}/>)}
            </div>
        </div>
    )
}

export default Tags;