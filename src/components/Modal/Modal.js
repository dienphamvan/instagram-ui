import classNames from 'classnames/bind';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);
const modal = document.getElementById('modal');

function Modal({ header = '', children, className }) {
    return createPortal(
        <div className={cx('modal', { [className]: className })}>
            <div className={cx('header')}>
                <h4>{header}</h4>
            </div>
            {children}
        </div>,
        modal,
    );
}

export default Modal;
