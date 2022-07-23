import classNames from 'classnames/bind';
import { useApp } from '~/contexts/AppContext';
import styles from './NewsFeed.module.scss';
import NewsFeedItem from './NewsFeedItem';

const cx = classNames.bind(styles);
function NewsFeed() {
    const { posts } = useApp();

    return (
        <div className={cx('wrapper')}>
            {posts.map((post) => (
                <NewsFeedItem key={post.pid} {...post} />
            ))}
        </div>
    );
}

export default NewsFeed;
