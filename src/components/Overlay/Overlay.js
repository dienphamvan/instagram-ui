import classNames from 'classnames/bind';
import { createPortal } from 'react-dom';
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);
const overlayElement = document.getElementById('overlay');

function Overlay({ dark = false, children, ...restProps }) {
    return createPortal(
        <div className={cx('overlay', { dark })} {...restProps}>
            {children}
        </div>,
        overlayElement,
    );
}

export default Overlay;
