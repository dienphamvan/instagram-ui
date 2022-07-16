import classNames from 'classnames/bind';
import { PropperWrapper } from '~/components/Propper';
import styles from './Noti.module.scss';
import NotiItem from './NotiItem';

const cx = classNames.bind(styles);

const DUMMY_DATA = [
    {
        avatar: 'https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2F4YZ1h9pysrOAu9vnzZxmxeOacoT2?alt=media&token=72ab8ed5-5dc9-4738-a2d8-ce72f5da5a1e',
        username: 'bob',
        postImage:
            'https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2FTsLfvIlAnpQRJb8vOnYhcAjun5T2?alt=media&token=7f7f8374-1889-4ef4-bbe6-b48de2c60d51',
    },

    {
        avatar: 'https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2F7EkN7uCKt0dGNliIP3LSrsxHV2v1?alt=media&token=49aef03f-7770-435f-9022-f797a5e1c90c',
        username: 'ddgang',
        postImage:
            'https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2FTsLfvIlAnpQRJb8vOnYhcAjun5T2?alt=media&token=7f7f8374-1889-4ef4-bbe6-b48de2c60d51',
    },
    {
        avatar: 'https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2FIby0Koou4wg9RVxHYemDmfxb1y82?alt=media&token=70211698-d8a1-4990-bf24-3c302992c308',
        username: 'david',
        postImage:
            'https://firebasestorage.googleapis.com/v0/b/instagramserver-185ab.appspot.com/o/avatar%2FTsLfvIlAnpQRJb8vOnYhcAjun5T2?alt=media&token=7f7f8374-1889-4ef4-bbe6-b48de2c60d51',
    },
];

function Noti() {
    return (
        <PropperWrapper className={cx('noti-wrapper')}>
            <span>Gần đây</span>
            {DUMMY_DATA.map((data, index) => (
                <NotiItem avatar={data.avatar} username={data.username} postImage={data.postImage} key={index} />
            ))}
        </PropperWrapper>
    );
}

export default Noti;
