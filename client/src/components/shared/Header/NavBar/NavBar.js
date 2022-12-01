import { connect } from "react-redux";

import { Link } from "react-router-dom";

import gsLogo from "./assets/grizzly-savage-logo.png";
import CartLink from "./CartLink";

import SearchProductsInput from "./SearchProductsInput";
import ProfileNav from "./ProfileNav";
import "./NavBar.scss";

const NavBar = ({ user }) => {
	console.log(user);
	return (
		<div className="nav-wrapper">
			<nav>
				<Link to="/">
					<div className="header-logo">
						<img src={gsLogo} alt="Grizzly Savage Logo" />
					</div>
				</Link>

				<SearchProductsInput />

				<div className="user-greetings">
					{user ? (
						<>
							<span>Hello, {user.firstName}</span>
						</>
					) : (
						""
					)}
				</div>
				<div className="nav-additions">
					<ProfileNav user={user} />

					<CartLink />
				</div>
			</nav>
			<ul className="nav-links">
				<li>
					<Link to="/">SHOP</Link>
				</li>
				<li>
					<Link to="/about-us">ABOUT US</Link>
				</li>
				{/* <li>
                        <Link to="/">
                            <div className="header-logo">
                                <img src={gsLogo} alt="Grizzly Savage Logo"/>
                            </div>
                        </Link>
                    </li> */}
				<li>
					<Link to="/faq">FAQ</Link>
				</li>
				<li>
					<Link to="/contact-us">CONTACT US</Link>
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.user.user,
});

export default connect(mapStateToProps, null)(NavBar);
