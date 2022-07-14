import { faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { v4 as uuid } from 'uuid';

import { useRef, useState } from 'react';
import Button from '~/components/Button';
import { MediaIcon } from '~/components/Icons';
import Modal from '~/components/Modal';
import Overlay from '~/components/Overlay';
import { useAuth } from '~/contexts/AuthContext';
import { useStorage } from '~/contexts/StorageContext';
import styles from './UploadModal.module.scss';
import { postNewPost } from '~/service/postNewPost';
import { getDownloadURL } from 'firebase/storage';

const cx = classNames.bind(styles);

function UploadModal({ handleHideModal }) {
    const [isLoading, setIsLoading] = useState(false);
    const [postImage, setPostImage] = useState(null);
    const [postContent, setPostContent] = useState('');
    const [file, setFile] = useState(null);
    const inputImageRef = useRef(null);
    const { currentUser } = useAuth();
    const { upload } = useStorage();

    const validateFile = (filePath) => {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        return !allowedExtensions.exec(filePath);
    };

    const handleInputChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (validateFile(file.name)) {
            alert('Hãy chọn đúng file ảnh của bạn !');
            return;
        }
        setFile(file);
        setPostImage(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            setIsLoading(true);
            const postId = uuid();
            const uploadTask = await upload(file, `/posts/${currentUser.uid}/${postId}`);
            const url = await getDownloadURL(uploadTask.ref);
            await postNewPost(postId, currentUser.uid, url, postContent);
            setIsLoading(false);
            handleHideModal();
            console.log('Done');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Modal header="Tạo bài viết mới" className={cx('upload-modal')}>
                <form onSubmit={handleSubmit} className={cx('body')}>
                    <div className={cx('image-section')}>
                        {postImage ? (
                            <div className={cx('post-image')}>
                                <img className={cx({ loading: isLoading })} src={postImage} alt="Post Img" />
                                {isLoading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />}
                            </div>
                        ) : (
                            <>
                                <span className={cx('icon')}>
                                    <MediaIcon />
                                </span>
                                <h5>Kéo ảnh và video vào đây</h5>{' '}
                            </>
                        )}
                        <input onChange={handleInputChange} ref={inputImageRef} type="file" accept="image/*" hidden />
                        <Button
                            onClick={() => {
                                inputImageRef.current.click();
                            }}
                            type="button"
                            square
                            white
                            className={cx('upload-button')}
                        >
                            Chọn từ máy tính
                        </Button>
                    </div>
                    <div className={cx('content-section')}>
                        <div className={cx('input-section')}>
                            <div className={cx('user')}>
                                <img className={cx('avatar')} src={currentUser.photoURL} alt="avatar" />
                                <span className={cx('username')}>{currentUser.displayName}</span>
                            </div>
                            <textarea
                                value={postContent}
                                className={cx('content-textarea')}
                                placeholder="Viết chú thích..."
                                onChange={(e) => {
                                    setPostContent(e.target.value);
                                }}
                            />
                        </div>
                        <Button
                            type="submit"
                            className={cx('submit-button')}
                            medium
                            blue
                            disabled={isLoading || !postContent || !postImage}
                        >
                            Chia sẻ
                        </Button>
                    </div>
                </form>
            </Modal>
            <Overlay dark onClick={handleHideModal}>
                <div className={cx('close-modal')}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </Overlay>
        </>
    );
}

export default UploadModal;
