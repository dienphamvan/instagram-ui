import classNames from 'classnames/bind';
import styles from './NotiItem.module.scss';

const cx = classNames.bind(styles);

function NotiItem({ data }) {
    return (
        <div className={cx('noti-item')}>
            <div className={cx('action')}>
                <img
                    className={cx('avatar')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                    alt="avatar"
                />
                <span className={cx('user')}>
                    <span className={cx('name')}>khatucr7 </span>
                    <span className={cx('content')}>đã thích video của bạn.</span>
                    <span className={cx('time')}>2 tuần</span>
                </span>
            </div>
            <img
                className={cx('post-image')}
                src="https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Unicorn-cake-32e0971.jpg"
                alt="post"
            />
        </div>
    );
}

export default NotiItem;
