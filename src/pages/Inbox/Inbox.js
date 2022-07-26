import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import { EmojiIcon, MoreIcon, NewMessage, SendMessageIcon } from '~/components/Icons';
import { useApp } from '~/contexts/AppContext';
import { useAuth } from '~/contexts/AuthContext';
import { useMessages } from '~/contexts/MessagesContext';
import styles from './Inbox.module.scss';

const cx = classNames.bind(styles);

function Inbox() {
    const [userChatBox, setUserChatBox] = useState();
    const { setIsShowSwapModal } = useApp();
    const { rooms } = useMessages();
    const { currentUser } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('inbox-wrapper')}>
                <div className={cx('user-section')}>
                    <header className={cx('header')}>
                        <div></div>
                        <div
                            className={cx('username-wrapper')}
                            onClick={() => {
                                setIsShowSwapModal(true);
                            }}
                        >
                            <span className={cx('username')}>{currentUser.displayName}</span>
                            <FontAwesomeIcon icon={faChevronDown} className={cx('down-icon')} />
                        </div>
                        <NewMessage className={cx('new-message-icon')} />
                    </header>

                    <div className={cx('user-list')}>
                        {rooms.map((room) => (
                            <div
                                key={room.rid}
                                className={cx('user-item')}
                                onClick={() => {
                                    setUserChatBox(room.user);
                                }}
                            >
                                <img className={cx('avatar')} src={room.user.avatar} alt="avatar" />
                                <div className={cx('last-message-wrapper')}>
                                    <span className={cx('username')}>{room.user.username}</span>
                                    <span className={cx('last-message')}>{room.lastMessage}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {userChatBox ? (
                    <div className={cx('inbox-content')}>
                        <header className={cx('header')}>
                            <div className={cx('user')}>
                                <img src={userChatBox.avatar} alt="Avatar" className={cx('avatar')} />
                                <span className={cx('username')}>{userChatBox.username}</span>
                            </div>
                            <div>
                                <MoreIcon />
                            </div>
                        </header>

                        <ul className={cx('messages-wrapper')}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
                                <li key={val}>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2F4YZ1h9pysrOAu9vnzZxmxeOacoT2?alt=media&token=72ab8ed5-5dc9-4738-a2d8-ce72f5da5a1e"
                                        alt="avatar"
                                    />
                                    <span className={cx('message')}>alu đợi e dưới nhà 5-7p gì đó nha</span>
                                </li>
                            ))}
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
                                <li key={val} className={cx('current-user')}>
                                    {/* <img
                                    src="https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2F4YZ1h9pysrOAu9vnzZxmxeOacoT2?alt=media&token=72ab8ed5-5dc9-4738-a2d8-ce72f5da5a1e"
                                    alt="avatar"
                                /> */}
                                    <span className={cx('message')}>alu đợi e dưới nhà 5-7p gì đó nha</span>
                                </li>
                            ))}
                        </ul>
                        <div className={cx('input-wrapper')}>
                            <form className={cx('input-content')} onSubmit={handleSubmit}>
                                <EmojiIcon className={cx('emoji')} />
                                <input className={cx('message-input')} placeholder="Nhắn tin" />
                                <Button blue medium>
                                    Gửi
                                </Button>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className={cx('no-selected-room')}>
                        <SendMessageIcon />
                        <span className={cx('title')}>Tin nhắn của bạn</span>
                        <span className={cx('des')}>Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm.</span>
                        <Button blue square white>
                            Gửi tin nhắn
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Inbox;
