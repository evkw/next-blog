import IconCalendar from '../icons/IconCalendar';

import moment from 'moment';

const PostPublished = (props) => {
    const { published_at } = props;
    return (
        <div className="post__body-published">
            <IconCalendar className="post__body-published-icon"></IconCalendar>
            <p className="post__body-published-text">{moment(published_at).format("MMM D, YYYY")}</p>
        </div>
    )
};

export default PostPublished;
