import { faArrowRightLong, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { updateProfile } from 'firebase/auth';
import { getDownloadURL } from 'firebase/storage';
import { useRef, useState } from 'react';

import images from '~/assets';
import Button from '~/components/Button';
import { routes } from '~/config';
import { useAuth } from '~/contexts/AuthContext';
import { useStorage } from '~/contexts/StorageContext';
import { updateUser } from '~/service/updateUser';
import styles from './SetupAccount.module.scss';

const cx = classNames.bind(styles);
function SetupAccount() {
    const { currentUser } = useAuth();
    const { upload } = useStorage();
    const [avatar, setAvatar] = useState(currentUser.photoURL);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);
    const inputFileRef = useRef(null);
    const buttonSubmitRef = useRef(null);

    const validateFile = (filePath) => {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        return !allowedExtensions.exec(filePath);
    };

    const handleChangeInput = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (validateFile(file.name)) {
            alert('Hãy chọn đúng file ảnh của bạn !');
            return;
        }
        setAvatar(URL.createObjectURL(file));
        setIsLoading(true);
        try {
            const updateData = async () => {
                const uploadAvatar = await upload(file, `/avatar/${currentUser.uid}`);
                const url = await getDownloadURL(uploadAvatar.ref);
                updateProfile(currentUser, { photoURL: url });
                updateUser(currentUser.uid, null, url);
            };

            updateData();
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img src={images.logo} alt="Logo" />
            </header>
            <form
                ref={formRef}
                className={cx('content')}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <header className={cx('header-content')}>
                    Xin chào, <span className={cx('displayName')}>{currentUser.displayName}</span>
                    <br />
                    Hãy chọn avatar của bạn
                </header>
                <div className={cx('wrapper-avatar')}>
                    <img className={cx('avatar', { loading: isLoading })} src={avatar} alt="Avatar" />
                    {isLoading && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}
                </div>
                <input hidden ref={inputFileRef} onChange={handleChangeInput} type="file" accept="image/*" />
                <Button
                    onClick={() => {
                        inputFileRef.current.click();
                    }}
                    type="button"
                    className={cx('choose-button')}
                    square
                    white
                >
                    Chọn ảnh từ thiết bị
                </Button>
                <button type="submit" ref={buttonSubmitRef}></button>
                <Button
                    onClick={() => {
                        buttonSubmitRef.current.click();
                    }}
                    to={routes.home}
                    className={cx('next-button')}
                    blue
                    large
                    disabled={isLoading}
                >
                    Quay về trang chủ
                    <FontAwesomeIcon className={cx('next-icon')} icon={faArrowRightLong} />
                </Button>
            </form>
        </div>
    );
}

export default SetupAccount;
