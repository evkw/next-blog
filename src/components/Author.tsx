import IconGithub from './icons/IconGithub';
import IconTwitter from './icons/IconTwitter';
import IconLinkedIn from './icons/IconLinkedIn';

export const Author = (props) => {
    const {author} = props;

    return (
        <div>
            <h3 className="header-tertiary header-white">About me</h3>
            <div className="border mb-medium"></div>
            <div className="author">
                <img className="author__avatar" src={author.profile_image} />
                <div className="author__info">
                    <h4 className="header-four header-white">{author.name}</h4>
                    <div className="author__links">
                        <a href={author.website}><IconGithub className="author__icon-link"/></a>
                        <IconTwitter className="author__icon-link"/>
                        <IconLinkedIn className="author__icon-link"/>
                    </div>
                </div>
                <p className="author__bio" dangerouslySetInnerHTML={{ __html: author.bio }}></p>
            </div>
        </div>
    )
}

export default Author;