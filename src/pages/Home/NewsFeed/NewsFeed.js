import classNames from 'classnames/bind';
import { usePosts } from '~/contexts/PostsContext';
import styles from './NewsFeed.module.scss';
import NewsFeedItem from './NewsFeedItem';

const cx = classNames.bind(styles);
function NewsFeed() {
    const { posts } = usePosts();

    return (
        <div className={cx('wrapper')}>
            {posts.map((post) => (
                <NewsFeedItem key={post.pid} {...post} />
            ))}
        </div>
    );
}

export default NewsFeed;
