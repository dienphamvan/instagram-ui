import classNames from 'classnames/bind';
import Action from '../Action';
import Logo from '../Logo';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('default-header')}>
            <div className={cx('wrapper', 'container')}>
                <Logo />
                <Search />
                <Action />
            </div>
        </header>
    );
}

export default Header;
