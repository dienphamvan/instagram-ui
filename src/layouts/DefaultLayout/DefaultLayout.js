import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className={cx('content')}>{children}</div>
        </>
    );
}

export default DefaultLayout;
