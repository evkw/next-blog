import LatestArticle from './LatestArticle';

export const LatestArticles = (props) => {
    const { latestArticles } = props;
    
    return (
        <div>
            <h3 className="header-tertiary header-white">Latest Articles</h3>
            <div className="border mb-medium"></div>
            <div className="latest-articles">

                {!!latestArticles ? latestArticles.map(post => <LatestArticle key={post.id} post={post} />): null}

            </div>
        </div>
    )
}

export default LatestArticles;