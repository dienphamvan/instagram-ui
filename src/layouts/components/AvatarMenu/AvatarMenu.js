import classNames from 'classnames/bind';
import { ProfileIcon, SaveIcon, SettingIcon, SwapIcon } from '~/components/Icons';
import { PropperWrapper } from '~/components/Propper';
import { useAuth } from '~/contexts/AuthContext';
import styles from './AvatarMenu.module.scss';
import AvatarMenuItem from './AvatarMenuItem';

const cx = classNames.bind(styles);

function AvatarMenu({ currentUser, handleShowSwap }) {
    const { signUserOut } = useAuth();

    const avatarMenuItems = [
        { icon: <ProfileIcon />, title: 'Trang cá nhân', to: '/' + currentUser.uid },
        { icon: <SaveIcon />, title: 'Đã lưu', to: '/' },
        { icon: <SettingIcon />, title: 'Cài đặt', to: '/setup' },
        {
            icon: <SwapIcon />,
            title: 'Chuyển tài khoản',
            onClick: handleShowSwap,
        },
        {
            icon: null,
            title: 'Đăng xuất',
            onClick: signUserOut,
            separator: true,
        },
    ];

    return (
        <>
            <PropperWrapper className={cx('avatar-menu')}>
                {avatarMenuItems.map((item, index) => (
                    <AvatarMenuItem item={item} key={index} />
                ))}
            </PropperWrapper>
        </>
    );
}

export default AvatarMenu;
