import classNames from 'classnames/bind';
import { PropperWrapper } from '~/components/Propper';
import styles from './Noti.module.scss';
import NotiItem from './NotiItem';

const cx = classNames.bind(styles);

function Noti() {
    return (
        <PropperWrapper className={cx('noti-wrapper')}>
            <span>Gần đây</span>
            <NotiItem />
            <NotiItem />
            <NotiItem />
            <NotiItem />
            <NotiItem />
            <NotiItem />
        </PropperWrapper>
    );
}

export default Noti;
