import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const defaultFunc = () => {};
const Button = (
    {
        children,
        small = false,
        medium = false,
        large = false,
        blue = false,
        black = false,
        white = false,
        square = false,
        disabled = false,
        to = false,
        onClick = defaultFunc,
        className,
        ...restProps
    },
    ref,
) => {
    const classes = cx('wrapper', {
        small,
        medium,
        large,
        blue,
        black,
        white,
        square,
        disabled,
        [className]: className,
    });

    const props = {
        ...restProps,
    };

    let Comp = 'button';
    if (to) {
        Comp = Link;
        props.to = to;
    }

    return (
        <Comp ref={ref} className={classes} onClick={disabled ? defaultFunc : onClick} {...props}>
            {children}
        </Comp>
    );
};

export default forwardRef(Button);
