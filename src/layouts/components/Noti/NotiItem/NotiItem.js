import classNames from 'classnames/bind';
import styles from './NotiItem.module.scss';

const cx = classNames.bind(styles);

function NotiItem({ avatar, username, postImage }) {
    return (
        <div className={cx('noti-item')}>
            <div className={cx('action')}>
                <img className={cx('avatar')} src={avatar} alt="avatar" />
                <span className={cx('user')}>
                    <span className={cx('name')}>{username}</span>
                    <span className={cx('content')}>đã thích ảnh của bạn.</span>
                    <span className={cx('time')}>2 ngày</span>
                </span>
            </div>
            <img className={cx('post-image')} src={postImage} alt="post" />
        </div>
    );
}

export default NotiItem;
