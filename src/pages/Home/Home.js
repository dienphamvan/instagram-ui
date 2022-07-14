import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import NewFeeds from './NewsFeed';
import SideBar from './SideBar';

const cx = classNames.bind(styles);

function Home() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('main')}>
                <NewFeeds />
                <SideBar />
            </div>
        </section>
    );
}

export default Home;
