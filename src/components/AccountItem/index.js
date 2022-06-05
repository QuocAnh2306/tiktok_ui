import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e99846f00ab6702d7716ba8d72a98d7a~c5_100x100.jpeg?x-expires=1654506000&x-signature=%2FBx%2FdTONniOIWlbCKCemEOHT2ZM%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>NGUYEN VAN A</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>nguyen van a</p>
            </div>
        </div>
    );
}

export default AccoutItem;
