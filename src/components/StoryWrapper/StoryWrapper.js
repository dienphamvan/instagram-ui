import classNames from 'classnames/bind';
import styles from './StoryWrapper.module.scss';
import images from '~/assets';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function StoryWrapper({ children, className, to }) {
    const styles = {
        backgroundImage: `url(${images.storyCircle})`,
    };
    return (
        <Link to={to} className={cx('wrapper', { [className]: className })} style={styles}>
            {children}
        </Link>
    );
}

export default StoryWrapper;
