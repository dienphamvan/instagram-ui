import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import images from '~/assets';
import Image from '~/components/Image';
import { getUser } from '~/service/getUser';
import styles from './Comments.module.scss';

const cx = classNames.bind(styles);
function CommentItem({ uid, commentContent }) {
    const [username, setUsername] = useState('username');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const user = await getUser(uid);
            setUsername(user.username);
            setAvatar(user.avatar);
        };
        fetchData();
    }, [uid]);

    return (
        <div className={cx('wrapper-item')}>
            <Image className={cx('avatar')} src={avatar} customFallback={images.defaultAvatar} alt="avatar" />
            <div className={cx('content-section')}>
                <span className={cx('username')}>{username}</span>
                <span className={cx('content')}>{commentContent}</span>
            </div>
        </div>
    );
}

export default CommentItem;
