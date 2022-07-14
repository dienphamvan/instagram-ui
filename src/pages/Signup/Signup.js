import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '~/assets';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import Slider from '~/components/Slider';
import { routes } from '~/config';
import { useAuth } from '~/contexts/AuthContext';
import { postNewUser } from '~/service/postNewUser';
import styles from './Signup.module.scss';

const cx = classNames.bind(styles);

function Signup() {
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { signup, updateProfile } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password || !username) {
            setError('Vui lòng nhập đầy đủ thông tin !');
            return;
        }

        try {
            setError(false);
            setLoading(true);
            const data = await signup(email, password);
            const currentUser = data.user;
            await updateProfile(currentUser, {
                displayName: username,
                photoURL:
                    'https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2FdefaultAvatar.png?alt=media&token=fe315f8b-a0ec-4355-bc85-a10222f72318',
            });
            await postNewUser(currentUser.uid, username, currentUser.photoURL);
            setLoading(false);
            navigate(routes.setup);
        } catch (error) {
            setError(error.message.replace('Firebase: ', ''));
            setLoading(false);
        }
    };

    return (
        <article className={cx('wrapper')}>
            <div className={cx('container')}>
                <div style={{ backgroundImage: `url(${images.backgoundImage})` }} className={cx('image-section')}>
                    <Slider />
                </div>

                <div className={cx('form-section')}>
                    <div className={cx('signup-section', 'section')}>
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                        <h4>Đăng ký để xem ảnh và video từ bạn bè.</h4>
                        <form
                            className={cx('signup-form')}
                            onFocus={() => {
                                setError(false);
                            }}
                        >
                            <input
                                className={cx('signup-input')}
                                type="text"
                                name="email"
                                placeholder="Email"
                                ref={emailRef}
                            />

                            <input
                                className={cx('signup-input')}
                                type="text"
                                name="username"
                                placeholder="Tên người dùng"
                                ref={usernameRef}
                            />

                            <input
                                className={cx('signup-input')}
                                name="password"
                                type="password"
                                placeholder="Mật khẩu"
                                ref={passwordRef}
                            />
                            {error && <span className={cx('error')}>{error}</span>}
                            <Button
                                type="button"
                                onClick={handleSubmit}
                                square
                                white
                                disabled={loading}
                                className={cx('signup-button')}
                            >
                                {!loading ? 'Đăng ký' : <Loading className={cx('loading-icon')} />}
                            </Button>
                        </form>
                    </div>
                    <div className={cx('login-redirect', 'section')}>
                        <span>Bạn có tài khoản? </span>
                        <Button to={routes.login} blue>
                            Đăng nhập
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Signup;
