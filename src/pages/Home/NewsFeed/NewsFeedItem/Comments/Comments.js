import classNames from 'classnames/bind';
import Modal from '~/components/Modal';
import Overlay from '~/components/Overlay';
import CommentItem from './CommentItem';
import styles from './Comments.module.scss';

const cx = classNames.bind(styles);

function Comments({ comments, handleHideComments }) {
    return (
        <>
            <Modal header="Tất cả bình luận" className={cx('wrapper')}>
                <div className={cx('body')}>
                    {comments.map((comment, index) => <CommentItem key={index} {...comment} />).reverse()}
                </div>
            </Modal>
            <Overlay onClick={handleHideComments} dark />
        </>
    );
}

export default Comments;
