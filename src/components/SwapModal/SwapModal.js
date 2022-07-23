import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { routes } from '~/config';
import { useAuth } from '~/contexts/AuthContext';
import Button from '../Button';
import { TickIcon } from '../Icons';
import Modal from '../Modal';
import Overlay from '../Overlay';
import styles from './SwapModal.module.scss';

const cx = classNames.bind(styles);
function SwapModal({ onClick }) {
    const { currentUser } = useAuth();

    return (
        <>
            <Modal header="Chuyển tài khoản" className={cx('swap-modal')}>
                <FontAwesomeIcon onClick={onClick} className={cx('close-icon')} icon={faXmark} />

                <div className={cx('body')}>
                    <div className={cx('account')}>
                        <div className={cx('profile')}>
                            <img alt="Avatar" src={currentUser.photoURL} />
                            <span className={cx('user-name')}>{currentUser.displayName}</span>
                        </div>
                        <span className={cx('icon')}>
                            <TickIcon />
                        </span>
                    </div>
                </div>

                <div className={cx('footer')}>
                    <Button onClick={onClick} to={routes.login} blue medium>
                        Đăng nhập vào tài khoản hiện có
                    </Button>
                </div>
            </Modal>
            <Overlay onClick={onClick} dark />
        </>
    );
}

export default SwapModal;
