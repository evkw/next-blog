import Author from '@components/Author'
import LatestArticles from '@components/LatestArticles';
import Tags from './Tags';

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
            <div className="legal">
                <p>Theme heavily inspired by Breek</p>
                <p>Copyright &copy; by Evan Wallace</p>
            </div>
        </footer>
    )
}

export default Footer;

// https://themeforest.net/item/breek-a-masonry-theme-for-ghost/13112831