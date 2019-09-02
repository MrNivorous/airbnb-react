import React from 'react'
import {Link} from 'react-router-dom'


class Nav extends React.Component {
	render () {
	return (
		<div>
		<nav>
			<Link to="/" className="logo" style={{ backgroundImage: `url(${"./images/logo-airbnb.png"})` }}></Link>

			<div className="profile">
				<Link to="profile.html" className="button">
					<div className="avatar" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/9.jpg')"}}></div>
					<span>Tony</span>
				</Link>
			</div>
		</nav>
		</div>
	)
	}
}

export default Nav

// {{backgroundImage: "url(/images/logo-airbnb.png)"}}

// <div className="profile">
// 	// <Link to="profile.html" className="button">
// 	// 	<div className="avatar" style={"background-image: url('https://randomuser.me/api/portraits/men/9.jpg')"}></div>
// 	// 	<span>Tony</span>
// 	// </Link>
// </div>
