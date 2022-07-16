import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);
const overlayElement = document.getElementById('overlay');
const bodyElement = document.getElementsByTagName('body');

function Overlay({ dark = false, children, ...restProps }) {
    useEffect(() => {
        bodyElement[0].style.overflow = 'hidden';
        return () => {
            bodyElement[0].style.overflow = '';
        };
    }, []);

    return createPortal(
        <div className={cx('overlay', { dark })} {...restProps}>
            {children}
        </div>,
        overlayElement,
    );
}

export default Overlay;
