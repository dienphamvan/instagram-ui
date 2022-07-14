import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ActionItem.module.scss';

const cx = classNames.bind(styles);

function ActionItem(
    { Icon, ActiveIcon, to, isAvatar = false, isHeart = false, isModal = false, className, onClick, ...restProps },
    ref,
) {
    let Comp = 'button';

    const props = {
        className: cx('wrapper', {
            [className]: className,
        }),
        onClick,
        ...restProps,
        ref,
    };

    let ChildrenButton;

    const handleLinkChildren = ({ isActive }) => {
        if (isActive && !isModal && !isHeart && !isAvatar) {
            return <ActiveIcon />;
        } else {
            return <Icon />;
        }
    };

    if (to) {
        Comp = NavLink;

        props.to = to;
        props.children = handleLinkChildren;
    } else {
        Comp = 'button';
        ChildrenButton = isModal || isHeart ? ActiveIcon : Icon;
    }

    return to ? (
        <Comp {...props} />
    ) : (
        <Comp {...props}>
            <ChildrenButton />
        </Comp>
    );
}

export default forwardRef(ActionItem);
