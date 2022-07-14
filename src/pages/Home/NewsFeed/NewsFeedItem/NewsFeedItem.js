import classNames from 'classnames/bind';
import { Timestamp } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import {
    CommentIcon,
    EmojiIcon,
    HeartActiveIcon,
    HeartIcon,
    MoreActionIcon,
    SaveActiveIcon,
    SaveIcon,
    SharingIcon,
} from '~/components/Icons';
import StoryWrapper from '~/components/StoryWrapper';
import { routes } from '~/config';
import { putComments } from '~/service/putComment';
import { putLike } from '~/service/putLike';
import Comments from './Comments';
import LikedUsers from './LikedUsers';
import styles from './NewsFeedItem.module.scss';

const cx = classNames.bind(styles);
function NewsFeedItem(props) {
    const {
        pid,
        uid,
        currentUserId,
        username,
        avatar,
        createdAt,
        postImage,
        postContent,
        isLove: initialIsLove,
        likes,
        comments,
    } = props;
    const [isLove, setIsLove] = useState(initialIsLove);
    const [isSave, setIsSave] = useState(false);
    const [likesAmount, setLikesAmount] = useState(likes.length);
    const [commentsAmount, setCommentsAmount] = useState(comments.length);
    const [overFlowText, setOverFlowText] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isShowLikedModal, setIsShowLikedModal] = useState(false);
    const [isShowComments, setIsShowComments] = useState(false);
    const [commentCount, setCommentCount] = useState(0);
    const [postTime, setPostTime] = useState('');
    const contentRef = useRef(null);
    const formCommentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current.clientHeight / 20 > 2) {
            setOverFlowText(true);
        } else setOverFlowText(false);

        const time = Timestamp.now().seconds - createdAt.seconds;
        if (time < 60) {
            setPostTime('Vừa xong');
        } else if (60 <= time && time < 3600) {
            setPostTime('' + Math.round(time / 60) + ' PHÚT TRƯỚC');
        } else if (3600 <= time && time < 86400) {
            setPostTime('' + Math.round(time / 3600) + ' GIỜ TRƯỚC');
        } else if (86400 <= time) {
            setPostTime('' + Math.round(time / 86400) + ' NGÀY TRƯỚC');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <article className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('user')}>
                    <StoryWrapper to={routes.story} className={cx('story-wrapper')}>
                        <img src={avatar} alt="avatar" />
                    </StoryWrapper>
                    <Link to={`/${uid}`} className={cx('user-name')}>
                        {username}
                    </Link>
                </div>
                <MoreActionIcon className={cx('more-action-icon')} />
            </header>
            <div className={cx('body')}>
                <img src={postImage} alt="Post" />
            </div>
            <div className={cx('wrapper-action')}>
                <div className={cx('action')}>
                    <div className={cx('interact')}>
                        {isLove ? (
                            <HeartActiveIcon
                                className={cx('heart-active-icon', 'icon')}
                                onClick={() => {
                                    putLike(pid, currentUserId, 'delete');
                                    setIsLove(false);
                                    setLikesAmount((prev) => prev - 1);
                                }}
                            />
                        ) : (
                            <HeartIcon
                                className={cx('heart-icon', 'icon')}
                                onClick={() => {
                                    putLike(pid, currentUserId, 'post');
                                    setIsLove(true);
                                    setLikesAmount((prev) => prev + 1);
                                }}
                            />
                        )}
                        <CommentIcon className={cx('icon')} />
                        <SharingIcon className={cx('icon')} />
                    </div>
                    {isSave ? (
                        <SaveActiveIcon
                            width="2.4rem"
                            height="2.4rem"
                            className={cx('save-icon', 'icon')}
                            onClick={() => {
                                setIsSave(false);
                            }}
                        />
                    ) : (
                        <SaveIcon
                            width="2.4rem"
                            height="2.4rem"
                            className={cx('icon')}
                            onClick={() => {
                                setIsSave(true);
                            }}
                        />
                    )}
                </div>
                {isShowLikedModal && (
                    <LikedUsers
                        handleHideModal={() => {
                            setIsShowLikedModal(false);
                        }}
                        uids={likes}
                    />
                )}
                {likesAmount ? (
                    <button
                        className={cx('likes')}
                        onClick={() => {
                            setIsShowLikedModal(true);
                        }}
                    >
                        {likesAmount} người thích
                    </button>
                ) : (
                    <span className={cx('likes')}>Hãy là người đầu tiên thích bài viết này</span>
                )}
                <div className={cx('post-content')}>
                    <div ref={contentRef} className={cx('content', { 'over-flow': overFlowText })}>
                        <span className={cx('user-name')}>{username}</span> {postContent}
                    </div>
                    {overFlowText && (
                        <button
                            onClick={() => {
                                setOverFlowText(false);
                            }}
                            className={cx('more')}
                        >
                            xem thêm
                        </button>
                    )}
                </div>
                <div>
                    {isShowComments && (
                        <Comments
                            handleHideComments={() => {
                                setIsShowComments(false);
                            }}
                            comments={comments}
                        />
                    )}
                    <button
                        onClick={() => {
                            if (commentsAmount === 0) return;
                            setIsShowComments(true);
                        }}
                        className={cx('comments')}
                    >
                        {commentsAmount === 0
                            ? 'Hãy là người đầu tiên bình luận'
                            : `Xem tất cả ${commentsAmount} bình luận`}
                    </button>
                </div>

                <div className={cx('time')}>{postTime}</div>
            </div>
            <footer className={cx('comment-writing')}>
                <form
                    ref={formCommentRef}
                    className={cx('comment-form')}
                    onSubmit={(e) => {
                        e.preventDefault();
                        setCommentsAmount((prev) => prev + 1);
                        setCommentCount(0);
                        putComments(currentUserId, pid, e.target[0].value);
                        formCommentRef.current.reset();
                    }}
                >
                    <EmojiIcon className={cx('emoji')} />
                    <input
                        className={cx('comment-input')}
                        type="text"
                        placeholder="Thêm bình luận"
                        onChange={(e) => {
                            e.target.value.trim() === '' || e.target.value.length > 250
                                ? setIsDisabled(true)
                                : setIsDisabled(false);
                            setCommentCount(e.target.value.length);
                        }}
                    />

                    <span className={cx('comment-count')}>{commentCount}/250</span>

                    <Button blue medium disabled={isDisabled}>
                        Đăng
                    </Button>
                </form>
            </footer>
        </article>
    );
}

export default NewsFeedItem;
