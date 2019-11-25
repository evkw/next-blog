import LatestArticles from './LatestArticles'
import Tags from './Tags'
import Author from './Author'

export const Footer = (props) => {
    const { author, tags } = props;
    return (
        <footer className="grid-container footer">
            <div className="footer-grid">
                <LatestArticles />
                <Tags tags={tags} />
                <Author author={author} />
            </div>
            <div className="border mt-medium"></div>
        </footer>
    )
}