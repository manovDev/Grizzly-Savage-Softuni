import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import { useContext, useEffect } from 'react';
import { Notify } from '../../../contexts/Notify';
import './NotifyBox.scss';

const NotifyBox = () => {
    const { notify, setNotify } = useContext(Notify);

    useEffect(() => {
        setTimeout(() => {
            setNotify("");
        }, 5000);
    }, [notify]);

    const handleClose = () => {
        setNotify("");
    }

    return (
        <div
            className={`${notify ? ' notify-box ' + notify.type + ' show ' : ' notify-box '}`}
            onClick={handleClose}
            >

            <span className="close-icon">
                <CloseIcon />
            </span>
            {notify && notify.msg}
        </div>
    );
}

export default NotifyBox;