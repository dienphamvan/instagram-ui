import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const defaultFunc = () => {};
function AccountItem({ account, handleAddHistory, handleRemoveHistory }) {
    return (
        <div className={cx('wrapper')}>
            <Link
                to={'/' + account.id}
                className={cx('user-wrapper')}
                onClick={handleAddHistory ? () => handleAddHistory(account) : defaultFunc}
            >
                <img alt={account.username} src={account.avatar} className={cx('avatar')} />
                <div className={cx('account')}>
                    <div className={cx('name')}>
                        <span className={cx('user-name')}>{account.username}</span>
                    </div>
                </div>
            </Link>
            {handleRemoveHistory && (
                <FontAwesomeIcon
                    onClick={() => handleRemoveHistory(account.id)}
                    className={cx('clear-icon')}
                    icon={faXmark}
                />
            )}
        </div>
    );
}

export default AccountItem;
