import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading({ className }) {
    return <FontAwesomeIcon icon={faSpinner} className={cx('loading-icon', { [className]: className })} />;
}

export default Loading;
