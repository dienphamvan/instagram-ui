import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import images from '~/assets';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);
function Slider() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCounter((prev) => {
                if (prev >= 3) return 0;
                else return prev + 1;
            });
        }, 2000);
    }, [counter]);

    return (
        <>
            {images.signup.map((imageSrc, index) => (
                <img
                    key={index}
                    src={imageSrc}
                    className={cx('signup-image', { show: index === counter })}
                    alt="Signup pic"
                />
            ))}
        </>
    );
}

export default Slider;
