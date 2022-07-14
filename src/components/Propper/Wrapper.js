import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Propper.module.scss';

const cx = classNames.bind(styles);

function Propper({ children, className, arrow }) {
    return (
        <>
            <div data-popper-arrow="">
                <FontAwesomeIcon className={cx('arrow-propper')} icon={faCaretUp} />
            </div>
            <div className={cx('wrapper', { [className]: className })}>{children}</div>
        </>
    );
}

export default Propper;
