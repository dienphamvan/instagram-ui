import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import Modal from '~/components/Modal';
import Overlay from '~/components/Overlay';
import { getUser } from '~/service/getUser';
import styles from './LikedUsers.module.scss';

const cx = classNames.bind(styles);
function LikedUsers({ uids, handleHideModal }) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const renderUsers = () =>
        users.map((user) => (
            <Button to={`/${user.id}`} className={cx('user-section')} key={user.id}>
                <img src={user.avatar} alt="Avatar" />
                <span className={cx('user-name')}>{user.username}</span>
            </Button>
        ));
    useEffect(() => {
        const fetchData = async () => {
            const users = [];
            setIsLoading(true);
            for (let i = 0; i < uids.length; i++) {
                const uid = uids[i];
                const user = await getUser(uid);
                users.push(user);
            }
            setIsLoading(false);
            setUsers(users);
        };
        fetchData();
    }, [uids]);

    return (
        <>
            <Modal header="Lượt thích" className={cx('wrapper')}>
                <FontAwesomeIcon onClick={handleHideModal} className={cx('close-icon')} icon={faXmark} />
                <div className={cx('body', { 'd-flex-center': isLoading })}>
                    {isLoading ? <Loading className={cx('loading-icon')} /> : renderUsers()}
                </div>
            </Modal>
            <Overlay dark onClick={handleHideModal} />
        </>
    );
}

export default LikedUsers;
