import { Link } from 'react-router-dom';
import { AiFillDashboard as DashboardIcon } from 'react-icons/ai';
import { FaShoppingCart as OrdersIcon } from 'react-icons/fa';
import { FaProductHunt as ProductsIcon } from 'react-icons/fa';
import { GiBookshelf as CategoryIcon } from 'react-icons/gi';
import { SiBrandfolder as BrandIcon } from 'react-icons/si';
import './DashboardNav.scss';

const DashboardNav = () => {
    return (
        <aside className="dashboard-nav">
            <ul>
                <li>
                    <Link to="/dashboard">
                        <DashboardIcon />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/orders">
                        <OrdersIcon />
                        Orders
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/products">
                        <ProductsIcon />
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/categories">
                        <CategoryIcon />
                        Categories
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/brands">
                        <BrandIcon />
                        Brands
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default DashboardNav;