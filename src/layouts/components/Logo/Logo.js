import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from '~/assets';
import { Link } from 'react-router-dom';
import { routes } from '~/config';

const cx = classNames.bind(styles);

const logoStyles = {
    backgroundPosition: '0 -324px',
    backgroundImage: `url(${images.mainImage})`,
};

function Logo() {
    return (
        <Link to={routes.home}>
            <div className={cx('logo')} style={logoStyles}></div>
        </Link>
    );
}

export default Logo;
