import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { SearchIcon } from '~/components/Icons';
import Loading from '~/components/Loading';
import Overlay from '~/components/Overlay';
import { PropperWrapper } from '~/components/Propper';
import useDebounce from '~/hooks/useDebounce';
import { getUsers } from '~/service/getUsers';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchItems, setSearchItems] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [isShowMenu, setIsShowMenu] = useState(false);

    const handleInputChange = (e) => {
        if (e.target.value.startsWith(' ')) {
            return;
        }
        // Prevent SearchBox render before useEffect
        setIsLoading(true);
        setSearchValue(e.target.value);
    };

    const handleHideMenu = () => {
        setIsShowMenu(false);
    };

    const handleAddHistory = (account) => {
        if (searchHistory.find((item) => item.id === account.id)) return;
        setSearchHistory((prev) => [account, ...prev]);
    };

    const handleRemoveHistory = (id) => {
        setSearchHistory((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const SearchBox = () => {
        if (isLoading) {
            return (
                <span className={cx('center')}>
                    <Loading className={cx('loading', 'large')} />
                </span>
            );
        }

        if (!searchValue) {
            if (searchHistory.length > 0) {
                return searchHistory.map((item) => (
                    <AccountItem key={item.id} account={item} handleRemoveHistory={handleRemoveHistory} />
                ));
            } else {
                return <span className={cx('center')}>Không có nội dung tìm kiếm mới đây.</span>;
            }
        } else {
            if (searchItems.length > 0) {
                return searchItems.map((item) => (
                    <AccountItem key={item.id} account={item} handleAddHistory={handleAddHistory} />
                ));
            } else {
                return <span className={cx('center')}>Không tìm thấy kết quả nào.</span>;
            }
        }
    };

    const { debounceValue, isLoading: loading } = useDebounce(searchValue, 500);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    useEffect(() => {
        if (debounceValue) {
            const fetchApi = async () => {
                try {
                    setIsLoading(true);
                    const res = await getUsers(debounceValue);
                    setSearchItems(res);
                    setIsLoading(false);
                } catch (error) {
                    console.log(error);
                    setIsLoading(false);
                    return;
                }
            };
            fetchApi();
        }
    }, [debounceValue]);

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            {isShowMenu && <Overlay onClick={handleHideMenu} />}
            <HeadlessTippy
                visible={isShowMenu}
                interactive
                placement="bottom"
                appendTo={document.getElementById('modal')}
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <PropperWrapper className={cx('search-result')}>
                            {!searchValue && (
                                <div className={cx('head')}>
                                    <span className={cx('time')}>Gần đây</span>
                                    <Button
                                        medium
                                        blue
                                        onClick={() => {
                                            setSearchHistory([]);
                                        }}
                                    >
                                        Xoá tất cả
                                    </Button>
                                </div>
                            )}
                            <div className={cx('body')}>
                                <SearchBox />
                            </div>
                        </PropperWrapper>
                    </div>
                )}
                onClickOutside={handleHideMenu}
            >
                <div className={cx('wrapper', { 'z-index': isShowMenu })}>
                    {!isShowMenu && (
                        <span className={cx('search-icon')}>
                            <SearchIcon />
                        </span>
                    )}
                    <input
                        className={cx('search-input')}
                        placeholder="Tìm kiếm"
                        value={searchValue}
                        onChange={handleInputChange}
                        onFocus={() => {
                            setIsShowMenu(true);
                        }}
                    />
                    {isLoading && <Loading className={cx('loading')} />}
                    {isShowMenu && !isLoading && (
                        <button
                            onClick={() => {
                                setSearchValue('');
                                setIsShowMenu(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} />
                        </button>
                    )}
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
