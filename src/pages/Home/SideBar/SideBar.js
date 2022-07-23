import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { useApp } from '~/contexts/AppContext';
import { useAuth } from '~/contexts/AuthContext';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

const dummyDataUsers = [
    {
        uid: Math.random(),
        username: 'thejourneybeyondlove',
        avatar: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        uid: Math.random(),
        username: 'lemin666',
        avatar: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
];

function SideBar() {
    const { currentUser } = useAuth();
    const { displayName: username, photoURL: avatar } = currentUser;
    const { setIsShowSwapModal } = useApp();

    return (
        <>
            <section className={cx('wrapper')}>
                <div className={cx('current-user')}>
                    <div className={cx('infor')}>
                        <Image className={cx('avatar')} src={avatar} alt="Avatar" />
                        <span className={cx('username')}>{username}</span>
                    </div>
                    <Button
                        blue
                        medium
                        onClick={() => {
                            setIsShowSwapModal(true);
                        }}
                    >
                        Chuyển
                    </Button>
                </div>
                <div className={cx('recommend')}>
                    <div className={cx('header')}>
                        <span>Gợi ý cho bạn</span>
                        <Button black medium>
                            Xem tất cả
                        </Button>
                    </div>
                    <div className={cx('wrapper')}>
                        {dummyDataUsers.map((user) => (
                            <div className={cx('user-wrapper')} key={user.uid}>
                                <div className={cx('user')}>
                                    <Link to={`/${user.uid}`}>
                                        <Image className={cx('avatar')} src={user.avatar} alt="avatar" />
                                    </Link>
                                    <div className={cx('user-infor')}>
                                        <Link className={cx('username')} to={`/${user.uid}`}>
                                            {user.username}
                                        </Link>
                                        <span className={cx('status')}>Mới tham gia Instagram</span>
                                    </div>
                                </div>
                                <Button blue medium>
                                    Theo dõi
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                <footer>
                    <ul className={cx('footer')}>
                        <li>Giới thiệu</li>
                        <li>Trợ giúp</li>
                        <li>Báo chí</li>
                        <li>API</li>
                        <li>Việc làm</li>
                        <li>Quyền riêng tư</li>
                        <li>Điều khoản</li>
                        <li>Vị trí</li>
                        <li>Ngôn ngữ</li>
                    </ul>
                    <div className={cx('created-by')}>© 2022 INSTAGRAM FROM PVD</div>
                </footer>
            </section>
        </>
    );
}

export default SideBar;
