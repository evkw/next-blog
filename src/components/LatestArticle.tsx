
export const LatestArticle = (props) => {
    const { post } = props;
    const headerStyle = {
        backgroundImage: `url(${post.feature_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="latest-article">
            <a href="#" className="latest-article__link" style={headerStyle}></a>
        </div>
    )
}

export default LatestArticle;