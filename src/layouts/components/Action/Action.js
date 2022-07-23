import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import {
    ExploreActiveIcon,
    ExploreIcon,
    HeartActiveIcon,
    HeartIcon,
    HomeActiveIcon,
    HomeIcon,
    MessageActiveIcon,
    MessageIcon,
    UploadActiveIcon,
    UploadIcon,
} from '~/components/Icons';
import Overlay from '~/components/Overlay';
import { routes } from '~/config';
import { useApp } from '~/contexts/AppContext';
import { useAuth } from '~/contexts/AuthContext';
import AvatarMenu from '../AvatarMenu';
import Noti from '../Noti';
import UploadModal from '../UploadModal';
import styles from './Action.module.scss';
import ActionItem from './ActionItem';

const cx = classNames.bind(styles);

function Action() {
    const [isModal, setIsModal] = useState(false);
    const [isHeart, setIsHeart] = useState(false);
    const [isAvatar, setIsAvatar] = useState(false);

    const { setIsShowSwapModal } = useApp();

    const handleShowModal = () => {
        setIsModal(true);
    };

    const handleHideModal = () => {
        setIsModal(false);
    };

    const handleShowSwap = () => {
        setIsShowSwapModal(true);
        setIsAvatar(false);
    };

    const { currentUser } = useAuth();

    return (
        <>
            {(isHeart || isAvatar) && <Overlay />}
            {isModal && <UploadModal handleHideModal={handleHideModal} />}
            <div className={cx('wrapper')}>
                <ActionItem
                    isModal={isModal}
                    isHeart={isHeart}
                    isAvatar={isAvatar}
                    Icon={HomeIcon}
                    ActiveIcon={HomeActiveIcon}
                    to={routes.home}
                />
                <ActionItem
                    isModal={isModal}
                    isHeart={isHeart}
                    Icon={MessageIcon}
                    ActiveIcon={MessageActiveIcon}
                    to={routes.inbox}
                />
                <ActionItem
                    isModal={isModal}
                    Icon={UploadIcon}
                    ActiveIcon={UploadActiveIcon}
                    onClick={handleShowModal}
                />
                <ActionItem
                    isModal={isModal}
                    isHeart={isHeart}
                    isAvatar={isAvatar}
                    Icon={ExploreIcon}
                    ActiveIcon={ExploreActiveIcon}
                    to={routes.explore}
                />
                <HeadlessTippy
                    placement="bottom-end"
                    appendTo={document.getElementById('modal')}
                    offset={[40, 10]}
                    interactive
                    visible={isHeart}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <Noti />
                        </div>
                    )}
                    onClickOutside={() => {
                        setIsHeart(false);
                    }}
                >
                    <ActionItem
                        isHeart={isHeart}
                        Icon={HeartIcon}
                        ActiveIcon={HeartActiveIcon}
                        onClick={() => {
                            setIsHeart(true);
                        }}
                    />
                </HeadlessTippy>

                <HeadlessTippy
                    placement="bottom-end"
                    appendTo={document.getElementById('modal')}
                    offset={[40, 10]}
                    interactive
                    visible={isAvatar}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            <AvatarMenu handleShowSwap={handleShowSwap} currentUser={currentUser} />
                        </div>
                    )}
                    onClickOutside={() => {
                        setIsAvatar(false);
                    }}
                >
                    <div
                        className={cx('wrapper-avatar', { 'wrapper-border': isAvatar })}
                        onClick={() => {
                            setIsAvatar(true);
                        }}
                    >
                        <img className={cx('avatar')} src={currentUser.photoURL} alt="avatar" />
                    </div>
                </HeadlessTippy>
            </div>
        </>
    );
}

export default Action;
