import { Link } from 'react-router-dom';

import { AiFillEye } from 'react-icons/ai';
import './ViewButton.scss';

const ViewButton = ({ orderId }) => {
    return (
        <Link to={`/orders/${orderId}`}>
            <button className="view-button"><AiFillEye /></button>
        </Link>
    );
}

export default ViewButton;