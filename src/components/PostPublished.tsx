import moment from 'moment';
import IconCalendar from './icons/IconCalendar';

const PostPublished = (props) => {
    const { published_at, className, accent } = props;
    const containerClass = !!className ? `published ${className}` : 'published';
    const iconClass = !!accent ? `published__icon accent` : 'published__icon';
    return (
        <div className={containerClass}>
            <IconCalendar className={iconClass}></IconCalendar>
            <span className="published__text">{moment(published_at).format("MMM D, YYYY")}</span>
        </div>
    )
};

export default PostPublished;
