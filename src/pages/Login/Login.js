import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '~/assets';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import Slider from '~/components/Slider';
import { routes } from '~/config';
import { useAuth } from '~/contexts/AuthContext';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            navigate(routes.home);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    const handleTestSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            setLoading(true);
            await login('test7@gmail.com', '123456');
            setLoading(false);
            navigate(routes.home);
        } catch (error) {
            setError(true);
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
                    <div className={cx('login-section', 'section')}>
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                        <h4>Cùng bạn chia sẻ khoảnh khắc</h4>
                        <form
                            className={cx('login-form')}
                            onFocus={() => {
                                setError(false);
                            }}
                        >
                            <input
                                className={cx('login-input')}
                                type="text"
                                name="email"
                                placeholder="Email"
                                ref={emailRef}
                            />

                            <input
                                className={cx('login-input')}
                                name="password"
                                type="password"
                                placeholder="Mật khẩu"
                                ref={passwordRef}
                            />
                            {error && <span className={cx('error')}>Sai mật khẩu hoặc tên đăng nhập !</span>}
                            <Button
                                type="submit"
                                onClick={handleSubmit}
                                square
                                white
                                disabled={loading}
                                className={cx('login-button')}
                            >
                                {!loading ? 'Đăng nhập' : <Loading className={cx('loading-icon')} />}
                            </Button>
                            <Button
                                type="submit"
                                onClick={handleTestSubmit}
                                square
                                white
                                disabled={loading}
                                className={cx('login-test-button')}
                            >
                                {!loading ? (
                                    'Đăng nhập bằng tài khoản admin'
                                ) : (
                                    <Loading className={cx('loading-icon')} />
                                )}
                            </Button>
                        </form>
                    </div>
                    <div className={cx('login-redirect', 'section')}>
                        <span>Bạn chưa có tài khoản? </span>
                        <Button to={routes.signup} blue>
                            Đăng ký
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Signup;
