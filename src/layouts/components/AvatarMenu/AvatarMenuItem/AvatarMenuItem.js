import classNames from 'classnames/bind';
import styles from './AvatarMenuItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AvatarMenuItem({ item }) {
    let Comp = 'button';
    const props = { onClick: item.onClick };
    if (item.to) {
        Comp = Link;
        props.to = item.to;
    }

    return (
        <Comp {...props} className={cx('wrapper', { separator: item.separator })}>
            {item.icon && <span className={cx('icon')}>{item.icon}</span>}
            <span className={cx('title')}>{item.title}</span>
        </Comp>
    );
}

export default AvatarMenuItem;
